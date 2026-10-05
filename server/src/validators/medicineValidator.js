
export const medicineSchema = z.object({
    name: z.string().min(2, "Name at least 2 characters"),

    category: z.string().min(1, "Category required"),

    stock: z.number().int("Stock mus integer").min(0, "Stock not negative"),

    price: z.number().positive("Price positive").max(1000, "Price not above 1000")
});