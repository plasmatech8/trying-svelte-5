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

<Button onclick={handleClick} {loading} disabled={loading}>Click Me!</Button>
