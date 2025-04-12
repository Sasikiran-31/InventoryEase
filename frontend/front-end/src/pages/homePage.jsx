import { useEffect } from "react";
import { useProduct } from "../store/product";


const homePage = () => {
    const { fetchproducts, products } = useProduct();

    useEffect( () => {
        fetchproducts();
    }, [fetchproducts]);
    console.log("products", products)

    

    return (
        <div>Homepage</div>

    );
}

export default homePage;