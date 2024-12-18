import { get, writable } from 'svelte/store';
import { getItems } from '../services/getItems';

function toggleBag() {
  bagStore.update((store) => {
    store.opened = !store.opened;
    return store;
  });
}

const bagStore = writable({});

let categories = [];
function setCategories(bagStore) {
  categories = [];

  for (let i in bagStore) {
    if (typeof bagStore[i] === 'boolean') continue;

    categories.push({
      name: bagStore[i].name,
      order: bagStore[i].order,
      items: bagStore[i].items,
    });
  }
  categories.sort((a, b) => a.order - b.order);

  for (let i in categories) {
    categories[i].items = setItems(categories[i].items);
  }
  return categories;
}

function setItems(category) {
  const items = [];
  for (let i in category) {
    items.push(category[i]);
  }
  items.sort((a, b) => a.id - b.id);
  return items;
}

export { bagStore, categories, setCategories, toggleBag };
