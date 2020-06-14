// Raczej spodziewamy się typów boolean po obu stronach

true && true // true
true && false // false

true || false // true
false || false // false


// ale co jeśli będziemy mieć coś innego niz boolean?

'js dzem' && true // true
'' && true // '' - empty string
true && '' // '' - empty string
true && 'js dzem' // 'js dzem' ????????
'' && 'js dzem' // '' - empty string
0 && 'js dzem' // 0

// Czy && zawsze zwraca true albo false?
// NIE - zwraca pierwsze kryterium które zapewnia,
// ze dalsze obliczenia nie mająznaczenia:
// Rozwaz:
'a' && 7 && 0 && 'tego nie zobaczysz'

// podsumowując operator && zwróci pierwszą wartość falsy
// czyli która spełnia warunek !!wartosc === false

// Operator LUB || działa podobnie ale zwróci piewszą wartość truly
// czyli która spełnia warunek !!wartosc === true
'' || 0 || 'js dzem' || 'tego nie zobaczysz'


// dlaczego to tak działa i jak mozna to wykorzystać
// Czy to jest hackowanie?

// Być moze to dziwne i moze sie wydawać ze kod rzuca nieoczekiwane wyniki
// randomowe wyniki?
// Jak przewidziec zachowanie JS?

// Osoby doświadczone w JS wszystko rozumieją
// te zasady są proste i bardzo ułatwiają pisanie kodu
// szczególnie przydatne w podejściach funkcyjnych np. w React
// W React to norma - jeśli chcesz progroamować w React powinieneś to znać