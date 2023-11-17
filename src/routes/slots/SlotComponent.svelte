<script runes lang="ts">
	let { children, custom, optional = undefined } = $props<{
		children: () => any;
		custom: (msg: string) => any;
		optional?: (() => any);
	}>();
</script>

<p>This is the default slot:</p>
<div>
	{@render children()}
</div>

<p>This is the custom slot:</p>
<div>
	{@render custom('hello from inside the component!')}
</div>

<p>This is the optional slot:</p>
<div>
	{#if optional}
		{@render optional()}
	{:else}
		No content Provided for optional slot!
	{/if}
</div>

<style>
	div {
		@apply outline p-2;
	}
</style>
