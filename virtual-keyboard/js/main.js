const key = {
    ru: {
        keys: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', //13
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del', //27
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', //40
        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'Shift', //51
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl',
        '◄','▲', '▼', '►'],
        shift: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', //13
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del', //27
        'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', //40
        'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'Shift', //51
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl',
        '◄','▲', '▼', '►'],
        unshift: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', //13
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del', //27
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', //40
        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'Shift', //51
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl',
        '◄','▲', '▼', '►'],
    },
    en: {
        keys: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', //13
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del', //26
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', //39
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'Shift', //49
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄','▲', '▼', '►'],
        shift: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', //13
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del', //26
        'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', //39
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', 'Shift', //49
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄','▲', '▼', '►'],
        unshift: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', //13
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del', //26
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', //39
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'Shift', //49
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄','▲', '▼', '►'],
    },
}

const specialKeys = ['backspace', 'tab', 'caps', 'shift', 'enter', 'alt', 'win', 'ctrl', 'del'];
const code =  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'ShiftRight',
'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight',
]

const length = key.ru.shift.length;
const shiftRU = key.ru.shift;
const unshiftRU = key.ru.unshift;
const shiftEN = key.en.shift;
const unshiftEN = key.en.unshift;


const createElements = () => {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.className = 'header';
    body.append(header);
    const container = document.createElement('div');
    container.className = 'container';
    const headerTitle = document.createElement('h1');
    headerTitle.className = 'header__title';
    headerTitle.textContent = 'Виртуальная клавиатура';
    header.append(container);
    const headerText = document.createElement('p');
    headerText.className = 'header__text';
    headerText.innerHTML = 'Создана в Windows <br> Ctrl + Alt - смена языка';
    container.append(headerTitle, headerText);
    const main = document.createElement('main');
    main.className = 'main';
    body.append(main);
    const keyboard = document.createElement('section');
    keyboard.className = 'keyboard';
    main.append(keyboard);
    const container2 = document.createElement('div');
    container2.className = 'container';
    keyboard.append(container2);
    const keyboardInner = document.createElement('div');
    keyboardInner.className = 'keyboard__inner';
    container2.append(keyboardInner)
    const keyboardTextarea = document.createElement('textarea');
    keyboardTextarea.className = 'keyboard__textarea';
    keyboardInner.append(keyboardTextarea);
    const keyboardKeys = document.createElement('div');
    keyboardKeys.className = 'keyboard__keys';
    keyboardInner.append(keyboardKeys);

    key.ru.keys.forEach((item, index) => {
        const key = document.createElement('div');
        key.textContent = item;
        key.dataset['code'] = code[index];
        if ([0, 1].includes(index)) {
            key.className = 'keyboard__key red';
        }
        if ([2, 3, 15, 16, 28].includes(index)) {
            key.className = 'keyboard__key orange';
        }

        if ([4, 5, 17, 18, 29, 30, 40, 41].includes(index)) {
            key.className = 'keyboard__key yellow';
        }

        if ([6, 7, 8, 9, 10, 11, 19, 20, 21,22, 23, 24, 31, 32, 33, 34, 35, 36, 42, 43, 44, 45, 46, 47].includes(index)) {
            key.className = 'keyboard__key green';
        }

        if ([12, 25, 26, 27, 37, 38, 39, 48, 49, 50].includes(index)) {
            key.className = 'keyboard__key blue';
        }

         if(index == 13) key.className = 'keyboard__key blue backspace';
         if(index == 14) key.className = 'keyboard__key red tab';
         if(index == 27) key.className = 'keyboard__key blue del';
         if(index == 28) key.className = 'keyboard__key orange caps';
         if(index == 40) key.className = 'keyboard__key blue enter';
         if(index == 41) key.className = 'keyboard__key orange shift';
         if(index == 51) key.className = 'keyboard__key blue shift';
         if(index == 52) key.className = 'keyboard__key orange ctrl';
         if(index == 57) key.className = 'keyboard__key blue ctrl';
         if(index == 53) key.className = 'keyboard__key yellow win';
         if(index == 54) key.className = 'keyboard__key yellow alt';
         if(index == 56) key.className = 'keyboard__key blue alt';
         if(index == 55) key.className = 'keyboard__key space';
         if(index == 58 || index == 59 || index == 60 || index == 61) key.className = 'keyboard__key arrow'


        keyboardKeys.append(key);
    })
}


createElements();


const capsLock = (item, keys) => {
  
    item.classList.toggle('caps_active');
  
    const shouldUpperCase = item.classList.contains('caps_active');
  
    keys.forEach(key => {
      if (specialKeys.some(specialKey => key.classList.contains(specialKey))) {
            return; 
      } else if (shouldUpperCase) {
            key.textContent = key.textContent.toUpperCase();
      } else {
            key.textContent = key.textContent.toLowerCase();
      }
    });
  };

const backspace = (textarea) => {
    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
}

const enter = (textarea) => {
    textarea.value += '\n';
}

const shift = (item, keys) => {
    const language = document.querySelector('.ctrl');
  
    item.addEventListener('mousedown', () => {
     
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
  
        if (specialKeys.some(specialKey => key.classList.contains(specialKey))) {
          continue;
        } else {
          key.classList.add('shift_active');
  
          if (language.classList.contains('switch__language')) {
            if (key.classList.contains('shift_active')) {
              for (let j = 0; j < length; j++) {
                keys[j].textContent = shiftEN[j];
              }
            } else {
              for (let j = 0; j < length; j++) {
                keys[j].textContent = unshiftEN[j];
              }
            }
          } else {
            if (key.classList.contains('shift_active')) {
            
              for (let j = 0; j < length; j++) {
                keys[j].textContent = shiftRU[j];
              }
            } else {
              for (let j = 0; j < length; j++) {
                keys[j].textContent = unshiftRU[j];
              }
            }
          }
        }
      }
    });
  
    item.addEventListener('mouseup', () => {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
  
        if (specialKeys.some(specialKey => key.classList.contains(specialKey))) {
          continue;
        } else {
          key.classList.remove('shift_active');
  
          if (language.classList.contains('switch__language')) {
            for (let j = 0; j < length; j++) {
              keys[j].textContent = unshiftEN[j];
            }
          } else {
            for (let j = 0; j < length; j++) {
              keys[j].textContent = unshiftRU[j];
            }
          }
        }
      }
    });
}

