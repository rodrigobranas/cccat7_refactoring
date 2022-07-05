import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class SundayFareCalculator implements FareCalculator {
	FARE = 2.9;

	constructor (readonly next?: FareCalculator) {
	}

	calculate(segment: Segment) {
		if (!segment.isOvernight() && segment.isSunday()) {
			return segment.distance * this.FARE;
		}
		if (!this.next) throw new Error();
		return this.next?.calculate(segment);
	}
}
