import React from 'react';

import './Achievements.css';

const Achievements = () => {
    return (
        <section name="achievements" className="achievements">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section-title text-center">Osiągnięcia</h2>
                        <div className="header-line"/>

                        <h3 className="section-subtitle">Artykuły</h3>
                        <ul>
                            <li>
                                <strong>Superwizja szkolna w zmieniającej się rzeczywistości społecznej</strong> - artykuł opublikowany w czasopiśmie <em>Prace Naukowe Wyższej Szkoły Zarządzania i Przedsiębiorczości z siedzibą w Wałbrzychu</em> (rok 2018, tom 46 (2), strony: 49-66). <br />
                                <a href="http://bazekon.icm.edu.pl/bazekon/element/bwmeta1.element.ekon-element-000171549401" target="blank">Link do artykułu</a>
                            </li>
                        </ul>
                        <h3 className="section-subtitle">Certyfikaty</h3>
                        <div className="row">
                            <div className="col col-lg-3 certificates">
                                <a href={require('./cert1.png')} target="blank">
                                    <img src={require('./cert1.png')} alt="Certyfikat Crisis Coaching Essentials" />
                                </a>
                            </div>
                            <div className="col col-lg-9 certificates-description">
                                <div>
                                    Certyfikat uczestnictwa w szkoleniu <strong>Crisis Coaching Essentials</strong>. 
                                    Szkolenie organizowane było w ramach Akademii Coachingu Kryzysowego.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
