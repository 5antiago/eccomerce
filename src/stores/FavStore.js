import { writable } from 'svelte/store';
import { browser } from "$app/environment";

export function createFav() {
	let content
	if(browser){
		content = JSON.parse(localStorage.getItem('favs'));
	}
	const { subscribe, set, update } = writable(content || {});

	return {
		subscribe,
		add: (newProduct) => update((items) => ({...items, [newProduct.id]: newProduct})),
		delete: (deleteProduct) => update((items) => {
            let itemscopy = {...items}
            delete itemscopy[deleteProduct.id];
            return itemscopy
    }),
		reset: () => set({})
	};
}