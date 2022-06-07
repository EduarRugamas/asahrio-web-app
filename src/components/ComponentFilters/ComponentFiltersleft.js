import React from 'react';
import './ComponentFiltersleft.css';
import  algoliaSearch from 'algoliasearch/lite';
import { InstantSearch, connectMenu } from 'react-instantsearch-dom';

const searchClient = algoliaSearch('VFM4X0N23A', 'd16d4804f78c38777368ea8ced79e56e');

const Menu_test = ({items, createURL}) => (
    <ul className='list-unstyled mb-0 categories-list'>
        {
            items.map(item => (
                <li key={item.value}>
                    <a href={createURL(item.value)}>
                        {item.label}
                        <span className="float-end badge rounded-pill bg-primary">{item.count}</span>
                    </a>

                </li>
            ))
        }
    </ul>
);

const CustomMenu = connectMenu(Menu_test);

export class ComponentFiltersleft extends React.Component {

    render() {
        return (
            <InstantSearch searchClient={searchClient} indexName="menu-products-demo" >
                {/* inicio de filtros left */}
                <div className="align-items-center d-flex d-xl-none">
                    <h6 className="text-uppercase mb-0">Filter</h6>
                    <div className="btn-mobile-filter-close btn-close ms-auto cursor-pointer"/>
                </div>

                <hr className="d-flex d-xl-none"/>

                <div className="product-categories">
                    <h6 className="text-uppercase mb-3">Categories</h6>
                   <CustomMenu attribute="category" />
                </div>

                <hr />

                <div className="price-range">
                    <h6 className="text-uppercase">THC potency</h6>
                    <div className="my-4" id="container-slider-thc"/>
                </div>
                <hr/>

                <div className="price-range">
                    <h6 className="text-uppercase">CBD potency</h6>
                    <div className="my-4" id="container-slider-cbd"/>
                </div>

                <hr/>

                <div className="price-range">
                    <h6 className="text-uppercase mb-3">Price</h6>
                    <div className="my-4" id="container-price"/>
                </div>

                <hr/>

                <div className="product-brands">
                    <h6 className="text-uppercase mb-3">Brands</h6>
                    <ul className="list-unstyled mb-0 categories-list" id="container-brands"/>
                </div>

                <hr />
                {/* final de filtros left */}{/* inicio de filtros left */}
            </InstantSearch>
        );
    };
}

export default ComponentFiltersleft;
