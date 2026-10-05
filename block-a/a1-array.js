import { items } from "../data.js";


// A1(a) — Array Methods
const availableMedicines = items
    .filter((item) => item.price > 40 && item.stock > 0)
    .map((item) => item.name);

console.log("A1-a", availableMedicines);


// A1(b) — Total Stock Value

const totalStock = items.reduce(

    (total, item) => total + item.price * item.stock,
    0
);


console.log("A1-b", totalStock);


// A1(c) — find + spread

const medicineId2 = items.find((item) => item.id === 2);

const updatedMedicine = {
    ...medicineId2,
    stock: medicineId2.stock + 1
};

console.log("A1-c", updatedMedicine);
console.log("Original:", medicineId2);



// A1(d) — Destructuring + Rest
const [firstItem] = items;
const { name, price, ...others } = firstItem;

console.log("A1-d", others);