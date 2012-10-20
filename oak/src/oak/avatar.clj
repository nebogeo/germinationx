;; Copyright (C) 2012 FoAM vzw
;; This program is free software: you can redistribute it and/or modify
;; it under the terms of the GNU Affero General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; This program is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU Affero General Public License for more details.
;;
;; You should have received a copy of the GNU Affero General Public License
;; along with this program.  If not, see <http://www.gnu.org/licenses/>.

(ns oak.avatar
  (:use
   oak.vec2
   oak.forms
   oak.log
   oak.defs
   oak.profile)
  (:require
   clojure.contrib.math))

(defn make-avatar [id name pos layer fp]
  (hash-map
   :version 2 
   :entity-type "avatar"
   :id id
   :owner name
   :pos pos
   :state "alive"
   :layer layer
   :flowered-plants fp
   :time (current-time)
   ))
