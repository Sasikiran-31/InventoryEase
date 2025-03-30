import { Container, Stack, Typography, TextField, Box, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";

import { useProduct } from "../store/product.js";

const CreatePage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProduct();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success"); // or "error"

  const handleProduct = async () => {
    const { success, message } = await createProduct(product);
    setAlertMessage(message);
    setAlertSeverity(success ? "success" : "error");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm">
      <Stack spacing={3}>
        <Typography variant="h3" textAlign="center" mb={8}>
          Create a new product
        </Typography>

        <Box p={6} borderRadius="lg" boxShadow="md">
          <Stack spacing={4}>
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
            <Button color="error" variant="contained" fullWidth onClick={handleProduct}>
              Add Product
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={alertSeverity} variant = "filled" sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CreatePage;