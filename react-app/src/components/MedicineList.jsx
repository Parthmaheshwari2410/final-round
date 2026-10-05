import { useEffect, useState } from "react";

import MedicineCard from "./MedicineCard";
import AddMedicineForm from "./AddMedicineForm";

function MedicineList({ items }) {

    // State


    const [medicines, setMedicines] = useState(items);

    const [search, setSearch] = useState("");



    //  Search filterin

    const filteredMedicines = medicines.filter((medicine) =>
        medicine.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );


    // 
    // A6 — useEffect
    // Update title based on filtered count

    useEffect(() => {
        document.title = `Pharmacy (${filteredMedicines.length})`;
    }, [filteredMedicines.length]);



    // A6 — Add medicine

    const handleAddMedicine = (newMedicine) => {
        setMedicines((currentMedicines) => [
        ]);
    };


    return (
        <div>
            <h1>Pharmacy</h1>

            {/* A6 — Controlled search input */}
            <input
                type="text"
                placeholder="Search medicine..."
                value={search}
                onChange={(event) =>
                    setSearch(event.target.value)
                }
            />

            <p>
                Showing {filteredMedicines.length} medicine(s)
            </p>


            {/* A6 — No result message */}
            {filteredMedicines.length === 0 && (
                <p>No medicines found</p>
            )}


            {/* A6 — Render medicine list */}
            {filteredMedicines.map((medicine) => (
                <MedicineCard
                    key={medicine.id}
                    item={medicine}
                />
            ))}


            {/* A6 — Add medicine form */}
            <AddMedicineForm
                onAdd={handleAddMedicine}
            />
        </div>
    );
}

export default MedicineList;