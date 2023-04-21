"use strict";
window === null || window === void 0 ? void 0 : window.addEventListener('load', () => {
    const btn = document.querySelector('#btn');
    const quote = document.querySelector('input');
    const display = document.querySelector('.display');
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', (e) => {
        e.preventDefault();
        let value = (quote === null || quote === void 0 ? void 0 : quote.value) || 'Hello world!';
        const valueLength = value.length - 1;
        let reverseText = '';
        for (let i = valueLength; i >= 0; i--) {
            reverseText += value[i];
        }
        btn.textContent = 'Generating...';
        setTimeout(() => {
            btn.textContent = 'Generate';
            display.textContent = reverseText;
            quote.value = '';
        }, 500);
    });
});
