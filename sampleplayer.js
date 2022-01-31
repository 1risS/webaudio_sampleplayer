var context;

window.addEventListener('load', init, false);

function init(){
  try {
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
  } catch (e) {
    alert('Web Audio API is not supported in this browser')
  }
}

// Lo anterior sirve así como está?

var dogBarkingBuffer = null;
window.AudioContext = window.AudioContext || 
window.webkitAudioContext;
var context = new AudioContext();

function loadDogSound(url){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType= 'arraybuffer';

  request.onload = function(){
    context.decodeAudioData(request.response, function(buffer){
      dogBarkingBuffer = buffer;
    }, onError);
  }
  request.send();
}
// This playSound() function could be called every time somebody presses a key or clicks something with the mouse.
function playSound(buffer){
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(audioContext.currentTime);
}
