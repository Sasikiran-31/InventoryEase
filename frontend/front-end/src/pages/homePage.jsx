import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/product.js';
import ProductTile from '../components/productTile.jsx';
import { Container, Grid, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const HomePage = () => {
  const { fetchProducts, products, loading, error } = useStore(); // Assuming you might have 'loading' and 'error' states
  const theme = useTheme();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxWidth="xl" sx={{ py: 12 }}>
      <Box display="flex" className="x" flexDirection="column" gap={4} alignItems="center">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
          }}
        >
          Current Products 🚀
        </Typography>

        {loading ? (
          <Typography>Loading products...</Typography>
        ) : error ? (
          <Typography color="error">Error loading products: {error}</Typography>
        ) : Array.isArray(products) && products.length > 0 ? (
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} md={6} lg={4} key={product._id}>
                <ProductTile product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" textAlign="center" fontWeight="bold" color="primary">
            No products found 😢{' '}
            <Link to="/create" style={{ textDecoration: 'none' }}>
              <Typography
                component="span"
                color="primary"
                sx={{ '&:hover': { textDecoration: 'underline' } }}
              >
                Create a product
              </Typography>
            </Link>
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default HomePage;