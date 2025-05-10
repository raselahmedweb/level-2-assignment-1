## Differences between Interfaces and Types in TypeScript

In TypeScript interface and types are used to define the structure of objects.

<b>Example of type</b>
```ts
type Student = {
    name: string;
    age: number;
}
```
<b>Example of interface</b>
```ts
interface Student2 {
    name: string;
    age: number;
}
```

Type can extend by & operator using.
```ts
type Student = {
    name: string;
    age: number;
}
type Role = {
    role?: number;
}
type StudentWithRole = Student & Role;
const person: StudentWithRole = {
  name: "Rasel",
  age: 23,
  role: 1
}
```

Interface can extend by extend keyword.
```ts
interface Student2 {
    name: string;
    age: number;
}
interface Student2WithRole extends Student2 {
    role: number;
}
const person: Student2WithRole = {
  name: "Rasel",
  age: 23,
  role: 1
}
```

also we can extand interface by overwriting
```ts
interface Student2 {
    name: string;
    age: number;
}
interface Student2 {
    role: number;
}
const person: Student2 = {
  name: "Rasel",
  age: 23,
  role: 1
}
```


## Use of the keyof keyword in TypeScript.
Keyof keyword is a type operator that point the keys/property name of an object type as a union(|) of string types.

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "email"
