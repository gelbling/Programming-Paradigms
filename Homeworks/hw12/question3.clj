; Gabriel Amodeo Elbling
; Prog. Paradigms
; HW12, Q3

; import string library
(require '[clojure.string :as str])

; use string library to split-lines of read text file
(def tempString (str/split-lines (slurp "temperatures.txt")))

; convert strign input to array
(def tempArray (to-array tempString)) 

; convert array values to doubles
(def tempValues (map #(Double/parseDouble %) tempArray))

; get min using apply, convert to celcius and save value to variable
(def minimun (* (- (apply min tempValues) 32) (/ 5.0 9.0)))

; get max using apply, convert to celcius and save value to variable
(def maximum (* (- (apply max tempValues) 32) (/ 5.0 9.0)))

; calculate average using reduce, count and divide
; convert to celcius and save value to variable
(def average (* (- (/ (reduce + tempValues) (count tempValues)) 32) (/ 5.0 9.0)))

; display min, max and average calculated values in celcius
(println "Min =" minimun)
(println "Max =" maximum)
(println "Avg =" average)