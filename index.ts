function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

type Book = { title: string; rating: number };
function filterByRating(items: Book[]): Book[] {
  return items.filter((item) => {
    return item.rating >= 4;
  });
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));

//! stack overflow answer kintu ami bujini beparta
// function concatenateArrays<T>(...arrays: T[]): T[] {
//   return arrays.reduce((acc, currentArray) => [...acc, ...currentArray], []);
// }
// const arrayOfStrings = concatenateArrays<string>(["a", "b"], ["c", "d"], ["e"]);
// const arrayOfNumbers = concatenateArrays<number>([1, 2], [3, 4, 5], [6]);
// console.log(arrayOfStrings);
// console.log(arrayOfNumbers);

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

const myCar = new Car("Corolla", 2020, "Toyota");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
  //? ami vabtesilam ekhane unexpected type value handle korar jonno else if condition er bhitor typeof value === "number" check korbo and onno kono type er jonno ekta error msg "Unexpected token" return korbo, but typescript to onno kono type er value dilei instant error dekhai dicche, so main concept of typescrip age to shunci module e ekhon eita nije code likhar somoy bujte parsi code execute howar agei code error dhora jay;
}
console.log(processValue("rasel"));
console.log(processValue(50));

// interface Product {
//   name: string;
//   price: number;
// }

// function getMostExpensiveProduct(products: Product[]): Product | null{
//   const highestPrice = Math.max(...products.map(p => p.price));
//   const product = products.filter(p=> p.price === highestPrice && {name: p.name, price: p.price});
//   return products.length ? product:null;
// }

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// console.log("enum", Day.Friday)
function getDayType(day: Day): string {
  if (day === 6) {
    return "Weekend";
  }
  return "Weekday";
}
console.log(getDayType(Day.Sunday));
console.log(getDayType(Day.Monday));



// const promise = new Promise((res, rej) => {
//         if (-1 < 0) {
//             rej(new Error("Negative number not allowed"));
//         } else {
//             setTimeout(() => {
//                 res(2 * 2);
//             }, 1000);
//         }
//     }).then((data)=>console.log(data,"etwtew")).catch(err=>console.log(err.message))
async function squareAsync(n: number): Promise<number>{
  return new Promise((res, rej) => {
        if (n < 0) {
            rej(new Error("Negative number not allowed"));
        } else {
            setTimeout(() => {
                res(n * n);
            }, 1000);
        }
    })
    //.then((data)=>console.log(data,"etwtew")).catch(err=>console.log(err.message))
    //! first eivabe likhsilam type return hocche na as expected
}
//? not understand how console log and console error working without passing anything in parentheses, first time i've seen this. But as I can understand
squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

//* but eta make sense for me
squareAsync(4).then((data)=>console.log(data)).catch(err=>console.log(err.message));

