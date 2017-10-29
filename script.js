function clickpage1() {
    document.getElementById("page1").style.display = "block";
    document.getElementById("page2").style.display = "none";
    document.getElementById("stressed").style.display = "none";
    document.getElementById("sad").style.display = "none";
    document.getElementById("anger").style.display = "none";
    document.getElementById("fear").style.display = "none";
    document.getElementById("calm").style.display = "none";
    document.getElementById("love").style.display = "none";
    document.getElementById("joy").style.display = "none";
    document.getElementById("surprised").style.display = "none";
}

function clickpage2() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("stressed").style.display = "none";
    document.getElementById("sad").style.display = "none";
    document.getElementById("anger").style.display = "none";
    document.getElementById("fear").style.display = "none";
    document.getElementById("calm").style.display = "none";
    document.getElementById("love").style.display = "none";
    document.getElementById("joy").style.display = "none";
    document.getElementById("surprised").style.display = "none";

}


function clickstressed() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("stressed").style.display = "block";
    document.getElementById("sad").style.display = "none";
    document.getElementById("anger").style.display = "none";
    document.getElementById("fear").style.display = "none";
    document.getElementById("calm").style.display = "none";
    document.getElementById("love").style.display = "none";
    document.getElementById("joy").style.display = "none";
    document.getElementById("surprised").style.display = "none";
}

function clicksad() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("stressed").style.display = "none";
    document.getElementById("sad").style.display = "block";
    document.getElementById("anger").style.display = "none";
    document.getElementById("fear").style.display = "none";
    document.getElementById("calm").style.display = "none";
    document.getElementById("love").style.display = "none";
    document.getElementById("joy").style.display = "none";
    document.getElementById("surprised").style.display = "none";
}

function clickanger() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("stressed").style.display = "none";
    document.getElementById("sad").style.display = "none";
    document.getElementById("anger").style.display = "block";
    document.getElementById("fear").style.display = "none";
    document.getElementById("calm").style.display = "none";
    document.getElementById("love").style.display = "none";
    document.getElementById("joy").style.display = "none";
    document.getElementById("surprised").style.display = "none";
}

function clickfear() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("stressed").style.display = "none";
    document.getElementById("sad").style.display = "none";
    document.getElementById("anger").style.display = "none";
    document.getElementById("fear").style.display = "block";
    document.getElementById("calm").style.display = "none";
    document.getElementById("love").style.display = "none";
    document.getElementById("joy").style.display = "none";
    document.getElementById("surprised").style.display = "none";
}

function clickcalm() {
     document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("stressed").style.display = "none";
    document.getElementById("sad").style.display = "none";
    document.getElementById("anger").style.display = "none";
    document.getElementById("fear").style.display = "none";
    document.getElementById("calm").style.display = "block";
    document.getElementById("love").style.display = "none";
    document.getElementById("joy").style.display = "none";
    document.getElementById("surprised").style.display = "none";
}

function clicklove() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("stressed").style.display = "none";
    document.getElementById("sad").style.display = "none";
    document.getElementById("anger").style.display = "none";
    document.getElementById("fear").style.display = "none";
    document.getElementById("calm").style.display = "none";
    document.getElementById("love").style.display = "block";
    document.getElementById("joy").style.display = "none";
    document.getElementById("surprised").style.display = "none";
}

function clickjoy() {
     document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("stressed").style.display = "none";
    document.getElementById("sad").style.display = "none";
    document.getElementById("anger").style.display = "none";
    document.getElementById("fear").style.display = "none";
    document.getElementById("calm").style.display = "none";
    document.getElementById("love").style.display = "none";
    document.getElementById("joy").style.display = "block";
    document.getElementById("surprised").style.display = "none";
}

function clicksurprised() {
 document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("stressed").style.display = "none";
    document.getElementById("sad").style.display = "none";
    document.getElementById("anger").style.display = "none";
    document.getElementById("fear").style.display = "none";
    document.getElementById("calm").style.display = "none";
    document.getElementById("love").style.display = "none";
    document.getElementById("joy").style.display = "none";
    document.getElementById("surprised").style.display = "block";
}



function getLoadingElement(){
  var div = document.createElement('div');
  div.setAttribute('class','loading-element');
  div.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-50-50 100 100" height="100" width="100"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="#29358e"/><stop offset="0%" stop-color="#bce2c5"/><stop offset="100%" stop-color="#bce2c5"/></linearGradient></defs><circle transform="rotate(0)" cx="0" cy="0" r="50" fill="url(#g)"></circle></svg>';
  
  
  
  div.stop = function(){
    console.log('stop');
    div.setAttribute('style','height:0px;')
  }
  
    div.start = function(){
    console.log('start');
    div.setAttribute('style','height:100px;')
  }
  
var stops = div.querySelectorAll('stop');
var grad  = div.querySelector('#g');
var circ  = div.querySelector('circle');
var colors = [stops[0].getAttribute('stop-color'),stops[1].getAttribute('stop-color')];

function step(t){
  var oldStop = parseInt(stops[0].getAttribute('offset'));
  var newStop = (Math.floor(t) % 500) / 5;
  var rotation;
  if(oldStop > newStop){
    rotation = parseInt(circ.getAttribute('transform').replace(/[^\d]/g,'')) || 0;
    rotation = (rotation + 90) % 360;
    circ.setAttribute('transform', 'rotate(' + rotation + ')');
    colors.reverse();
    stops[0].setAttribute('stop-color',colors[0]);
    stops[1].setAttribute('stop-color',colors[1]);
    stops[2].setAttribute('stop-color',colors[1]);
  }
  stops[0].setAttribute('offset', newStop + '%');
  stops[1].setAttribute('offset', newStop + '%');
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
  
  div.start();
  return div;
}

var d = getLoadingElement();
document.body.appendChild(d);







