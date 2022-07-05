import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class SpecialDayFareCalculator implements FareCalculator {
	FARE = 15;

	constructor (readonly next?: FareCalculator) {
	}

	calculate(segment: Segment) {
		if (segment.date.getDate() === 10) {
			return this.FARE;
		}
		if (!this.next) throw new Error();
		return this.next?.calculate(segment);
	}
}
