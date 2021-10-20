/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    document.getElementById("run").addEventListener("click", () =>{
   
        const instance1 = new Cat('Skitty', 9);
        const instance2 = new Cat('Pixel', 6);
        console.log(instance1, instance2);

    })
    // your code here
})();
