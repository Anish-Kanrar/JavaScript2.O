let h1 = document.querySelector("h1");

/*
//1
h1.style.color = "green";
setTimeout(() => {
    h1.style.color = "red";
},1000)
setTimeout(() => {
    h1.style.color = "blue";
},2000)
setTimeout(() => {
    h1.style.color = "pink";
},3000)
*/




/*
//2
function changeColor(color){
    h1.style.color = "color";
}
setTimeout(() => {
    h1.style.color = "red";
},1000)
setTimeout(() => {
    h1.style.color = "blue";
},2000)
setTimeout(() => {
    h1.style.color = "pink";
},3000)
*/

/*
//3
function changeColor(color,delay){
    setTimeout(()=>{
        h1.style.color = color;
    },delay)
}
changeColor("red",1000)
changeColor("blue",2000)
changeColor("pink",3000)
changeColor("green",4000)
*/

function changeColor(color,delay,nextColorChange){
    setTimeout(() =>{
        h1.style.color = color;
        nextColorChange();
    },delay)
}
changeColor("red",1000,()=>{
    changeColor("orange",1000, ()=>{
        changeColor("blue",1000,()=>{
            changeColor("pink",1000,()=>{
                changeColor("green",1000)
            })
        })
    })
})
//callback nesting -> callback hell