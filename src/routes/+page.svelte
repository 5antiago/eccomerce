<script>
    import ProductCard from '../components/ProductCard.svelte';
	import ProductDetail from '../components/ProductDetail.svelte';
    import {products} from '../stores'

    let categorias = {};
    $: Object.values($products).map((product)=>product.categoria in categorias    
                                                        ? categorias[product.categoria].push(product)
                                                        : categorias[product.categoria] = [product])
    
</script>


<h1>Home</h1>

{#each Object.keys(categorias) as categoria }
    <h3>{categoria}</h3>
    <div class="list">
        {#each categorias[categoria] as product (product.id)}
            <ProductCard {product}/>
        {/each}
    </div>
{/each}


<style>
        .list{
        box-sizing: border-box;
        padding: 1rem;
        width: 100%;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) ;
        gap: 3rem;
    }
    h3{
        text-align: center;
    }
</style>