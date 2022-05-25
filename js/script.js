'use strict';


function playSound(e) {
    let code;
    if (e.keyCode) {
      // it was a keypress, get the keycode as usual
      code = e.keyCode;
    } else {
      // it was a click.  Read the keycode from the div that was clicked
      code = this.dataset.key;
    }
  
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
  
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
    function removeTransition(e) {
        if(e.propertyName !== 'box-shadow') return;
        this.classList.remove('playing');
    }


const keys = document.querySelectorAll('.key');
for (let i=0, key; key = keys[i]; i++) {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', playSound);
  }

window.addEventListener('keydown', playSound);

