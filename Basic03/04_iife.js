// Immediately Invoked Function Expressions (IIFE)

(function chai() {
// named IIFE
console.log(`DB COnnected`)

}) ();
(
(name) => {
    console.log(`DB COnnected two ${name}`) 
}
) ('Pervesh')