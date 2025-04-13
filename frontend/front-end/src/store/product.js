import { create } from "zustand";

export const useStore = create((set) => ({
    products: [],
    loading: false,
    error: null,
    setProducts: (products) => set({ products }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),

    //Logic for adding the product req. to the backend
    createProducts: async (newProduct) => {
        set({ loading: true, error: null });
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            set({ loading: false });
            return { success: false, message: "Please fill all the provided fields!" };
        }
        try {
            const result = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });
            const data = await result.json();
            set((state) => ({ products: [...state.products, data.data], loading: false }));
            return { success: true, message: "Product created successfully!!" };
        } catch (err) {
            set({ error: err.message || "Failed to create product", loading: false });
            return { success: false, message: err.message || "Failed to create product" };
        }
    },

    //Logic for fetching req. from backend
    fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
            const result = await fetch("/api/products");
            const data = await result.json();
            set({ products: data.data, loading: false });
        } catch (err) {
            set({ error: err.message || "Failed to fetch products", loading: false });
        }
    },

    //Logic for deleting the products in backend
    deleteProducts: async (pid) => {
        set({ loading: true, error: null });
        try {
            const result = await fetch(`/api/products/${pid}`, {
                method: "DELETE",
            });
            const data = await result.json();
            if (!data.success) {
                set({ loading: false });
                return { success: false, message: data.message };
            }

            set((state) => ({ products: state.products.filter((product) => product._id !== pid), loading: false }));
            return { success: true, message: data.message };
        } catch (err) {
            set({ error: err.message || "Failed to delete product", loading: false });
            return { success: false, message: err.message || "Failed to delete product" };
        }
    },

    //Logic for updating the products
    updateProduct: async (pid, updatedProduct) => {
        set({ loading: true, error: null });
        try {
            const result = await fetch(`/api/products/${pid}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });

            const data = await result.json();
            if (!data.success) {
                set({ loading: false });
                return { success: false, message: data.message };
            }

            set((state) => ({
                products: state.products.map((product) => (product._id === pid ? data.data : product)),
                loading: false,
            }));

            return { success: true, messgage: data.message };
        } catch (err) {
            set({ error: err.message || "Failed to update product", loading: false });
            return { success: false, message: err.message || "Failed to update product" };
        }
    },
}));