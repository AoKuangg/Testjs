import {
  validarBeca,
  personaMayor,
  parEimpar,
  calcular,
  voltaje,
  cantidadEstudiantes,
} from "../src/taller.js";

//Beca
describe("1. Validar si un estudiante aprobo o no una beca", () => {
  let resNota = validarBeca(3, 4, 3);
  let array = ["No paso", "Si paso"];
  test("Verifica si el resultado esta entre las dos opciones solicitadas", () => {
    let res = array.includes(resNota);
    expect(res).toBe(true);
  });
  test("Verficar si es un stringa", () => {
    expect(typeof resNota).toBe("string");
  });
});

//Par O Impar
describe("2. Validar si es par o impar y si es mayor o menor que 10", () => {
  test("Retorna par y mayor/menor que 10", () => {
    expect(parEimpar(18)).toContain("El numero es Par y es Mayor que 10");
    expect(parEimpar(6)).toContain("El numero es Par y es Menor que 10");
  });
  it("Retorna que es impar y mayor/menor que 10", () => {
    expect(parEimpar(15)).toContain("El numero es Impar y es Mayor que 10");
    expect(parEimpar(9)).toContain("El numero es Impar y es Menor que 10");
  });
});

//Voltaje
describe("3. Calcular voltaje de la corriente dada", () => {
  it("Verifica que retorne un valor númerico", () => {
    expect(typeof voltaje()).toBe("number");
  });

  it("Retorna el valor (6.5 * 5) = 32.5", () => {
    expect(voltaje(6.5, 5)).toBe(32.5);
  });
});

//personaMayor
describe("4. Determinar a la persona mayor", () => {
  let personas = [
    { nombre: "Jhon", edad: 40 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Camilo", edad: 19 },
  ];
  it("Validar si retorna un objeto", () => {
    expect(typeof personaMayor(personas)).toBe(`object`);
  });

  it("Retorna los datos de la persona mayor", () => {
    expect(personaMayor(personas)).toEqual({ nombre: "Jhon", edad: 40 });
  });
});

//Calcular
describe("5. Hacer operaciones matematicas a dos valores", () => {
  it("retorna valores calculados según sus valores", () => {
    expect(calcular(4, 2)).toEqual([6, 2]);
    expect(calcular(2, 4)).toEqual([8, 0.5]);
    expect(calcular(2, 2)).toEqual([2, 2]);
  });
});

//cantidadEstudiantes
describe("6. Obtener la informacion a cerca de los distintos estudiantes", () => {
  let estudiantesArray = [
    { nombre: "Camilo", sexo: "M", nota: 4.2 },
    { nombre: "Rosa", sexo: "F", nota: 4.9 },
    { nombre: "Nancy", sexo: "F", nota: 3.5 },
  ];

  it("Validar que retorne un string", () => {
    expect(typeof cantidadEstudiantes(estudiantesArray)).toBe("string");
  });
  it("Validar que retorne al mejor estudiante", () => {
    expect(cantidadEstudiantes(estudiantesArray)).toBe(
      "El mejor estudiante fue: Rosa, hay 2 estudiantes femeninos y 1 masculinos."
    );
  });
});
