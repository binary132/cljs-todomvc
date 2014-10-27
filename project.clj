(defproject todomvc-om "0.1.0-SNAPSHOT"
  :description "A sample TodoMVC project for Clojurescript/Om"
  :url "http://synapse-garden.github.com/cljs-todomvc"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [jasmine-cljs "0.1.5"]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :cljsbuild {
    :builds [{:id "mies-om-sample"
              :source-paths ["src"]
              :compiler {
                :output-to "mies_om_sample.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]}
  :source-paths ["src"])
