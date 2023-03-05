<script>
	import { products } from "../../../stores";
    import {page} from "$app/stores"
	import ProductDetail from "../../../components/ProductDetail.svelte";

    const id = $page.params.id
    let product
    $: product =  $products[id] 
    
    
</script>

{#if product !== undefined}
    <ProductDetail product={product}/>
{/if}