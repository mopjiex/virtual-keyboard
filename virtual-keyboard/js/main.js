const key = {
    ru: {
        keys: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', //13
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del', //27
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', //40
        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'Shift', //51
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl',
        '◄','▲', '▼', '►'],
        shift: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'],
        unshift: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    },
    en: {
        keys: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', //13
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del', //26
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', //39
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'Shift', //49
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄','▲', '▼', '►'],
        shift: ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
        unshift: ['~','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    }
}

const specialKeys = ['backspace', 'tab', 'caps', 'shift', 'enter', 'alt', 'win', 'ctrl', 'del'];

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
    headerText.textContent = 'Создана в Windows';
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
            console.log(1); 
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
    const language = document.querySelector('.win');
   
    item.addEventListener('mousedown', () => {
        keys.forEach(item => {
            if(specialKeys.some(specialKey => item.classList.contains(specialKey))) {
                console.log(1)
            }
            else {
                item.classList.toggle('shift_active');
                if(language.classList.contains('switch__language')) {
                    if(item.classList.contains('shift_active')) {
                        for(let i = 0; i < key.en.shift.length; i++) {
                            keys[i].textContent = key.en.shift[i];
                        } 
                    } else {
                        for(let i = 0; i < key.en.shift.length; i++) {
                            keys[i].textContent = key.en.unshift[i];
                        } 
                    }
                } else {
                    if(item.classList.contains('shift_active')) {
                        for(let i = 0; i < key.ru.shift.length; i++) {
                            keys[i].textContent = key.ru.shift[i];
                        } 
                    } else {
                        for(let i = 0; i < key.ru.shift.length; i++) {
                            keys[i].textContent = key.ru.unshift[i];
                        } 
                    }
                }
                
                
                item.textContent = item.textContent.toUpperCase();
            }
        })
    })

    item.addEventListener('mouseup', () => {
        keys.forEach(item => {
            if(specialKeys.some(specialKey => item.classList.contains(specialKey))) {
                console.log(1)
            }
            else {
               
                item.classList.toggle('shift_active');
                if(language.classList.contains('switch__language')) {
                    if(item.classList.contains('shift_active')) {
                        for(let i = 0; i < key.en.shift.length; i++) {
                            keys[i].textContent = key.en.shift[i];
                        } 
                    } else {
                        for(let i = 0; i < key.en.shift.length; i++) {
                            keys[i].textContent = key.en.unshift[i];
                        } 
                    }
                } else {
                    if(item.classList.contains('shift_active')) {
                        for(let i = 0; i < key.ru.shift.length; i++) {
                            keys[i].textContent = key.ru.shift[i];
                        } 
                    } else {
                        for(let i = 0; i < key.ru.shift.length; i++) {
                            keys[i].textContent = key.ru.unshift[i];
                        } 
                    }
                }
                item.textContent = item.textContent.toLowerCase();
            }
        })
    })
}

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

       
    } else {
        keys.forEach((item, index) => {
            item.textContent = keysRu[index];
        })
    }
}

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

