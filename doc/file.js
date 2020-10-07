//                                                    task1

// family 1

let John = {
  son1: "Chris <br/>",
  Chris: {
    son1: "Ali <br/>",
    son2: "Karim <br/>",
  },
  son2: "Alex <br/>",
  Alex: {
    son1: "John <br/>",
    John: {
      son1: "Ali <br/>",
      Ali: {
        son1: "Suleiman <br/>",
        Suleiman: {
          son1: "Kareem <br/>",
          son2: "Raheem <br/>",
          Raheem: {
            son1: "Nadeem <br/>",
            son2: "Kaleem <br/>",
            Kaleem: {
              son1: "Amir <br/>",
              son2: "Liaqat <br/>",
            },
          },
        },
        son2: "Usman <br/>",
        son3: "Salman <br/>",
        son4: "Javed <br/>",
      },
      son2: "Jack <br/>",
    },
    son2: "Alex <br/>",
    son3: "Garret <br/>",
    son4: "Wood",
    Wood: {
      son1: "Chris <br/>",
      son2: "Roy <br/>",
      son3: "Max",
      Max: {
        son1: "Usman <br/>",
        son2: "Salman <br/>",
        son3: "Javed <br/>",
        son4: "Mark <br/>",
        son5: "Alex <br/>",
      },
      son4: "Nova <br/>",
      son5: "Root <br/>",
      son6: "Mark <br/>",
      Mark: {
        son1: "Morgan <br/>",
        son2: "Watson <br/>",
      },
    },
    son5: "Hales <br/>",
  },
};

// family 2

let Jack = {
  son1: "Kevin <br/>",
  son2: "DerekWood <br/>",
};

// family 3

let David = {
  son1: "Kegan <br/>",
  Kegan: {
    son1: "Alex <br/>",
    Alex: {
      son1: "Jackma <br/>",
      Jackma: {
        son1: "Kevin <br/>",
        son2: "Derek <br/>",
        son3: "Trump <br/>",
        son4: "Obama <br/>",
        son5: "Bush <br/>",
      },
      son2: "Bill <br/>",
      Bill: {
        son1: "Robert <br/>",
        son2: "John <br/>",
      },
    },
  },
};

console.log(John);
console.log(Jack);
console.log(David);

// task2
Jack.son2 = "DerekKhan";
// task3
//   David.Kegan.Alex.Jackma.son3="Donald Trump";
// task4
//   delete David.Kegan.Alex.Jackma.son1;
//   delete David.Kegan.Alex.Jackma.son2;
// task5
//   document.write(`${John.Alex.John.Ali.Suleiman.son1}<br/>`);
//   document.write(`${John.Alex.John.Ali.Suleiman.son2}<br/>`);
// task6
function printvalue(obj) {
  for (var key in obj) {
    if (typeof obj[key] != "object") {
      document.write(obj[key]);
    } else {
      printvalue(obj[key]);
    }
  }
}
printvalue(John);
printvalue(Jack);
printvalue(David);
document.write(`naveed`);
