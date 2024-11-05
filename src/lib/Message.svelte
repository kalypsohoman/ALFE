<script>
    export let message;
</script>

<p class={message.origin}>{message.text}</p>

<style lang='scss'>
    p {
        background-color: rgb(53, 53, 53);
        width: fit-content;
        color: white;
        font-family: "Texturina", serif;
        padding: 20px;
        border-radius: 20px;
        margin: 0px;
    }

    .user {
        align-self: flex-end;
    }

    .ai {
        align-self: flex-start;
    }
</style>