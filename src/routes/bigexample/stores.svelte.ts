
function createFitnessTrackerStore() {
	state stepsTaken = 0; // read/increment
	state intensityLevel = 1; // read/write
	derived caloriesBurned = stepsTaken * intensityLevel * 0.04; // read-only

	return {
		get stepsTaken,
		incrementSteps: () => (stepsTaken += 1),
		get caloriesBurned,
		intensityLevel
	};
}
