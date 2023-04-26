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

    const keys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', //13
                  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', //26
                  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', //39
                  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'Shift', //49
                  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl',];

    keys.forEach((item, index) => {
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

        if ([6, 7, 8, 9, 10, 19, 20, 21,22, 23, 24, 31, 32, 33, 34, 35, 36, 42, 43, 44, 45, 46, 47].includes(index)) {
            key.className = 'keyboard__key green';
        }

        if ([12, 25, 26, 37, 38, 48, 49, 50].includes(index)) {
            key.className = 'keyboard__key blue';
        }

         if(index == 13) key.className = 'keyboard__key blue backspace';
         if(index == 14) key.className = 'keyboard__key red tab';
         if(index == 27) key.className = 'keyboard__key orange caps';
         if(index == 39) key.className = 'keyboard__key blue enter';
         if(index == 40) key.className = 'keyboard__key orange shift';
         if(index == 50) key.className = 'keyboard__key blue shift';
         if(index == 51) key.className = 'keyboard__key orange ctrl';
         if(index == 56) key.className = 'keyboard__key blue ctrl';
         if(index == 52) key.className = 'keyboard__key yellow win';
         if(index == 53) key.className = 'keyboard__key yellow alt';
         if(index == 55) key.className = 'keyboard__key blue alt';
         if(index == 54) key.className = 'keyboard__key space';
        keyboardKeys.append(key);
    })
}
createElements();

