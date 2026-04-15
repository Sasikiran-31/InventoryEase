import express from 'express';
import { createProduct, getProducts, deleteProduct, updateProduct, homeAPI} from '../Controllers/product.controller.js';


const router = express.Router();


router.get('/', getProducts);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);
router.get('/home', homeAPI);

export default router;