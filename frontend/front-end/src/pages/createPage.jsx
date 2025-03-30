import { Container, Stack, Typography, TextField, Box, Button } from "@mui/material";
import { useState } from "react";

import { useProduct } from "../store/product.js";

const createPage = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    const { createProduct } = useProduct();
    const handleProduct = async () => {
        const { success , message } = await createProduct(product);
        console.log('success:', success)
        console.log('message:', message)
        setProduct({name: "", price: "", image: ""});
    };

    return (
        <Container maxWidth="sm">
            <Stack spacing={3}
            >
                
                <Typography
                    variant="h3"
                    size="2rem"
                    textAlign="center"
                    
                    mb={8}                    
                >
                    Create a new product
                </Typography>

                <Box w="full" p={6} rounded="lg" shadow="md">
                    <Stack spacing={4}
                    >
                        <TextField
                            id="product-name"
                            label="Product Name"
                            variant="outlined"
                            value={product.name}
                            onChange={(event) => setProduct({ ...product, name: event.target.value })}
                        />
                        <TextField
                            id="price"
                            label="Product Price"
                            type="number"
                            variant="outlined"
                            value={product.price}
                            onChange={(event) => setProduct({ ...product, price: event.target.value })}
                        />

                        <TextField
                            id="product-image"
                            label="Product image"
                            variant="outlined"
                            value={product.image}
                            onChange={(event) => setProduct({ ...product, image: event.target.value })}
                        />
                        <Button color="success" variant="contained" width="full" onClick={handleProduct} w="full">
                            Add Product
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};

export default createPage;