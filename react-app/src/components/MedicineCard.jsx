function MedicineCard({ item }) {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Category:{item.category}</p>
            <p>Stock:{item.stock}</p>
            {/* A6 — Out of stock badge */}
            {item.stock === 0 && (
                <span>Out of stock</span>
            )}
        </div>
    );
}

export default MedicineCard;