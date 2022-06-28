import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class OvernightSundayFareCalculator implements FareCalculator {
	FARE = 5;

	constructor (readonly next?: FareCalculator) {
	}

	calculate(segment: Segment) {
		if (segment.isOvernight() && segment.isSunday()) {
			return segment.distance * this.FARE;
		}
		if (!this.next) throw new Error();
		return this.next?.calculate(segment);
	}
}
