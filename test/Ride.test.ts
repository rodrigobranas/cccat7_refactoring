import NormalFareCalculator from "../src/NormalFareCalculator";
import OvernightFareCalculator from "../src/OvernightFareCalculator";
import OvernightSundayFareCalculator from "../src/OvernightSundayFareCalculator";
import Ride from "../src/Ride";
import SpecialDayFareCalculator from "../src/SpecialDayFareCalculator";
import SundayFareCalculator from "../src/SundayFareCalculator";

let ride: Ride;

beforeEach(function () {
	const normalFareCalculator = new NormalFareCalculator();
	const sundayFareCalculator = new SundayFareCalculator(normalFareCalculator);
	const overnightFareCalculator = new OvernightFareCalculator(sundayFareCalculator);
	const overnightSundayFareCalculator = new OvernightSundayFareCalculator(overnightFareCalculator);
	const specialDayFareCalculator = new SpecialDayFareCalculator(overnightSundayFareCalculator);
	ride = new Ride(specialDayFareCalculator);
});

test("Deve calcular o valor da corrida de uma corrida normal", function () {
	ride.addSegment(10, new Date("2021-03-01T10:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(21);
});

test("Deve calcular o valor da corrida de uma corrida noturna", function () {
	ride.addSegment(10, new Date("2021-03-01T23:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(39);
});

test("Deve calcular o valor da corrida de uma corrida no domingo", function () {
	ride.addSegment(10, new Date("2021-03-07T10:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(29);
});

test("Deve calcular o valor da corrida de uma corrida no domingo de noite", function () {
	ride.addSegment(10, new Date("2021-03-07T23:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(50);
});

test("Deve calcular o valor da corrida no dia 10", function () {
	ride.addSegment(10, new Date("2021-03-10T10:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(15);
});

test("Deve calcular o valor da corrida com a distância inválida", function () {
	expect(() => ride.addSegment(-3, new Date())).toThrow(new Error("Invalid Distance"));
});

test("Deve calcular o valor da corrida com a data inválida", function () {
	expect(() => ride.addSegment(10, new Date("abcdef"))).toThrow(new Error("Invalid Date"));
});

test("Deve calcular o valor da corrida com tarifa mínima", function () {
	ride.addSegment(3, new Date("2021-03-01T10:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(10);
});
