const label = {
  copy: 'Copy',
  copied: 'Copied!',
};

export const generateCodeCopy = () => {
  if (typeof window !== 'object') return;

  const pres = document.querySelectorAll('pre');

  pres.forEach((pre) => {
    if (navigator.clipboard) {
      wrapCode(pre);
      addButton(pre);
    }
  });
};

const wrapCode = (pre: HTMLPreElement) => {
  const code = pre.innerHTML;
  const wrappedCode = '<div class="code-wrapper">' + code + '</div>';
  pre.innerHTML = wrappedCode;
};

const addButton = (pre: HTMLPreElement) => {
  const button = document.createElement('button');
  button.innerText = label.copy;
  button.addEventListener('click', copyCode);
  pre.appendChild(button);
};

const copyCode = async (event: MouseEvent) => {
  const button = event.target as HTMLButtonElement;
  const text = button.parentNode!.querySelector('code')!.innerText;
  await navigator.clipboard.writeText(text);

  button.innerText = label.copied;

  setTimeout(() => {
    button.innerText = label.copy;
  }, 1000);
};
