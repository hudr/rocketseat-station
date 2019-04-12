



import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';


export default class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    //Ciclos de vida
    //Assim que o componente for mostrado em tela.
    //executar ação logo quando for montado em tela.
    componentDidMount() {

        this.loadProducts();

    }

    //Precisa usar arrow functions para conversar
    //com o this e acessar o valor do escopo fora da função.
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render() {
        //desestruturação para reduzir código.
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page == productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }
}