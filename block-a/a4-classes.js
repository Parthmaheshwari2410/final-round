import { items } from "../data.js";
// A4 — Medicine Class


class Medicine {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    discountedPrice(pct) {
        return this.price - (this.price * pct) / 100;
    }
}


// A4 — ControlledMedicine extends Medicine

class ControlledMedicine extends Medicine {
    constructor(id, name, price, requiresPrescription) {
        super(id, name, price);

        this.requiresPrescription = requiresPrescription;
    }

    discountedPrice(pct) {

        const priceAfterParentDiscount = super.discountedPrice(pct);


        return priceAfterParentDiscount * 0.95;
    }
}


// A4 — First item from data.js


const firstMedicine = items[0];


const medicine = new Medicine(
    firstMedicine.id,
    firstMedicine.name,
    firstMedicine.price
);


// Controlled Medicine
const controlledMedicine = new ControlledMedicine(
    firstMedicine.id,
    firstMedicine.name,
    firstMedicine.price,
    true
);


// A4 — Log pric
console.log(
    "Medicine discounted price:",
    medicine.discountedPrice(10)
);

console.log(
    "Controlled medicine price:",
    controlledMedicine.discountedPrice(10)
);
