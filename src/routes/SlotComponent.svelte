<script runes lang="ts">
	let { children, custom } = $props<{ children: () => any; custom: (msg: string) => any }>();
</script>

<p>This is the default slot:</p>
<div>
	{@render children()}
</div>

<p>This is the custom slot:</p>
<div>
	{@render custom('hello from inside the component!')}
</div>

<style>
	div {
		outline: 1px solid;
	}
</style>
