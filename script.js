let alfabe = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#%$&";
let arr = [...alfabe].splice(",");
let click=document.querySelector(".click")
let textRandom = document.querySelector(".text");
let p=document.querySelector(".p")
click.addEventListener("click",()=>{
   let parol = "";
   let a = Math.floor(Math.random() * 15) + 8;
   for (let i = 0; i < a; i++) {
     let radom = Math.floor(Math.random() * arr.length);
     parol = parol + arr[radom];
   }
   textRandom.innerHTML = parol;
   console.log(parol.length);
})

