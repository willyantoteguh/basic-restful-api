import express from "express";
import { getProducts, 
    saveProducts , 
    updateProducts, 
    getProductsById,
    deleteProducts
} from "../controllers/productController.js";

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductsById);
router.post('/', saveProducts);
router.patch('/:id', updateProducts);
router.delete('/:id', deleteProducts);

export default router;