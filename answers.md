//  Block B Answers



// B1.1

3,3,3

// B1.2

// Output
false true

//B1.3

//Output:
"" true

//B1.4

//Output
ReferenceError



// B2- Answer 

//TypeScript Interfaces, Enums, Generics

interface Medicine {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

enum MedicineStatus {
  InStock,
  LowStock,
  Expired
}

function findById<T extends { id: number }>(
  list: T[],
  id: number
): T | undefined {
  return list.find((item) => item.id === id);
}

//B3
 // Utility Types + Typed React Props

 type UpdateMedicineDto =
  Partial<Pick<Medicine, "price" | "stock">>;
type MedicinePreview =
  Omit<Medicine, "stock">;
function MedicineCard({
  item,
  onSelect
}: MedicineCardProps) {
  return (
    <button onClick={() => onSelect(item.id)}>
      {item.name}
    </button>
  );
}



//B11 · ES6+: Debounce &amp; Throttle
export function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
timer = setTimeout(() => {
  fn.apply(this, args);
}, delay);

  };
}




export function throttle(fn, limit) {
  let waiting = false;
  return function (...args) {
    if (waiting) {
      return;
    }
fn.apply(this, args);

waiting = true;

setTimeout(() => {
  waiting = false;
}, limit);

  };
}


Debounce:Use for a search box
Throttle:
Use for window scroll

//B10 — MySQL

CREATE TABLE medicines (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL DEFAULT 0
);
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  medicine_id INT NOT NULL,
  qty INT NOT NULL,
  FOREIGN KEY (medicine_id)
    REFERENCES medicines(id)
);

SELECT
  m.name,
  SUM(o.qty) AS total_qty
FROM medicines m
JOIN orders o

//indexing

CREATE INDEX idx_medicines_category
ON medicines(category);

// B9 — MongoDB & Mongoose

import mongoose from "mongoose";
const medicineSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        minlength: 2
      },


     // Aggregation


const result = await Medicine.aggregate([
  {
    $project: {
      category: 1,
      stockValue: {
        $multiply: ["$price", "$stock"]
      }
    }
  },
  {
    $group: {
      _id: "$category",
      totalStockValue: {
        $sum: "$stockValue"
      }
    }
  },
  {
    $sort: {
      totalStockValue: -1
    }
  },
  {
    $limit: 2
  }
]);


//   B8 --  Node fs, Streams, Events


import { promises as fs } from "fs";
import { EventEmitter } from "events";
const content = await fs.readFile(
  "data.txt",
  "utf-8"
);

const lines = content.split(/\r?\n/);

console.log("Number of lines:", lines.length);

const emitter = new EventEmitter();
emitter.on(
  "medicineAdded",
  (medicine) => {
    console.log(
      "Medicine added:",
      medicine
    );
  }
);
emitter.emit("medicineAdded", {
  id: 6,
  name: "Aspirin"
});
createReadStream

//  B6 — Next.js App Router
1. File tree:
app/ layout.tsx
app/  page.tsx
app/medicines/
app/medicines/ page.tsx
   app/medicines/ [id]/ page.tsx
middleware.ts


// B5 — React Testing Library

