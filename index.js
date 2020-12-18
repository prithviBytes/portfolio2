var text = "I Design & Code Beautiful Websites, and I love what I do.";
var i = 0;



function writeText() {
    if( i < text.length){
        document.getElementById("third").innerHTML += text.charAt(i);
        i++;
        setTimeout(writeText, 50);
    }
}