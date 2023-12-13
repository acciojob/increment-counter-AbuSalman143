//your JS code here. If required.

let counter=document.getElementById("counter");
let incrementBtn=document.getElementById("incrementBtn");
let count=0;
let increment=1;

incrementBtn.addEventListener("click",()=>{
	alert(count)
	count++
	counter.innerText=increment;
	increment++;
})


