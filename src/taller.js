export const validarBeca = (nota1, nota2, note3) =>{
    let media = (nota1 + nota2 + note3)/3;
    if(media <=3.9){
        return "No paso";
    } else if (media <= 5) {
        return "Si paso";
    } else if (media<0&&media>5){
        return "Notas fuera de los limites";
    }
};

export const parEimpar = (num)=>{
    let parImpar = num % 2 ==0 ? "Par": "Impar";
    let mayorMenor = "";
    if (num >10){
        mayorMenor = "Mayor";
    } else if (num ==10){
        mayorMenor = "Igual";
    }else {
        mayorMenor = "Menor";
    }

    return `El numero es ${parImpar} y es ${mayorMenor} que 10`;
};

export const voltaje = (a,b)=>{
    let voltaje = a * b;
    return Numbers(voltaje.toFixed(1));
};

export const personaMayor = (personas) =>{
    let Pmayor = personas[0];
    personas.forEach((persona) => {
        persona.edad > Pmayor.edad ? (Pmayor = persona): Pmayor;
    });
    return Pmayor;
};

export const calcular = (a,b)=>{
    if(a>b){
        return [a+b,a-b];
    } else if(a<b){
        return [a*b, Number((a/b).toFixed(1))];
    } else {
        return [a,b];
    }
};


export const cantidadEstudiantes = (Array) => {
    let numM = 0,
      numF = 0,
      notamayor = 0,
      notamenor = 0,
      nombremenorNota = "",
      nombremayorNota = "";
  
    Array.forEach((estudiante) => {
      let nombre = estudiante.nombre;
      let sexo = estudiante.sexo;
      let notaEstudiante = estudiante.nota;
  
      if (notaEstudiante >= notamayor) {
        notamayor = notaEstudiante;
        nombremayorNota = nombre;
      }
      if (notaEstudiante < notamenor) {
        notamenor = notaEstudiante;
        nombremenorNota = nombre;
      }
      if (sexo.toUpperCase() === "M") {
        numM++;
      } else if (sexo.toUpperCase() === "F") {
        numF++;
      }
    });
  
    return `El mejor estudiante fue: ${nombremayorNota}, hay ${numF} estudiantes femeninos y ${numM} masculinos.`;
  };