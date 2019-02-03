import React from 'react';

import './Prices.css';

const Prices = () => {
    return (
        <section name="cennik" className="prices">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section-title text-center">Cennik</h2>
                        <p className="lead text-center">Zapoznaj się z cennikiem</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Usługa</th>
                                    <th>Cena</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lorem ispum dolor sit amet</td>
                                    <td>42,99zł</td>
                                </tr>
                                <tr>
                                    <td>Lorem ispum dolor sit amet</td>
                                    <td>42,99zł</td>
                                </tr>
                                <tr>
                                    <td>Lorem ispum dolor sit amet</td>
                                    <td>42,99zł</td>
                                </tr>
                                <tr>
                                    <td>Lorem ispum dolor sit amet</td>
                                    <td>42,99zł</td>
                                </tr>
                                <tr>
                                    <td>Lorem ispum dolor sit amet</td>
                                    <td>42,99zł</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prices
