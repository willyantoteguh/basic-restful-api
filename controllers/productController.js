import Product from "../src/models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const getProductsById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const saveProducts = async (req, res) => {
    const productBody = new Product(req.body);
    try {
        const product = await productBody.save();
        res.status(201).json(product);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

}

export const updateProducts = async (req, res) => {
    const checkId = await Product.findById(req.params.id);
    if (!checkId) return res.status(404).json({ message: "Data Not found here" });

    try {
        const updatedProduct = await Product.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

}

export const deleteProducts = async (req, res) => {
    const checkId = await Product.findById(req.params.id);
    if (!checkId) return res.status(404).json({ message: "Data Not found here" });

    try {
        const deletedProduct = await Product.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedProduct);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

}