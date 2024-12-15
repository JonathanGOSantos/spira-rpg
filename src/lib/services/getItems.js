import * as prismic from 'https://cdn.skypack.dev/@prismicio/client';
const repositoryName = 'spirarpg';
const client = prismic.createClient(repositoryName);

const init = async (type) => {
  const prismicDoc = await client.getAllByType(type);
  const items = prismicDoc.map((doc) => ({
    ...doc.data,
    uid: doc.uid,
  }));
  return items;
};

const categories = ['consumable', 'ore', 'drop', 'coin'];

async function getItems() {
  const updatedBag = { ...bag };

  for (const type of categories) {
    const category = await init(type);
    updatedBag[type] = {
      name: '',
      order: 0,
      items: {},
    };

    switch (type) {
      case 'coin':
        updatedBag[type].name = 'Moedas';
        updatedBag[type].order = 0;
        break;
      case 'ore':
        updatedBag[type].name = 'Minérios';
        updatedBag[type].order = 1;
        break;
      case 'consumable':
        updatedBag[type].name = 'Consumíveis';
        updatedBag[type].order = 2;
        break;
      case 'drop':
        updatedBag[type].name = 'Drops';
        updatedBag[type].order = 3;
        break;
    }

    category.forEach((item) => {
      updatedBag[type].items[item.uid] = item;
    });
  }

  return updatedBag;
}

const bag = {
  opened: false,
};

export { getItems };
