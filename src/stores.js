import { writable } from 'svelte/store';

export const store = writable({
  messages: [
    {text: "Hello, World!Hello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, World", origin: "user"},
    {text: "Hello, World!", origin: "ai"},
    {text: "Hello, World!", origin: "user"},
    {text: "Hello, World!", origin: "ai"},
    {text: "Hello, World!", origin: "user"},
    {text: "Hello, World!", origin: "user"}

  ],
});

