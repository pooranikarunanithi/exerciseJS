/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var today = new Date();
    var x= weekday[today.getDay()];
    var year=today.getFullYear();
    var month= (monthNames[today.getMonth()]);
    var day= today.getDate();
    var hours= today.getHours();
    var min =today.getMinutes();
    document.getElementById("target").innerHTML = x+" "+day+" "+month+" "+year+" "+hours+"h"+min;
})();
