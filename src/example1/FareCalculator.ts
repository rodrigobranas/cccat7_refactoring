import Segment from "./Segment";

export default interface FareCalculator {
	next?: FareCalculator;
	calculate (segment: Segment): number;
}
