const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {
    async index(req, res) {

        //Desestruturação de page - plugin pagination do mongoose.
        //Já com valor padrão.
        const { page = 1 } = req.query;

        const products = await Product.paginate({/*local para wheres*/ }, { page, limit: 10 });
        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res) {

        //Quero que o mongoose retorne o produto atualizado por isso new true.
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);

    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};