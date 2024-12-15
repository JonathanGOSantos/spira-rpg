import { writable } from 'svelte/store';

function addOutputMessage(style, text) {
  const message = {
    style: style,
    text: text,
  };

  outputStore.update((messages) => {
    messages.push(message);
    return messages;
  });
}

const outputStore = writable([{ style: '', text: '' }]);

export { outputStore, addOutputMessage };
