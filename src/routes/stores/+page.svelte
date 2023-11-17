<script runes>
	// (1) Class-based store
	class FitnessTrackerStore {
		_stepsTaken = $state(0); // read/increment
		get stepsTaken() {
			return this._stepsTaken;
		}
		incrementSteps = () => (this._stepsTaken += 1);

		intensityLevel = $state(1); // read/write

		caloriesBurned = $derived(this._stepsTaken * this.intensityLevel * 0.04); // read-only
	}

	// (2) Function-object store
	function createFitnessTrackerStore() {
		let stepsTaken = $state(0); // read/increment
		let intensityLevel = $state(1); // read/write
		let caloriesBurned = $derived(stepsTaken * intensityLevel * 0.04); // read-only

		return {
			get stepsTaken() {
				return stepsTaken;
			},
			incrementSteps: () => (stepsTaken += 1),
			get caloriesBurned() {
				return caloriesBurned;
			},
			get intensityLevel() {
				return intensityLevel;
			},
			set intensityLevel(value) {
				intensityLevel = value;
			}
		};
	}

	const fitTracker = new FitnessTrackerStore();
	const fitTracker2 = createFitnessTrackerStore();
</script>

<h1>Stores</h1>

<h2>Class-based store</h2>

<table class="outline outline-gray-200">
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

<h2>Function-object store</h2>

<table class="outline outline-gray-200">
	<tbody>
		<tr>
			<td>Steps</td>
			<td>{fitTracker2.stepsTaken}</td>
			<td><button onclick={() => fitTracker2.incrementSteps()}>Take Step</button></td>
		</tr>
		<tr>
			<td>Intensity</td>
			<td>{fitTracker2.intensityLevel.toFixed(1)}x</td>
			<td
				><input
					type="range"
					bind:value={fitTracker2.intensityLevel}
					min="0.5"
					max="1.5"
					step="0.1"
					on:click|stopPropagation
				/></td
			>
		</tr>
		<tr>
			<td>Calories</td>
			<td>{fitTracker2.caloriesBurned.toFixed(2)} Cal</td>
		</tr>
	</tbody>
</table>

<style>
	td {
		@apply p-2;
	}
</style>
