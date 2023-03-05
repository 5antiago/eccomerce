<script>
    import { user } from "../../stores";
    let profile
    $: profile = $user[0]
</script>
<h2>Perfil del usuario</h2>

{#if profile}
    <p>Nombre: {profile.nombre} {profile.apellido}</p>
    <p>Email: {profile.email}</p>
{/if}