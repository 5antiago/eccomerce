<script>
    import { cart, total } from "../stores";
	import CartItem from "./CartItem.svelte";

    let cartbycategory = {}
    $: cartbycategory = Object.values($cart).reduce((obj, product) => {
        product.categoria in obj ? obj[product.categoria].push(product) : obj[product.categoria] = [product]
        return obj
    }, {})
</script>

<div class="itemslist">
    {#if Object.values($cart).length === 0}
        <div class="card">
            <h2>Sin Articulos</h2>
        </div>
    {/if}
    {#each Object.keys(cartbycategory) as categoria}
        <p>{categoria}</p>
        {#each cartbycategory[categoria] as item }
            <CartItem {item}/>
        {/each}
    {/each}
    <div class="checkout">
        <button>Ir a Pagar ${$total}</button>
    </div>
    
</div>


<style>
    .itemslist{
        padding: 1rem;
        width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 100%;
        z-index: 10;
        background-color:  #ECF2FF;
        max-height: 50vh;
        overflow: scroll;
        overflow-x: hidden;
        gap: 1rem;
    }
    .checkout{
        position: sticky;
        bottom:100%;
        display: flex;
        justify-content: center;
        position: relative;
        margin: 0.5rem;
    }
</style>