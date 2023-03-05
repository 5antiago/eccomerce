<script>
    import { fade } from 'svelte/transition';
	import { cart, favs } from "../stores";
    export let product;
</script>

<div class="main">
    <img transition:fade  src="https://picsum.photos/id/{product?.id}/500/500" alt={product?.descripcion}>
    <div class="details">
        <div class="title">
            <h3>{product?.nombre}</h3>
            {#if product?.id in $favs}
                <img class='star' src="/star-filled.png" on:click={() => favs.delete(product)} alt="star filled" srcset="">
            {:else}
                <img class='star' src="/star-empty.png" alt="star empty" on:click={() => favs.add(product)}/>
            {/if}
        </div>
        <p>{product?.descripcion}</p>
        <span>
            {#if product?.descuento > 0}
            <p class="deleted">${product?.precio}</p>
            {/if}
            <p>$ {product?.precio - product?.descuento}</p>    
        </span>

        <span>
            <button on:click={() => cart.delete(product)}>-</button>
            <input on:input={(e) => cart.sync(product, Number(e.target.value))} type="number"  min="0" value="{$cart[product?.id]?.cantidad_a_comprar || 0}"/>
            <button on:click={() => cart.add(product)}>+</button>
        </span>
        
    </div>
</div>
<style>
    .main{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
        width: 100%;
        height: 80vh;
    }
    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        gap: 2rem;
    }
    .deleted {
        text-decoration:line-through;
    }
    h3{
        display: inline;
    }
    .star{
        height: 1.5rem;
    }
    .title{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>