<script runes lang="ts">
	import type { FitnessTrackerStore } from './stores.svelte';

	let { fitTracker } = $props<{ fitTracker: FitnessTrackerStore }>();
</script>

<table class="outline outline-gray-200 rounded">
	<tbody>
		<tr>
			<td>Steps</td>
			<td>{fitTracker.stepsTaken}</td>
			<td><button onclick={() => fitTracker.incrementSteps()}>Take Step</button></td>
		</tr>
		<tr>
			<td>Intensity</td>
			<td>{fitTracker.intensityLevel.toFixed(1)}x</td>
			<td
				><input
					type="range"
					bind:value={fitTracker.intensityLevel}
					min="0.5"
					max="1.5"
					step="0.1"
					on:click|stopPropagation
				/></td
			>
		</tr>
		<tr>
			<td>Calories</td>
			<td>{fitTracker.caloriesBurned.toFixed(2)} Cal</td>
		</tr>
	</tbody>
</table>

<style>
	td {
		@apply p-2;
	}
</style>
