<script>
    import Cart from "../components/Cart.svelte";
	import { CartCant } from "../stores";
    let cartOpen = false

    const handleCart = () => cartOpen = !cartOpen;
</script>
<nav>
    <ul>
        <li> <a href="/">Home</a></li>
        <li><a href="/Products">Productos</a></li>
        <li><a href="/Favoritos">Favoritos</a></li>
        <li><a href="/Perfil">Perfil</a></li>

    </ul>
    <div class="cart">
        {#if $CartCant > 0}
            <div class="count">{$CartCant}</div>
        {/if}
        <img on:click={handleCart} src="/cart.png" alt="cart icon">
        {#if cartOpen}
            <Cart />
        {/if}
    </div>
</nav>
    
<style  lang="scss">
    nav{
        padding: 2rem;
        z-index: 20;
        background-color:  #ECF2FF;
        font-size: large;
        position: sticky;
        top: 0;
        height: 10vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 1.5rem;
    }

    a{
        position: relative;
        color: #131313;
        text-decoration: none;
    }
    li:hover{
        width: 100%; 
        left: 0;
    }
    li::after{
        
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    .cart{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        cursor: pointer;
    }
    .count{
        display: grid;
        place-content: center;
        position: absolute;
        bottom: 15px;
        left: 15px;
        border: 2px solid white;
        pointer-events: none;
        background-color: black;
        color: white;
        border-radius: 50%;
        height: 1.3rem;
        width: 1.3rem;
    }
    :global(*){
        padding: 0;
        margin: 0;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-sizing: border-box;
    }
</style>
<slot/>
