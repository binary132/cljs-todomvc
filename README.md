# cljs-todomvc

A simple TodoMVC demo using [Om](https://github.com/swannodette/om), a Clojurescript library for working with react.js.

---

# Contents
 - [Getting started](#getting-started)
   - [Getting the tools](#getting-the-tools)
   - [Using the tools](#using-the-tools)


## Getting started

First, you'll need to [get the tools](#getting-the-tools) and learn [how to use them](#using-the-tools).

To get started, just clone this repo.  Run `lein deps` in the repo, then `lein cljsbuild auto` to start the automatic recompiler.

## Getting the tools

#### Leiningen

To work with Clojurescript, you'll need [Leiningen](http://leiningen.org), a build system for [Clojure](http://clojure.org).  You won't need to install Clojure; Leiningen manages Clojure versions for you.

Leiningen does most of your footwork in Clojure, using plugins like [lein-cljsbuild](https://github.com/emezeske/lein-cljsbuild#lein-cljsbuild).  The `lein` script is your go-to for managing projects and builds.

#### LightTable

For a clean, out-of-the-box workflow with Clojurescript, we recommend Chris Granger's [LightTable IDE](http://lighttable.com/).

## Using the tools

#### Leiningen

Try `lein help` for a list of commands, or `lein help tutorial` for a deeper walkthrough.  You shouldn't need to know much about using it for most projects.

Plugins and dependencies are simply added to `project.clj` in your workspace.  To grab them, run `lein deps`.  It might take a little while the first time, since it may need to download Clojure.  We've added `:plugins [[lein-cljsbuild "1.0.3"]]` to our [`project.clj`](https://github.com/synapse-garden/cljs-todomvc/blob/master/project.clj).

#### LightTable

LightTable allows inline eval using `ctrl-enter` on any Clojure block.  You can connect this live eval to your browser using the `Connect: Browser (Script-tag)` command.  It'll give you a `<script>` tag which you can put in the top of `<body>` in `index.html`.  Point your browser at `index.html` and refresh to activate the live eval.

Open `src/cljs-todomvc/cljs_todomvc/core.cljs` and try evaluating a simple sexp like `(+ 2 2)`.  You should see `4` appear next to it.

Now, try evaluating `(!swap app-state :text "Hello eval!")`.  You should see the new text appear in your browser instantly.

