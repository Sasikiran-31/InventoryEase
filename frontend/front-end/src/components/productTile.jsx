import { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  TextField,
  Button,
  Modal,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { useStore } from '../store/product.js';
import { useTheme } from '@mui/material/styles';
import { useSnackbar } from 'notistack';

// The productTile
const ProductTile = ({product}) => {
    const [ updatedProduct, setupdateProduct ] = useState(product);
    const [ open, setOpen ] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { deleteProducts, updateProduct } = useStore();

    const handleDelete = async(pid) => {
        const { success, message } = await deleteProducts(pid);
        if(!success){
            enqueueSnackbar(message, { variant: 'error' });
        }
        else {
            enqueueSnackbar(message, { variant: 'success' })
        }
    };

    const handleUpdate = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        handleClose();

        if(!success){
            enqueueSnackbar(message, { variant: 'error' });
        } else {
            enqueueSnackbar('Product updated successfully', { variant: 'success' });
        }
    };

    return (
        <Card
          sx={{
            maxWidth: 140,
            maxHeight: 260,
            boxShadow: theme.shadows[2],
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: theme.shadows[8],
            },
          }}
        >
          <CardMedia
            component="img"
            height="100" // Adjust as needed
            image={product.image}
            alt={product.name}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="h6" component="div" mb={1}>
              {product.name}
            </Typography>
            <Typography variant="h5" fontWeight="bold" color={theme.palette.text.secondary} mb={2}>
              ${product.price}
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton color="primary" onClick={handleOpen}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(product._id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardContent>
    
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400, // Adjust as needed
                bgcolor: 'background.paper',
                boxShadow: theme.shadows[5],
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" component="h2" mb={2}>
                Update Product
              </Typography>
              <Box display="flex" flexDirection="column" gap={2} mb={2}>
                <TextField
                  label="Product Name"
                  name="name"
                  value={updatedProduct.name}
                  onChange={(e) => setupdateProduct({ ...updatedProduct, name: e.target.value })}
                  fullWidth
                />
                <TextField
                  label="Price"
                  name="price"
                  type="number"
                  value={updatedProduct.price}
                  onChange={(e) => setupdateProduct({ ...updatedProduct, price: e.target.value })}
                  fullWidth
                />
                <TextField
                  label="Image URL"
                  name="image"
                  value={updatedProduct.image}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                  fullWidth
                />
              </Box>
              <Box display="flex" justifyContent="flex-end" gap={2}>
                <Button color="primary" onClick={() => handleUpdate(product._id, updatedProduct)}>
                  Update
                </Button>
                <Button color="secondary" onClick={handleClose}>
                  Cancel
                </Button>
              </Box>
            </Box>
          </Modal>
        </Card>
      );
}

export default ProductTile;