; Gabriel Amodeo Elbling
; Prog. Paradigms
; HW12, Q2

(ns taxation) ; create taxation namespace

(defn tax [value taxRate] (* value (/ taxRate 100.0))) ; create tax function, calculates tax according to price and tax percentage

(ns application) ; create application namespace

(println (taxation/tax 117 7)) ; call tax function and display output using println