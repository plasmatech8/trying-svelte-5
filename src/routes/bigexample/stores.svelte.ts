// Note: I prefer function-object stores slightly more

export class FitnessTrackerStore {
	_stepsTaken = $state(0); // read/increment
	intensityLevel = $state(1); // read/write
	caloriesBurned = $derived(this._stepsTaken * this.intensityLevel * 0.04); // read-only

	get stepsTaken() {
		return this._stepsTaken;
	}
	incrementSteps() {
		this._stepsTaken += 1;
	}
}
