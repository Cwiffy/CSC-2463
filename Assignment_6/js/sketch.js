let slider;
let satou;

// DEFINES VARIABLES, INCLUDING INSTRUMENTS!!

const pluck = new Tone.PluckSynth();
const drum = new Tone.MembraneSynth();
// const metal = new Tone.MetalSynth({
// 	"frequency"  : 45 ,
// 	"envelope"  : {
// 		"attack"  : 0.001 ,
// 		"decay"  : 0.4 ,
// 		"release"  : 0.2
// 	}  ,
// 	"harmonicity"  : 8.5 ,
// 	"modulationIndex"  : 40 ,
// 	"resonance"  : 300 ,
// 	"octaves"  : 1.5
// });
const reverb = new Tone.JCReverb(0.4).toDestination();
pluck.connect(reverb);
// metal.connect(reverb);

const osc = new Tone.OmniOscillator("C#4", "pwm").start();

const ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.5,
  decay: 0.6,
  sustain: 0.3,
  release: 0.2
})

let notes = {
  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'
}

// PRELOADS BACKGROUND ART!!
function preload() {
  satou = loadImage("assets/satou.png");
}

// SETS UP THE SLIDER & OTHER EFFECTS!!
function setup() {
  createCanvas(256, 256);

  // "Octave Fork"?
  slider = new Nexus.Slider("#slider");

  
  pluck.release = 2;
  pluck.resonance = 0.98;

  // ALLOWS SLIDER TO MANUPULATE REVERB
  slider.on('change', (v) =>  {
    reverb.roomSize.value = v;
  }); 

  osc.connect(ampEnv);
  ampEnv.connect(reverb);
}

// BACKGROUND ART!!
function draw() {
  background(255);
  scale();
  image(satou,0,0,256,256);
}

// KEYBOARD INPUT!
function keyPressed() {
  let toPlay = notes[key];
  console.log(toPlay);

  osc.frequency.value = toPlay;

  pluck.triggerAttackRelease(toPlay, 0.5);
}