import { create } from "zustand";

export const useStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    
    //Logic for adding the product req. to the backend
    createProducts: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image) {
                return { success : false, message: "Please fill all the provided fields!"};

        }
        const result = await fetch("/api/products", {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),

        });
        const data = await result.json();
        set((state) => ({ products: [...state.products, data.data]}));
        return { success: true, message: "Product created successfully!!"};
    },

    //Logic for fetching req. from backend
    fetchProducts: async () => {
        const result = await fetch("/api/products");
        const data = result.json();
        set({ products: data.data});
    },

    //Logic for deleting the products in backend
    deleteProducts: async(pid) => {
        const result = await fetch(`/api/products/${pid}`,{
            method: "DELETE",
        });
        const data = await result.json();
        if(!data.success) return { success: false, message: data.message};
        
        set((state) => ({ products: state.products.filter((product) => product._id== pid) }));
        return {success: true, message: data.message};
    },

    //Logic for updating the products
    updateProduct: async (pid, updatedProduct) => {
        const result = await fetch(`/api/products/${pid}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),

        });

        const data = await result.json();
        if(!data.success) return {success: false, message: data.message};

        set((state) => ({
                products: state.products.map((product) => (product._id == pid ? data.data : product)),
        }));

        return { success: true, messgage: data.message};
    },

}));