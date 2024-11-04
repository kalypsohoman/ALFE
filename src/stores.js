import { writable } from 'svelte/store';

export const store = writable({
  messages: ["Hello, World!"],
});

