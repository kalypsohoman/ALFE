<script>
    // @ts-nocheck
    import { store } from '../stores';
    $: messages = $store.messages;
    $: value = '';

    function handleSubmit(event, formData) {
        if (event.target && event.type === 'keydown') {
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
            event.target.reset();
        } else {
            event.target.form.reset();
        }
    }

    function handleKeydown(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    }

    function autoResize(event) {
        const textarea = event.target;
        textarea.style.height = 'auto'; // Reset height to recalculate
        textarea.style.height = `${textarea.scrollHeight}px`; // Set height to fit content
    }
</script>

<form on:submit={handleSubmit}>
    <textarea 
        name="query"
        on:keydown={handleKeydown}
        on:input={autoResize}
        placeholder="Ask Chronicle..."
        bind:value={value}
    ></textarea>
    <button type="submit">Submit</button>
</form>

<style lang='scss'>
    form {
        display: flex;
        width: 100%;
        align-items: end;
        justify-content: end;
        
    }

    textarea {
        overflow: hidden;
        resize: none;
        padding: 1rem;
        flex-grow: 1;
        border-radius: 20px;
        height: 75px;
    }

    button {
        width: 100px;
        height: 50px;
        position: fixed;
        margin: 10px;
    }
</style>
