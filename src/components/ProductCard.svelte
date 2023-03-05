<script>
    import { fade } from 'svelte/transition';
    export let product;
</script>

<div class="card">
    
    <a href="/Products/{product.id}">
        {#if product.descuento > 0}
        <div class="discount"> <p>En Descuento</p> </div>
    {/if}
        <img transition:fade src="https://picsum.photos/id/{product.id}/500/500" alt={product.descipcion} loading="lazy">
        <p>{product.nombre}</p>
        <p>$ {product.precio - product.descuento}</p>
    </a>
</div>

<style>
    a{
        display: flex;
        color: #131313;
        position: relative;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }
    img{
        width: 100%;
        border-radius: 5pt;
    }
    .discount{
        position:absolute;
            top:0;
            left:0;
            text-transform:uppercase;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 13px;
            text-align:center;
            font-weight: 700;
            color: #fff;
            background: purple;           
            height:40px;
            width:150px;
    }
    .card{

        background-color: #ECF2FF;
        border-radius: 5pt;
        box-shadow: 4px 4px #a9abaf91;
    }
    .card:hover{
        transform: scale(105%);
        box-shadow: none;
    }
    .card:hover::before{
        pointer-events: none;
        border-radius: 5px;
        cursor: pointer;
        color: #ECF2FF;
        display: grid;
        place-items: center;
        position: absolute;
        content: "Ver Detalles";
        background-color: #131313b4;
        height: 100%;
        z-index: 15;
        width: 100%;
    }
</style>