/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    x= document.getElementById("numbers").value;
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let numbers = x.split(", ");
        numbers.sort(function(a, b) {
            return a - b;
          });
          alert(numbers);

    });
})();