const handleShiftKey = (e, keys) => {
    const language = document.querySelector('.ctrl');
    
    if (e.shiftKey) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
    
        if (specialKeys.some(specialKey => key.classList.contains(specialKey))) {
          continue;
        } else {
          key.classList.add('shift_active');
    
          if (language.classList.contains('switch__language')) {
            if (key.classList.contains('shift_active')) {
              for (let j = 0; j < length; j++) {
                keys[j].textContent = shiftEN[j];
              }
            } else {
              for (let j = 0; j < length; j++) {
                keys[j].textContent = unshiftEN[j];
              }
            }
          } else {
            if (key.classList.contains('shift_active')) {
              for (let j = 0; j < length; j++) {
                keys[j].textContent = shiftRU[j];
              }
            } else {
              for (let j = 0; j < length; j++) {
                keys[j].textContent = unshiftRU[j];
              }
            }
          }
        }
      }
    } else {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
    
        if (specialKeys.some(specialKey => key.classList.contains(specialKey))) {
          continue;
        } else {
          key.classList.remove('shift_active');
    
          if (language.classList.contains('switch__language')) {
            for (let j = 0; j < length; j++) {
              keys[j].textContent = unshiftEN[j];
            }
          } else {
            for (let j = 0; j < length; j++) {
              keys[j].textContent = unshiftRU[j];
            }
          }
        }
      }
    }
};

const del = (textarea) => {
    const cursorPosition = textarea.selectionEnd;
    const textBeforeCursor = textarea.value.substring(0, cursorPosition);
    const textAfterCursor = textarea.value.substring(cursorPosition + 1);
    textarea.value = textBeforeCursor + textAfterCursor;
    textarea.setSelectionRange(cursorPosition, cursorPosition);
}

const switchLanguage = (item, keys) => {
    const keysEn = key.en.keys;
    const keysRu = key.ru.keys;
    item.classList.toggle('switch__language');
    if(item.classList.contains('switch__language')) {
       keys.forEach((item, index) => {
           item.textContent = keysEn[index];
       })
       localStorage.setItem('keyboardLayout', 'en');
    } else {
        keys.forEach((item, index) => {
            item.textContent = keysRu[index];
        })
        localStorage.setItem('keyboardLayout', 'ru');
    }
}
window.addEventListener('load', () => {
    const savedLayout = localStorage.getItem('keyboardLayout');

    if (savedLayout === 'en') {
        const winKey = document.querySelector('.win');
        switchLanguage(winKey, keyboardKey);
    }
});

const tab = (textarea) => {
    textarea.value += '    ';
}

const keyboardKey = document.querySelectorAll('.keyboard__key');
const keyboardTextarea = document.querySelector('.keyboard__textarea');

keyboardKey.forEach(item => {
    item.addEventListener('click', () => {
        if(specialKeys.some(specialKey => item.classList.contains(specialKey))) {
          
          if(item.classList.contains('caps')) capsLock(item, keyboardKey)
          if(item.classList.contains('backspace'))  backspace(keyboardTextarea); 
          if(item.classList.contains('enter'))  enter(keyboardTextarea); 
          if(item.classList.contains('shift')) shift(item, keyboardKey);
          if(item.classList.contains('tab')) tab(keyboardTextarea);
          if(item.classList.contains('win')) switchLanguage(item, keyboardKey);
          if(item.classList.contains('del')) del(keyboardTextarea);
          
        } else {
          keyboardTextarea.value += item.textContent;
        }
        
    })
})


document.addEventListener('keydown', (e) => {
    e.preventDefault();
    const keys = document.querySelectorAll('.keyboard__key');
    const caps = document.querySelector('.caps');
    const ctrl = document.querySelector('.ctrl');
    const textarea = document.querySelector('.keyboard__textarea');

    if(e.code) {
        keys.forEach(item => {
            if(e.code == item.dataset.code) {
                item.classList.add('key_active')
                 if(specialKeys.some(specialKey => item.classList.contains(specialKey))) {
                    if(item.classList.contains('backspace'))  backspace(textarea); 
                    if(item.classList.contains('enter'))  enter(textarea); 
                    
                    if(item.classList.contains('del')) del(textarea);
                    if (e.altKey && e.ctrlKey) {
                        switchLanguage(ctrl, keys);
                        caps.classList.remove('caps_active');
                    } 
                
                    if (e.code === 'Tab') {
                        tab(textarea);
                      }
                
                    if(e.code == 'CapsLock') {
                        capsLock(caps, keys)
                    }
                
        } else {
          textarea.value += item.textContent;
        }
            } 
            
        })
    }

    if (e.key === 'Shift') {
      handleShiftKey(e, keys);
    }
})

document.addEventListener('keyup', (e) => {
    e.preventDefault();
    const keys = document.querySelectorAll('.keyboard__key');
    if(e.code) {
        keys.forEach(item => {
            if(e.code == item.dataset.code) item.classList.remove('key_active')
        })
    }

    if (e.key === 'Shift') {
        handleShiftKey(e, keys);
      }
})
