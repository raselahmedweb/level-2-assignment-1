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

type Product = { title: string; rating: number };
function filterByRating(items: Product[]): Product[] {
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



function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, currentArray) => [...acc, ...currentArray], []);
}
const arrayOfStrings = concatenateArrays<string>(["a", "b"], ["c", "d"], ["e"]);
const arrayOfNumbers = concatenateArrays<number>([1, 2], [3, 4, 5], [6]);

console.log(arrayOfStrings);
console.log(arrayOfNumbers);