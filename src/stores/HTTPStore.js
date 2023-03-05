
import { writable } from 'svelte/store';

export function CreateHTTPStore(url, indexed=false) {
	let store = writable([])
	store.request = async (method, url, params=null) => {
	const response = await fetch(url)
	const json = await response.json()
	let data = indexed ? json.reduce((data, item) =>({...data, [item.id]:item}), {}) : json
	store.set(data)
	}
	store.request('GET', url)
	return store
}