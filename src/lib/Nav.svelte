<script>
// @ts-nocheck

    import { page } from "$app/stores";

    let currentPage;
    page.subscribe(page => currentPage = page.route.id)
</script>


<nav>
    <a class:active={currentPage === '/'} href={'/'}>home</a>
    <a class:active={currentPage === '/sessions'} href={'/sessions'}>sessions</a>
</nav>


<style lang='scss'>
    nav {
        display: flex;
        align-items: flex-end;
        gap: 30px;
        font-family: "Texturina", serif;
        font-size: 3rem;
    }

    .active {
        cursor: default;
        color: rgb(222 199 158);
    }

    // MOBILE STYLING
    @media (max-width: 850px) {
        nav {
            display: none;
        }
    }
</style>