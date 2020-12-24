var myImage =document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/firefox2.png');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

var btn = document.querySelector('#btn');
btn.onclick = function () {
    var txt;
    var person = prompt("Please enter your name:", "Name");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Welcome " + person;
    }
    document.getElementById("para").innerText = txt;
  }