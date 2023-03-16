import { derived, writable } from 'svelte/store';
import { CalcPrice } from './helpers/CalcPrice';
import { createCart } from './stores/CartStore';
import { createFav } from './stores/FavStore';
import { CreateHTTPStore } from './stores/HTTPStore';
import { browser } from "$app/environment"
import { json } from '@sveltejs/kit';


export const products = CreateHTTPStore('https://63fa5d1fbeec322c57f2444d.mockapi.io/products', true)

export const user = CreateHTTPStore('https://63fa5d1fbeec322c57f2444d.mockapi.io/user')


export const search = writable('');
export const filtered = derived(
	[search, products], 
	([$search, $products]) => {
		return Object.values($products).filter((product => product.nombre.toLowerCase().includes($search.toLowerCase())))}
);

export const cart = createCart()
browser && cart.subscribe(($cart)=>localStorage.setItem('cart', JSON.stringify($cart)))

export const favs = createFav()
browser && favs.subscribe(($favs)=>localStorage.setItem('favs', JSON.stringify($favs)))



export const CartCant = derived(
	[cart], ([$cart]) => (Object.values($cart).reduce((sum, product) => (product.cantidad_a_comprar + sum), 0))
)

export const total = derived(
	[cart], 
	([$cart]) => {
		return Object.values($cart).reduce((sum, product) => CalcPrice(product)+ sum, 0)}
);


