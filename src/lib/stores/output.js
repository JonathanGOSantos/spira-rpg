import { writable } from 'svelte/store';

export const outputStore = writable([{ style: '', text: '' }]);
