<script runes>
	import SlotComponent from './SlotComponent.svelte'
</script>

<h1>Slots</h1>

<SlotComponent>
    {#snippet children()}
	    Foo bar baz. This is default slot.
    {/snippet}

	{#snippet custom(msg)}
		Hello Custom Snippet!? {msg}
	{/snippet}
</SlotComponent>