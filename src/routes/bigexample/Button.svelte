<script runes lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import LoadingSpinner from './LoadingSpinner.svelte';

	type ButtonProps = { children?: () => any; loading?: boolean } & HTMLButtonAttributes;

	let { children = undefined, loading = false, type = 'button', ...btnAttrs } = $props<ButtonProps>();
</script>

<button
	{...btnAttrs}
    {type}
	class="px-2 py-1 bg-red-500 rounded hover:bg-red-400 text-white active:scale-95 flex gap-2 items-center disabled:bg-gray-400 disabled:cursor-not-allowed !scale-100"
>
	{#if loading}
		<LoadingSpinner class="w-5" />
	{/if}
	<div>
		{#if children}
			{@render children()}
		{/if}
	</div>
</button>
