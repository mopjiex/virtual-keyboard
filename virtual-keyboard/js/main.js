
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
    header.append(container, headerTitle);

    const main = document.createElement('main');
    main.className = 'main';
    body.append(main);
    const keyboard = document.createElement('section');
    keyboard.className = 'keyboard';
    main.append(keyboard);
    keyboard.append(container);
    const keyboardInner = document.createElement('div');
    keyboardInner.className = 'keyboard__inner';
    container.append(keyboardInner)
    const keyboardTextarea = document.createElement('textarea');
    keyboardTextarea.className = 'keyboard__textarea';
    keyboardInner.append(keyboardTextarea);
    
    const keyboardKeys = document.createElement('div');
    keyboardKeys.className = 'keyboard__keys';
    keyboardInner.append(keyboardKeys);

    const keyboardKeysRow1 = document.createElement('div');
    keyboardKeysRow1.className = 'keyboard__keys-row';
    const keysRow1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
    keysRow1.forEach((item, index) => {
        const key = document.createElement('div');
        key.className = 'keyboard__key ' + ((index <= 1) ? "red" : (index <= 3) ? "orange" : (index <= 5) ? "yellow" : (index <= 10) ? "green" : "blue");
        if(index == keysRow1.length - 1) {
            key.className = 'keyboard__key backspace blue';
        }
        key.textContent = item;
        keyboardKeysRow1.append(key);
    });

    keyboardKeys.append(keyboardKeysRow1);

    const keyboardKeysRow2 = document.createElement('div');
    keyboardKeysRow2.className = 'keyboard__keys-row';
    const keysRow2 = ["Tab", "й", "ц", "у", "к", "у", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", 'Del'];
    keysRow2.forEach((item, index) => {
       const key = document.createElement('div');
       key.className = "keyboard__key " + ((index === 0) ? "red tab" : (index <= 2) ? "orange" : (index <= 4) ? "yellow" : (index <= 10) ? "green" : "blue del");
       key.textContent = item;
       keyboardKeysRow2.append(key);
    });

    keyboardKeys.append(keyboardKeysRow2);

    const keyboardKeysRow3 = document.createElement('div');
    keyboardKeysRow3.className = 'keyboard__keys-row';
    const keysRow3 = ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"];
    keysRow3.forEach((item, index) => {
       const key = document.createElement('div');
       key.className = "keyboard__key " + ((index === 0) ? "orange caps" : (index <= 2) ? "yellow" : (index <= 8) ? "green" : "blue");
       if(index == keysRow3.length - 1) {
        key.className = 'keyboard__key enter blue';
       }
       key.textContent = item;
       keyboardKeysRow3.append(key);
    });

    keyboardKeys.append(keyboardKeysRow3);

    const keyboardKeysRow4 = document.createElement('div');
    keyboardKeysRow4.className = 'keyboard__keys-row';
    const keysRow4 = ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift"];
    keysRow4.forEach((item, index) => {
       const key = document.createElement('div');
       key.className = "keyboard__key " + (index < 2 ? "orange" : index < 4 ? "yellow" : "green");
       if(index == 0) {
        key.className = 'keyboard__key enter orange'
       }
       if(index == keysRow4.length - 1) {
        key.className = 'keyboard__key shift blue';
       }
       key.textContent = item;
       keyboardKeysRow4.append(key);
    });

    keyboardKeys.append(keyboardKeysRow4);

    const keyboardKeysRow5 = document.createElement('div');
    keyboardKeysRow5.className = 'keyboard__keys-row';
    const keysRow5 = ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl'];
    keysRow5.forEach((item, index) => {
       const key = document.createElement('div');
       
       if(index == 0) {
        key.className = 'keyboard__key ctrl orange';
       }
       if(index == 1) {
        key.className = 'keyboard__key win yellow';
       }
       if(index == 2) {
        key.className = 'keyboard__key alt yellow';
       }
       if(index == 3) {
        key.className = 'keyboard__key space';
       }
       if(index == 4) {
        key.className = 'keyboard__key alt blue';
       }
       if(index == keysRow5.length - 1) {
        key.className = 'keyboard__key ctrl blue';
       }

       key.textContent = item;
       keyboardKeysRow5.append(key);
    });

    keyboardKeys.append(keyboardKeysRow5);

}

createElements();