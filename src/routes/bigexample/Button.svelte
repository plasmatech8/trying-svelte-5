<script runes lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import LoadingSpinner from './LoadingSpinner.svelte';

    prop { type = 'button', ...btnAttrs }: HTMLButtonAttributes = {}
    prop loading: boolean = false;

    slot children()
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
        <svelte:slot>
            No Content
        </svelte:slot>
	</div>
    <svelte:slot name="trailing" {loading}>
        <!-- No content -->
    </svelte:slot>
</button>
