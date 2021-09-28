function upDate(previewPic){
    var imgURL = previewPic.src;

    document.getElementById("preview").style.backgroundColor = "#CCEECC"
    document.getElementById("preview").style.backgroundImage = "url("+imgURL+")";
  document.getElementById("preview").style.backgroundSize = "cover";
}

function unDo(){
    document.getElementById("preview").style.backgroundColor = "#8e68ff"
    document.getElementById("preview").innerHTML = "Preview";
    document.getElementById("preview").style.backgroundImage="none";
}