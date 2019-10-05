import React from 'react';

import './Prices.css';

const Prices = () => {
    return (
        <section name="cennik" className="prices">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section-title text-center">Cennik</h2>
                        <div className="header-line"/>
                    </div>
                </div>
                <div className="row table">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-8">Wizyta wstępna:</div>
                            <div className="col-4 price">60,00 zł</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Wizyta domowa miejscowa:</div>
                            <div className="col-4 price">170,00 zł</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Wizyta domowa poza powiatem wałbrzyskim:</div>
                            <div className="col-4 price">220,00 zł</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Poradnictwo indywidualne:</div>
                            <div className="col-4 price">80,00 zł/godz</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Konsultacja indywidualna lub w sprawie osoby uzależnionej:</div>
                            <div className="col-4 price">100,00 zł</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Terapia par i rodzin:</div>
                            <div className="col-4 price">150,00 zł/godz</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-8">Coaching (pierwsza sesja, kolejne do ustalenia indywidualnie):</div>
                            <div className="col-4 price">100,00 zł</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Terapia grupowa (1 warsztat):</div>
                            <div className="col-4 price">40,00 zł</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Szkoła dla rodziców (10 warsztatów płatne w dwóch transzach):</div>
                            <div className="col-4 price">300,00 zł</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Warsztaty weekendowe:</div>
                            <div className="col-4 price">600,00 zł/osoba</div>
                        </div>
                        <div className="row">
                            <div className="col-8">10-dniowe pobyty terapeutyczno-wypoczynkowe:</div>
                            <div className="col-4 price">3500,00 zł/osoba</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Programy dla instytucji i konsulting:</div>
                            <div className="col-4 price">cena do uzgodnienia</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Prices
