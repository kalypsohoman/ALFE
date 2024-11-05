<script>
    // @ts-nocheck
    import { store } from '../stores';

    $: messages = $store.messages;
    
    function handleSubmit(event, formData = null) {
        
        if (event.type === 'keydown') {
            formData = new FormData(event.target.form);
        } else {
            event.preventDefault();
            formData = new FormData(event.target);
        }

        const query = formData.get('query');

        if (query === '') return; 

        store.update(current => ({
            ...current,
            messages: [...current.messages, query]
        }));

        if (event.type === 'keydown') {
            event.target.form.reset();
        } else {
            event.target.reset();
        }
    }

    function handleKeydown(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    }
</script>

<form on:submit={handleSubmit}>
    <textarea 
        name="query"
        on:keydown={handleKeydown} 
        placeholder="Ask Chronicle..."
        value={'all im trying to do is be yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet'}
    ></textarea>
    <button type="submit">Submit</button>
</form>

<style lang='scss'>
    form {
        display: flex;
        gap: 40px;
        width: 100%;
        height: fit-content;
        min-height: 60px;
    }

    textarea {
        overflow: hidden;
        resize: none;
        padding: 1rem;
        flex-grow: 1;
        border-radius: 20px;
        resize: vertical;
    }

    button {
        width: 100px;
    }
</style>