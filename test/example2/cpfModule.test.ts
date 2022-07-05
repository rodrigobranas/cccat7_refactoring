import { validate } from "../../src/example2/cpfModule";

test("Deve validar um CPF válido", function () {
	const isValid = validate("886.634.854-68");
	expect(isValid).toBe(true);
});

test("Deve validar um CPF válido que termine com zero", function () {
	const isValid = validate("47308766870");
	expect(isValid).toBe(true);
});

test("Deve validar um CPF inválido com todos os dígitos iguais", function () {
	const isValid = validate("111.111.111-11");
	expect(isValid).toBe(false);
});

test("Deve validar um CPF inválido com o tamanho menor", function () {
	const isValid = validate("111.111.111-1111");
	expect(isValid).toBe(false);
});

test("Deve validar um CPF inválido com o tamanho maior", function () {
	const isValid = validate("111.111.111");
	expect(isValid).toBe(false);
});
