<script>
    import Nav from "$lib/Nav.svelte";
</script>


<header>
    <a class="logo" href="/">Chronicle</a>
    <Nav />
</header>

<main>
    <slot />
</main>


<style lang='scss'>
    header {
        height: 80px;
        background-color: rgb(53, 53, 53);
        display: flex;
        padding: 20px;
    }
    
    a {
        font-size: 6rem;
        font-weight: bold;
        margin-right: auto; // Pushes the first child to the left and others to the right
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        height: calc(100vh - 120px);
    }

    .logo {
        align-self: center;
    }
</style>