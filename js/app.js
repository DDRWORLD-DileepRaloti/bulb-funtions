// console.log("this is bulb project to on or off");
on = document.getElementById("on");
off = document.getElementById("off");
bulb = document.querySelector("img#on-bulb");
on.addEventListener("click",(e)=>{
    // console.log(e.target.innerHTML)
    // console.log(bulb)
    bulb.src="img/on.jpg";
})

off.addEventListener("click",(e)=>{
    // console.log(e.target.innerHTML)
    bulb.src="img/off.jpg";
})