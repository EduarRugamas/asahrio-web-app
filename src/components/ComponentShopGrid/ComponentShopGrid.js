import React from "react";
import {} from 'react-router-dom';
import './ComponentShopGrid.css';
import ComponentHeaderShop from "../ComponentHeaderShop/ComponentHeaderShop";
import ComponentFiltersleft from '../ComponentFilters/ComponentFiltersleft';

export class ComponentShopGrid extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="page-wrapper">
                    <div className="page-content">

                        <ComponentHeaderShop/>

                        <section className="py-4">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 col-xl-3">
                                        <div className="btn-mobile-filter d-xl-none"><i className="bx bx-slider-alt"/></div>
                                        <div className="filter-sidebar d-none d-xl-flex">
                                            <div className="card rounded-0 w-100">
                                                <div className="card-body">
                                                    {/* inicio de filtros left */}
                                                    <ComponentFiltersleft />
                                                    {/* final de filtros left */}{/* inicio de filtros left */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* panel de la derecha componentes hits y demas */}
                                    <div className="col-12 col-xl-9">
                                        <div className="product-wrapper">
                                            <div className="col col-md order-4 order-md-2 mb-4">
                                                <div id="searchBox"/>
                                                <div id="container-sortby-A-Z"/>
                                            </div>

                                            <div className="product-grid">
                                                <div className="container-card-views" id="container-hits"/>
                                            </div>
                                            <div className="container-card-general" id="container-hits-2"/>
                                            <hr />
                                                <div id="pagination-container"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentShopGrid;
