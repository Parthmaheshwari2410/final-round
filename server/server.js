import express from "express";

import { medicines } from "./data.js";
import { logger } from "./middleware/logger.js";
import { medicineSchema } from "./validators/medicineValidator.js";

const app = express();

const PORT = 5000;

app.use(express.json());

app.use(logger);

// get medicines
app.get("/medicines", (req, res) => {
    const { category } = req.query;

    if (category) {
        const filteredMedicines = medicines.filter(
            (medicine) =>
                medicine.category.toLowerCase() ===
                category.toLowerCase()
        );

        return res.json(filteredMedicines);
    }

    res.json(medicines);
});

//get/ medicines /: id


app.get("/medicines/:id", (req, res) => {
    const id = Number(req.params.id);

    const medicine = medicines.find(
        (item) => item.id === id
    );

    if (!medicine) {
        return res.status(404).json({
            error: "Medicine not found"
        });
    }

    res.json(medicine);
});

//post/medicines

app.post("/medicines", (req, res) => {
    const result = medicineSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            error: "Validation failed",
            messages: result.error.issues.map(
                (issue) => issue.message
            )
        });
    }
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});