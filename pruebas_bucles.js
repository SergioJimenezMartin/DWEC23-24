const dia = [3, 4, 7, ,{nombre:"juan", apellidos: "garcia"}]
console.log(dia[1]);

for (let i = 0; i < dia.length; i++) {
    console.log(dia[i]);
  }


  dia.forEach((element) => {
    console.log(element);
  });

  const arr = [1, 2, 3, 4, 5];

for (const element of dia) {
  console.log(element);
}