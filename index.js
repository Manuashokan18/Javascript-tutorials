var imageName = "off" ;
var buttonName = "on"
function callBulb() {
    if (imageName == "off") 
    {
        imageName ="on";
        buttonName ="off";
    }else {
        imageName="off";
        buttonName="on";
    }
    document.getElementById("img").src = imageName +".png";
    document.getElementById("btn").value = buttonName;
}