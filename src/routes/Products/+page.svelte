<script>
	import ProductCard from '../../components/ProductCard.svelte';
    import {search, filtered, cart} from '../../stores.js'
</script> 
<div class="details">
    <h2>Productos</h2>
    <input bind:value={$search} type="text" id="searchInput" placeholder="Buscar">
</div>
<div class="list">
    {#await $filtered}
        <p>....</p>
    {:then products} 
        {#each products as product (product.id)}
            <ProductCard {product}/>
        {/each}
    {/await}
</div>

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
    .details{
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        padding: 1rem;
    }
    input{
        font-size: larger;
        border: none ;
        border-bottom: solid 1px;
        outline: 0;
        max-width: 50%;
    }
</style>