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

export const activeModal = writable(modals[0]);
export function showActions() {
  activeModal.set(modals[0]);
}
export function showInventory() {
  activeModal.set(modals[1]);
}
export function showAtributes() {
  activeModal.set(modals[2]);
}
