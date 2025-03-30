import { create } from "zustand";

export const useProduct = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }), // Fixed typo

    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill all fields." };
        }

        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to create product.");
            }

            set((state) => ({ products: [...state.products, data.data] }));
            return { success: true, message: "Created Successfully" };
        } catch (error) {
            console.error("Error creating product:", error);
            return { success: false, message: error.message || "Something went wrong" };
        }
    },
}));
