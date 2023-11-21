<script runes>
	import SlotComponent from './SlotComponent.svelte'
</script>

<h1>Slots</h1>

<SlotComponent>
	Foo bar baz. This is default slot.

	<svelte:slot-content into="custom">
		Hello Custom Snippet!? {msg}
    </svelte:slot-content>
</SlotComponent>