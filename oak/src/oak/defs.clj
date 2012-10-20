;; Copyright (C) 2010 FoAM vzw
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

(ns oak.defs
  (:require
   clojure.contrib.math))

(def db-version 2)
(def server-tick 1)
(def tile-size 5)
(def season-length (* 60 5)) 
(def plant-tick 2) 
(def plant-tick-var 3)
(def min-health 10)
(def max-health 90)
(def start-health 20)
(def ill-slow-amount 1000) ; 100 1 in n chance of state change
(def min-neighbours 2) ; not used
(def max-neighbours 10)
(def max-fruit 1)
(def fruit-probability 50) ; out of 1000
(def max-player-fruit 5) ; max a player can store
(def seeds-duration 15)
(def plant-influence-distance 3)
(def level0up 5)
(def level1up 8)
(def level2up 8)
(def server-db-items 32) ; num items to process per tick
(def max-plant-events 5)
(def ill-summon-prob 0)
(def ill-plant-summons-expire 5) ; time till summons are deleted
(def player-summons-expire 60) ; player summons stick around
(def summons-period 10) ; min time at any location
(def avatar-filter-time (* 10 60))

(defn plant-type->layer [type]
  (cond
   (= type "dandelion") "cover"
   (= type "clover") "cover"
   (= type "aronia") "shrub"
   (= type "apple") "tree"
   (= type "cherry") "tree"
   (= type "boletus") "fungi"
   (= type "chanterelle") "fungi"
   (= type "flyagaric") "fungi"
   (= type "oak") "tree"))

(defn num->layer [num]
  (cond
   (= num 0) "cover"
   (= num 1) "shrub"
   (= num 2) "tree"
   :else "all"))

(defn layer->num [layer]
  (cond
   (= layer "cover") 0
   (= layer "shrub") 1
   (= layer "tree") 2
   :else 3))

(defn plant-type->id [type]
  (cond
   (= type "cherry") 0
   (= type "apple") 1
   (= type "plant-002") 1 ; temp apple tree
   (= type "aronia") 2
   (= type "plant-003") 2 ; temp aronia
   (= type "dandelion") 3
   (= type "plant-001") 3 ; temp dandelion
   (= type "clover") 4
   (= type "boletus") 5
   (= type "chanterelle") 6
   (= type "flyagaric") 7
   (= type "oak") 8))

(def plant-types '("cherry" "apple" "aronia" "dandelion"
                   "clover" "boletus" "chanterelle" "flyagaric" "oak"
                   ))

(def plant-types-wo-fungi '("cherry" "apple" "aronia" "dandelion"
                   "clover" 
                   ))

(def plant-layers '(rhizosphere cover herbaceous shrub vertical tree canopy fungi))

(defn layer->spirit-name [layer]
  (cond
   (= layer "canopy") "CanopySpirit"
   (= layer "vertical") "VerticalSpirit"
   (= layer "cover") "CoverSpirit"
   (= layer "tree") "TreeSpirit"
   (= layer "shrub") "ShrubSpirit"
   :else "UnknownSpirit"))

(defn spirit-name->layer [name]
  (cond
   (= name "CanopySpirit") "canopy"
   (= name "VerticalSpirit") "vertical"
   (= name "CoverSpirit") "cover"
   (= name "TreeSpirit") "tree"
   (= name "ShrubSpirit") "shrub"
   :else "unknown"))

(defn emotion-map []
  { "LOVE" 0
    "HATE" 0
    "HOPE" 0
    "FEAR" 0
    "SATISFACTION" 0
    "RELIEF" 0
    "FEARS-CONFIRMED" 0
    "DISAPPOINTMENT" 0
    "JOY" 0
    "DISTRESS" 0
	"HAPPY_FOR" 0
	"PITTY" 0
	"RESENTMENT" 0
	"GLOATING" 0
    "PRIDE" 0
	"SHAME" 0
	"GRATIFICATION" 0
	"REMORSE" 0
	"ADMIRATION" 0
	"REPROACH" 0
	"GRATITUDE" 0
	"ANGER" 0 })
