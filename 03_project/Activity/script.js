let btn = document.querySelector("button");


    btn.addEventListener("click",function() {
        // console.log("color is change");
        let h3 = document.querySelector("h3");
        let randomColor = getRandColor();
        h3.innerText = randomColor;

        console.log("color updated");
        
        let div = document.querySelector("div");
        div.style.background = randomColor;
    });

    function getRandColor()  {
        red=Math.floor(Math.random() * 255);
        green = Math.floor(Math.random() * 255);
        blue = Math.floor(Math.random() * 255);

        let color = `rgb(${red},${green},${blue})`;
        return color;
    }