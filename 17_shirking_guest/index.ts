#!/usr/bin/env node
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
//  and you can only invite two guests.


let guests:string[]=["Hazoor Bakhsh","Safwan Ali","Nasir Hussain","Khuda Bakhsh"];
console.log("unfortunately,i can only invite two people for dinner.");
while (guests.length>2) {    // 2 guest remove kr rahay hn
    let removedGuest= guests.pop();
    console.log(`Sorry , ${removedGuest}, "i can not invite you for dinner.`)
} 

guests.forEach(guests=>{console.log(`Dear, ${guests} "You are still invited to dinner".`);})

guests.splice(0,guests.length);
console.log(guests);   // show empty list
