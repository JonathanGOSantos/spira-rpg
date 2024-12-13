import * as prismic from 'https://cdn.skypack.dev/@prismicio/client';
import { outputStore } from '../stores/output';

const repositoryName = 'spirarpg';
const client = prismic.createClient(repositoryName);

const init = async () => {
  const prismicDoc = await client.getAllByType('monster');
  const monsters = prismicDoc.map((doc) => doc.data);
  return monsters;
};

const newMonster = async (playerLevel) => {
  const monsters = await init();
  const availableMonsters = monsters.filter(
    (monster) => monster.level <= playerLevel
  );

  const randomIndex = Math.floor(Math.random() * availableMonsters.length);
  const monster = availableMonsters[randomIndex];

  const messageIndex = Math.floor(Math.random() * monster.apparition.length);

  const message = {
    style: 'text-[#FFD700]',
    text: monster.apparition[messageIndex].message,
  };

  outputStore.update((messages) => {
    messages.push(message);
    return messages;
  });

  return monster;
};

export { newMonster };
