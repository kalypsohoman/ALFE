<script>
    // @ts-nocheck
    import { store } from '../stores';

    $: messages = $store.messages;
    function handleSubmit(event, formData = new FormData(event.target)) {
        event.preventDefault();
        
        const query = formData.get('query');
        store.update(current => ({
            ...current,
            messages: [...current.messages, query]
        }));
    }
</script>

<form on:submit={handleSubmit}>
    <input type="text" name="query" placeholder="Ask Chronicle...">
    <button type="submit">Submit</button>
</form>