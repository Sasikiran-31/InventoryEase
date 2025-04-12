import { useEffect } from "react";
import { useStore } from "../store/product.js";
import { Container, Grid, Stack, Typography } from "@mui/material";


const homePage = () => {
    const { fetchproducts, products } = useStore();

    useEffect( () => {
        fetchproducts();
    }, [fetchproducts]);
    console.log("products", products)



    return (
        <Container maxWidth='xl'>
            <Stack spacing={8}>
                    <Typography
                        fontSize={"30"}
                        fontWeight={"bold"}
                        bgcolor={"Menu"}
                        textAlign={"center"}
                    >
                        ~Current Products in the Inventory~
                    </Typography>
                    <Grid
                        columns={{
                            base: 1,
                            md: 2,
                            lg: 3,
                        }}

                        spacing={10}
                        width={"full"}
                    >
                        {products.map((product) => (
                            <ProductCard key {...product._id} product = {product}/>
                        ))}
                    </Grid>
            </Stack>

        </Container>
        
    );
}

export default homePage;