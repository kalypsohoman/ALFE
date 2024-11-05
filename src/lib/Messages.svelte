<script>
    // @ts-nocheck
    import Message from "./Message.svelte";
    import { store } from '../stores';

    $: messages = $store.messages;

</script>

<div class="message-container">
    {#each messages as message}
    <Message {message} />
    {/each}
</div>

<style lang='scss'>
    .message-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
</style>