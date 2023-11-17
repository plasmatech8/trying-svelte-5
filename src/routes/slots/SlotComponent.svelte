<script runes lang="ts">
</script>

<p>This is the default slot:</p>
<div>
	<svelte:slot />
</div>

<p>This is the custom slot:</p>
<div>
	<svelte:slot name="custom" msg="hello from inside the component!" />
</div>

<p>This is the optional slot:</p>
<div>
	<svelte:slot name="optional" >
		No content Provided for optional slot!
	</svelte:slot>
</div>

<style>
	div {
		@apply outline p-2;
	}
</style>
