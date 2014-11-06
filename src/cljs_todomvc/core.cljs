(ns cljs-todomvc.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

; https://github.com/swannodette/om/wiki/Basic-Tutorial#dealing-with-text-input-fields
; https://github.com/swannodette/om/wiki/Basic-Tutorial#higher-order-components

(enable-console-print!)

(def app-state (atom {:contacts
                      [{:first "Ben" :last "Bitdiddle" :email "benb@mit.edu"}
                       {:first "Alyssa" :middle-initial "P" :last "Hacker" :email "aphacker@mit.edu"}
                       {:first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
                       {:first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
                       {:first "Cy" :middle-initial "D" :last "Effect" :email "bugs@mit.edu"}
                       {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu"}]}))

(defn parse-contact [contact-str]
  (let [[first middle last :as parts] (string/split contact-str #"\s+")
        [first last middle] (if (nil? last) [first middle] [first last middle])
        middle (when middle (string/replace middle "." ""))
        c (if middle (count middle) 0)]
    (when (>= (count parts) 2)
      (cond-> {:first first :last last}
        (== c 1) (assoc :middle-initial middle)
        (>= c 2) (assoc :middle middle)))))

(defn add-contact [app owner]
  (let [input (om/get-node owner "new-contact")
        new-contact (-> (om/get-node owner "new-contact")
                        .-value
                        parse-contact)]
    (when new-contact
      (om/transact! app :contacts #(conj % new-contact))
      (set! (.-value input) ""))))

(defn middle-name [{:keys [middle middle-initial]}]
  (cond
    middle (str " " middle)
    middle-initial (str " " middle-initial ".")))

(defn display-name [{:keys [first last] :as contact}]
  (str last ", " first (middle-name contact)))

(defn contact-view [contact owner]
  (reify
    om/IRenderState
      (render-state [this {:keys [delete]}]
      (dom/li nil
        (dom/span nil (display-name contact))
        (dom/button #js {:onClick (fn [e] (put! delete @contact))} "Baleet")))))

(defn contacts-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:delete (chan)
       :button-name "Add"})
    om/IWillMount
    (will-mount [_]
      (let [delete (om/get-state owner :delete)]
        (go (loop []
          (let [contact (<! delete)]
            (om/transact! app :contacts
              (fn [xs] (vec (remove #(= contact %) xs))))
            (recur))))))
    om/IRenderState
    (render-state [this state]
      (dom/div nil
        (dom/h2 nil "Contact list")
        (apply dom/ul nil
          (om/build-all contact-view (:contacts app)
            {:init-state state}))
        (dom/div nil
          (dom/input #js {:type "text" :ref "new-contact"})
          (dom/button #js {:onClick #(add-contact app owner)} (:button-name state)))))))

(defn stripe [text bgc]
  (let [st #js {:backgroundColor bgc}]
    (dom/li #js {:style st} text)))

(om/root
  contacts-view
  app-state
  {:target (. js/document (getElementById "contacts"))})

