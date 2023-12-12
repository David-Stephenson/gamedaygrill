import { writable } from 'svelte/store';

// Save Svelte store to browser local storage
function localStore(key, initialValue) {
  const initial =
    typeof window !== 'undefined' && localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialValue;
  const store = writable(initial);

  store.subscribe(value => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  });

  return store;
}

export const bag = localStore('bag', []);
export const reservations = localStore('reservations', []);
