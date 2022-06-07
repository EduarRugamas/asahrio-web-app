import React from 'react';
import './ComponentHeaderShop.css';


export class ComponentHeaderShop extends React.Component {
    render() {
        return (
            <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
                <div className="container">
                    <div className="page-breadcrumb d-flex align-items-center">
                        <h3 className="breadcrumb-title pe-3">Ashario</h3>
                    </div>
                </div>
            </section>
        );
    }
}

export default ComponentHeaderShop;
