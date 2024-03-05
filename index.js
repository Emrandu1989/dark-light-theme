const modeBtn = document.querySelector("#mode");
let body = document.querySelector('body');   // for another option
 
let currMode = "light"; // dark;

modeBtn.addEventListener('click', () =>{
    /*  if(currMode === "light"){
        currMode = "dark";
        document.querySelector('body').style.backgroundColor = "black";
     }else{
        currMode = "light";
        document.querySelector('body').style.backgroundColor = "white";
     } */



    //  another option
     if(currMode === "light"){
        currMode = "dark";
        body.classList.add('dark');
        body.classList.remove('light')
     }else{
        currMode = "light";
        body.classList.add('light');
        body.classList.add('dark');
     }

     console.log(currMode)
})