import { writable } from 'svelte/store';

const modals = [
  {
    id: 1,
    name: 'actions',
    active: true,
  },
  {
    id: 2,
    name: 'inventory',
    active: false,
  },
  {
    id: 3,
    name: 'atributes',
    active: false,
  },
];

const activeModal = writable(modals[0]);
const components = {
  showActions() {
    activeModal.set(modals[0]);
  },
  showInventory() {
    activeModal.set(modals[1]);
  },
  showAtributes() {
    activeModal.set(modals[2]);
  },
};

export { activeModal, components };
