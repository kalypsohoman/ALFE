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
        width: 100vw;
        background-color: rgb(53, 53, 53);
        display: flex;
        padding: 20px;
        position: fixed;
        z-index: 10;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Optional shadow to distinguish it */

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
        position: relative;
        padding: 0 1rem 1rem 1rem;
        top: 120px;
        height: calc(100vh - 120px - 1rem);
    }

    .logo {
        align-self: center;
    }
</style>