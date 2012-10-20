(defproject oak "1.0.0-SNAPSHOT"
  :description "FIXME: write"
  :dependencies [[org.clojure/clojure "1.2.0-beta1"]
                 [org.clojure/clojure-contrib "1.2.0-beta1"]
                 [compojure "0.4.1"]
                 [ring/ring-core "0.2.5"]
                 [ring/ring-devel "0.2.5"]
                 [ring/ring-jetty-adapter "0.2.5"]
                 [org.danlarkin/clojure-json "1.1"]
                 [congomongo "0.1.9"]
                 ;[org.clojars.the-kenny/clojure-couchdb "0.1.1"]
                 [org.mongodb/mongo-java-driver "2.7.3"]]
  :dev-dependencies
  [[lein-run "1.0.0-SNAPSHOT"]])
