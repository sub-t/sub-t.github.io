const copyButtonLabel = 'Copy';

export const generateCodeCopy = () => {
  if (typeof window !== 'object') return;

  const blocks = document.querySelectorAll('pre');

  blocks.forEach((block) => {
    if (navigator.clipboard) {
      addContainer(block);
      addButton(block);
    }
  });
};

const addContainer = (block: HTMLPreElement) => {
  const container = document.createElement('div');
  container.setAttribute('class', 'code-container');
  const children = block.firstChild!;
  block.appendChild(container.appendChild(children));
};

const addButton = (block: HTMLPreElement) => {
  const button = document.createElement('button');
  button.innerText = copyButtonLabel;
  button.addEventListener('click', copyCode);
  block.appendChild(button);
};

const copyCode = async (event: MouseEvent) => {
  const button = event.target as HTMLButtonElement;
  const pre = button.closest('pre')!;
  const code = pre.querySelector('code')!;
  const text = code.innerText;
  await navigator.clipboard.writeText(text);

  button.innerText = 'Copied!';

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 1000);
};
