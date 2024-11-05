<script>
    import Messages from "$lib/Messages.svelte";
    import QueryForm from "$lib/QueryForm.svelte";
</script>

<div class = "chat-container">
    <Messages />
    <QueryForm />
</div>

<style lang='scss'>
    .chat-container {
        display: flex;
        justify-content: end;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        width: 70vw;
        margin: 0 auto 70px auto;
        padding: 5px;
    }
</style>