window?.addEventListener('load', () => {
  const btn = <HTMLElement>document.querySelector('#btn');
  const quote = <HTMLInputElement>document.querySelector('input');
  const display = <HTMLElement>document.querySelector('.display');

  btn?.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();

    let value: string = quote?.value || 'Hello world!';
    const valueLength: number = value.length - 1;
    let reverseText: string = '';

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
