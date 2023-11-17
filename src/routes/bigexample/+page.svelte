<script runes lang="ts">
	import Button from './Button.svelte';
	import FitnessStats from './FitnessStats.svelte';
	import { FitnessTrackerStore } from './stores.svelte';

	const tracker = new FitnessTrackerStore();

	let loading = $state(false);
	let lastTimer = $state<number | undefined>();

	function handleClick() {
		loading = true;
		clearTimeout(lastTimer);
		lastTimer = setTimeout(() => {
			tracker.incrementSteps();
			loading = false;
		}, 2000);
	}
</script>

<h1>Big Example</h1>

<FitnessStats fitTracker={tracker} />

<form class="outline p-2" on:submit={() => alert('Form submitted!')}>
	<!-- Note: This button does not submit because it changes to loading -->
	<Button onclick={handleClick} {loading} disabled={loading}>Click Me!</Button>
	<div class="mt-5 flex gap-3">
		<!-- Submit form -->
		<button onclick={() => alert('Clicked')}>Click then submit</button>
		<!-- Modifiers not supported?! -->
		<button
			onclick={(e) => {
				e.preventDefault();
				alert('Clicked');
			}}>Click then prevent default</button
		>
		<!-- Submit with button component -->
		<Button type="submit">Submit with button component</Button>
	</div>
</form>

<style>
	button {
		@apply px-1 bg-green-100 hover:bg-green-200 rounded active:scale-95;
	}
</style>
