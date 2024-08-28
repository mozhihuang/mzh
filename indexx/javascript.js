window.onload=function(){
    var index=0;
    var leftbtn=document.getElementById("leftBtn");
    var rightbtn=document.getElementById("rightBtn")
    var changeImg=document.getElementById("changeImg");
    leftbtn.onclick=function(){
        index--;
        if(index<1)
        index=3;
        changeImg.src="./pic/ad"+index+".png";
    };
    rightbtn.onclick=function(){
        index++;
        if(index>3)
        index=1;
        changeImg.src="./pic/ad"+index+".png";
    };
}