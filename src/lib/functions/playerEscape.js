import { outputStore } from '../stores/output';

function playerEscape(player) {
  let escaped;
  let messageType;
  let messages;
  let messageIndex;
  let message;

  const escapeRoll = Math.random();

  if (escapeRoll > 0.2) {
    escaped = true;

    messageType = 'success';
    message = {
      style: 'text-green-600',
    };
  } else {
    escaped = false;

    messageType = 'failure';
    message = {
      style: 'text-red-400',
    };
  }

  messages = player.escape.filter((m) => m.type === messageType);
  messageIndex = Math.floor(Math.random() * messages.length);
  message.text = messages[messageIndex].message;

  outputStore.update((messages) => {
    messages.push(message);
    return messages;
  });

  return escaped;
}

export { playerEscape };
