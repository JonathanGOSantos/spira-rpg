import { writable } from 'svelte/store';

const battleState = writable({ goingOn: false });

export { battleState };
