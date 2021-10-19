/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
      
       /* const nums = new Set();
        while(nums.size !== 10 ) {
          nums.add(Math.floor(Math.random() * 100) + 1);
        }
        
        console.log([...nums]);*/

        var sum=0;
        const nums= new Array();
        while(nums.length !== 10)
        {
          nums.push(Math.floor(Math.random() * 100) + 1);
        }

        for (i = 1; i <= 10; i++) 
        {
          document.getElementById("n-" + i).innerHTML = nums[i - 1];
          sum = sum + nums[i - 1];
        }
      
        var average = sum / 10;
        var max = Math.max(...nums);
        var min = Math.min(...nums);

        document.getElementById("max").innerHTML = max;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;
        console.log(nums);

        
    })
})();
