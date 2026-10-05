import { useState } from "react";

function AddMedicineForm({ onAdd }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    // Form validation


    const isInvalid =
        name.trim().length < 3 ||
        Number(price) <= 0 ||
        price === "";

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isInvalid) {
            return;
        }

        // A6 — Add new medicine

        const newMedicine = {
            name: name.trim(),
            price: Number(price),
            category: "Other",
            stock: 1
        };

        onAdd(newMedicine);

        setName("");
        setPrice("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Medicine</h2>

            <div>
                <label>Name</label>

                <input
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                    placeholder="Medicine name"
                />
            </div>

            <div>
                <label>Price</label>

                <input
                    type="number"
                    value={price}
                    onChange={(event) =>
                        setPrice(event.target.value)
                    }
                    placeholder="Price"
                />
            </div>

            {/* Inline error */}
            {name.length > 0 && name.trim().length < 3 && (
                <p>Name must contain at least 3 characters</p>
            )}

            {price !== "" && Number(price) <= 0 && (
                <p>Price must be greater than 0</p>
            )}

            {/* Disable button when invalid */}
            <button
                type="submit"
                disabled={isInvalid}
            >
                Add Medicine
            </button>
        </form>
    );
}

export default AddMedicineForm;