<script>
    // @ts-nocheck
    import Message from "./Message.svelte";
    import { store } from '../stores';

    $: messages = $store.messages;

</script>

{#each messages as message}
    <Message {message} />
{/each}