<script>
    import { favs } from "../../stores";
	import ProductCard from "../../components/ProductCard.svelte";
</script>

<div class="list">

        {#each Object.values($favs) as fav }
            <ProductCard product={fav}/>
        {/each}
</div>
<style>
    .list{
        display: grid;
        place-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) ;
        gap: 3rem;
    }
</style>