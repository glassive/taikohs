//prevent form resubmission popup if there are any
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

hitKeys = ["don1", "don2", "kat1", "kat2"];
hitsounds = ["normal", "normal", "clap", "clap"];
displays = ["DonL", "DonR", "KatsuL", "KatsuR"];

//play corresponding sounds when certain keys are pressed (for finishers, 2 sounds are played at the same time)
//also prevents repetition when keys are held down
document.addEventListener('keydown', (hitsound) => {
  if (hitsound.repeat) return

  for (let i = 0; i < hitKeys.length; i++) {
    if (hitsound.key == document.getElementById(hitKeys[i]).value) {
      playSound(hitsounds[i]);
      animate(displays[i]);
    }
  }

  if (hitsound.key == document.getElementById("donf").value) {
    playSound("finish"), playSound("normal");
    animate("DonL"), animate("DonR")
  }
  if (hitsound.key == document.getElementById("katf").value) {
    playSound("whistle"), playSound("clap");
    animate("KatsuL"), animate("KatsuR");
  }
});


//animate display
function animate(elmID) {
  var displaydiv = document.getElementById(elmID);
  if( displaydiv.style.animationName == "flash1" ){
    displaydiv.style.animation = "flash2 0.5s forwards";
  } else {
    displaydiv.style.animation = "flash1 0.5s forwards";
  }
}


//create hitsound instance
function playSound(hitsound) {
  var newHitsound = new Audio();
  newHitsound.src = "hs/"+ document.getElementById("selector").value +"/taiko-"+document.getElementById("sampleset").value+"-hit"+hitsound+".wav";

  //play sound with current volume
  newHitsound.volume = document.getElementById('vol').value / 100;
  newHitsound.currentTime = 0;
  newHitsound.play()
  .catch(() => {
    //if there isnt a match, fallback with default hitsound using corrsponding sampleset, if fallback doesnt match, throw error
    newHitsound.src = "hs/default/taiko-"+document.getElementById("sampleset").value+"-hit"+hitsound+".wav";
    newHitsound.play().catch(() => console.log("File for this hitsound does not exist!"))
  });
}


//download current hitsound pack
function downloadSelected(){
  if (document.getElementById('selector').value !== "Pick some hitsounds!") {
    window.location.href = "hs/taikohitsounds-"+document.getElementById('selector').value+".zip";
  }
}


//volume slider storage & render
icon = document.getElementById("volIcon");
volumeSlider = document.getElementById("vol");
volumeSlider.addEventListener('input', () => {
  window.sessionStorage.setItem("volume", volumeSlider.value);

  if (volumeSlider.value == 0) {
    icon.className = "ph-fill ph-speaker-simple-x";
  }else if (volumeSlider.value < 50){
    icon.className = "ph-fill ph-speaker-low";
  }else{
    icon.className = "ph-fill ph-speaker-high";
  }

})


//keybinds storage
keybinds = document.getElementsByClassName("keybind");
document.addEventListener("input", () => {
  for (let k = 0; k < keybinds.length; k++) {
    window.sessionStorage.setItem("key"+k, keybinds[k].value);
  }
})


//keybinds reset button
kbreset = document.getElementById("keybindReset");
kbreset.addEventListener("click", () => {
  for (let n = 0; n < keybinds.length; n++) {
    keybinds[n].value = defaultKeybinds[n];
    sessionStorage["key"+n] = "";
  }
})


//storage loader on window load (volume, samples, keybinds)
storedVolume = sessionStorage["volume"];
defaultKeybinds = ["d", "f", "j", "k", "g", "h"];

window.addEventListener("load", () => {
  if (storedVolume !== null) {
    volumeSlider.value = storedVolume;
  }else{
    volumeSlider.value = 20;  
  }
  
  if (sessionStorage.getItem('selector') !== null) {
    document.getElementById("selector").value = window.sessionStorage.getItem('selector');
  }else{
    document.getElementById("selector").selected = "Default";
  }

  if (sessionStorage.getItem('sampleset') !== null) {
    console.log("samepleset is stored");
    document.getElementById("sampleset").value = window.sessionStorage.getItem('sampleset');
  }else{
    document.getElementById("sampleset").selected = "Normal";
  }

  for (let j = 0; j < keybinds.length; j++) {
    if (sessionStorage["key"+j] == null || sessionStorage["key"+j] == "") {
      window.sessionStorage.setItem("key"+j, defaultKeybinds[j]);
    }
    keybinds[j].value = window.sessionStorage["key"+j]; 
  }
});