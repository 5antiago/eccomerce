import { writable } from 'svelte/store';
import { browser } from "$app/environment";


export function createCart() {
        let content
	if(browser){
		content = JSON.parse(localStorage.getItem('cart'));
	}
	const { subscribe, set, update } = writable(content || {});

	return {
		subscribe,
		add: (newProduct) => update((items) => {
                        let product = newProduct.id in items ? items[newProduct.id] : newProduct
                        product.cantidad_a_comprar++;
                        return {...items, [newProduct.id]: product}
                }),
		delete: (deleteProduct) => update((items) => {
                                let itemscopy = {...items}
                                if(itemscopy[deleteProduct.id])
                                        --itemscopy[deleteProduct.id].cantidad_a_comprar <= 0 ? delete itemscopy[deleteProduct.id] : null;
                                return {...itemscopy}
                        }),
		reset: () => set({}),
                sync: (newProduct, cant)=>{
                        update((items)=>{
                                if(cant <= 0){
                                        delete items[newProduct.id];
                                        return items;
                                }
                        let product = newProduct.id in items ? items[newProduct.id] : newProduct
                        product.cantidad_a_comprar = cant;
                        return {...items, [newProduct.id]: product}
                })}
	};
}