(ns cljs-todomvc.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def app-state (atom {:text "Hello world!"}))
; (def app-state (atom {:list ["Lion" "Zebra" "Buffalo" "Antelope"]}))

(om/root
  (fn [app owner]
    (om/component (dom/h2 nil (:text app))))
  app-state
  {:target (. js/document (getElementById "app0"))})
