/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your codefunction randomize() {
        document.getElementById("run").addEventListener("click", () => {

            function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
document.body.style.backgroundColor = generateRandomColor() // -> #e1ac94
someDiv.style.color = generateRandomColor() // -> #34c7aa
          });
})();
