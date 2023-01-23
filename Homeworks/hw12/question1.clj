; Gabriel Amodeo Elbling
; Prog. Paradigms
; HW12, Q1

(def arg (first *command-line-args*)) ; get first argument from command line args

(def i (Integer. arg)) ; convert command line arg to integer

(def mylist (range 1 (+ i 1))) ; create range from 1 to command line arg value

(map inc mylist) ; create map from my list

(def mapping (map (fn [x] (* x x)) mylist)) ; for each element in the list, create map of sqares

; loop throgh map values and print them
(doseq [i mapping]
  (println i)
  )

; use reduce to get sum of numbers in the mapping variable (which are the squares)
; save the value into a variable
(def totalSum (reduce + mapping))

(println "Sum =" totalSum) ; print the sum

