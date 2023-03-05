<script>
	import { CalcPrice } from "../helpers/CalcPrice";
    import { cart } from "../stores";
    export let item;
</script>

<div class="card">
    <img src="https://picsum.photos/id/{item.id}/500/500" alt={item.descripcion}>
    <div class="data">
        <p>{item.nombre}</p>
        <div class="actions">
            <button on:click={() => cart.delete(item)}>-</button>{item.cantidad_a_comprar} <button on:click={() => cart.add(item)}>+</button>
        </div>
        <p>Precio: {CalcPrice(item)}</p>
    </div>
</div>

<style>
    .card{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: left;
        gap: 2rem;
    }
    .actions{
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 1rem;
    }
    img{
        height: 10%;
        max-width: 30%;
        aspect-ratio: 1;
    }
    .data{
        align-self: flex-start;
    }
</style>