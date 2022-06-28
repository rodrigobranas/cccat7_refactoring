import { calculateRide } from "../src/calculateRide";

test("Deve calcular o valor da corrida de uma corrida normal", function () {
	const segments = [{ distance: 10, date: new Date("2021-03-01T10:00:00") }];
	const fare = calculateRide(segments);
	expect(fare).toBe(21);
});

test("Deve calcular o valor da corrida de uma corrida em horário noturno", function () {
	const segments = [{ distance: 10, date: new Date("2021-03-01T23:00:00") }];
	const fare = calculateRide(segments);
	expect(fare).toBe(39);
});

test("Deve calcular o valor da corrida de uma corrida no domingo", function () {
	const segments = [{ distance: 10, date: new Date("2021-03-07T10:00:00") }];
	const fare = calculateRide(segments);
	expect(fare).toBe(29);
});

test("Deve calcular o valor da corrida de uma corrida no domingo em horário noturno", function () {
	const segments = [{ distance: 10, date: new Date("2021-03-07T23:00:00") }];
	const fare = calculateRide(segments);
	expect(fare).toBe(50);
});

test("Deve calcular o valor da corrida com a distância inválida", function () {
	const segments = [{ distance: -3, date: new Date("2021-03-01T10:00:00") }];
	expect(() => calculateRide(segments)).toThrow(new Error("Invalid Distance"));
});

test("Deve calcular o valor da corrida com a data inválida", function () {
	const segments = [{ distance: 10, date: new Date("abcdef") }];
	expect(() => calculateRide(segments)).toThrow(new Error("Invalid Date"));
});

test("Deve calcular o valor da corrida com tarifa mínima", function () {
	const segments = [{ distance: 3, date: new Date("2021-03-01T10:00:00") }];
	const fare = calculateRide(segments);
	expect(fare).toBe(10);
});

test("Deve calcular o valor da corrida no dia 10 de cada mês", function () {
	const segments = [{ distance: 10, date: new Date("2021-03-10T10:00:00") }];
	const fare = calculateRide(segments);
	expect(fare).toBe(0);
});
