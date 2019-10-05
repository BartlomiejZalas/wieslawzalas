import React from 'react';

import './Achievements.css';

const Achievements = () => {
    return (
        <section name="achievements" className="achievements">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section-title text-center">Aktywność</h2>
                        <div className="header-line" />

                        <h3 className="section-subtitle">Naukowa</h3>
                        <ul>
                            <li>
                                <strong>Superwizja szkolna w zmieniającej się rzeczywistości społecznej</strong> - artykuł opublikowany w czasopiśmie <em>Prace Naukowe Wyższej Szkoły Zarządzania i Przedsiębiorczości z siedzibą w Wałbrzychu</em> (rok 2018, tom 46 (2), strony: 49-66). <br />
                                <a href="http://bazekon.icm.edu.pl/bazekon/element/bwmeta1.element.ekon-element-000171549401" target="blank">Link do artykułu</a>
                            </li>
                        </ul>
                        <h3 className="section-subtitle">Współpraca ze szkołami</h3>
                        <div className="row">

                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/szkola/szkola-1.png')} target="blank">
                                    <img src={require('./imgs/szkola/szkola-1.png')} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/szkola/szkola-2.png')} target="blank">
                                    <img src={require('./imgs/szkola/szkola-2.png')} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/szkola/szkola-3.png')} target="blank">
                                    <img src={require('./imgs/szkola/szkola-3.png')} alt="" />
                                </a>
                            </div>

                        </div>

                        <h3 className="section-subtitle">Współpraca z samorządem</h3>
                        <div className="row">

                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/samorzad/samorzad-1.png')} target="blank">
                                    <img src={require('./imgs/samorzad/samorzad-1.png')} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/samorzad/samorzad-2.png')} target="blank">
                                    <img src={require('./imgs/samorzad/samorzad-2.png')} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/samorzad/samorzad-3.png')} target="blank">
                                    <img src={require('./imgs/samorzad/samorzad-3.png')} alt="" />
                                </a>
                            </div>


                        </div>

                        <h3 className="section-subtitle">Inna</h3>
                        <div className="row">
                            {/* <div className="col col-lg-3 certificates">
                                <a href={require('./imgs/inna/cert1.png')} target="blank">
                                    <img src={require('./imgs/inna/cert1.png')} alt="Certyfikat Crisis Coaching Essentials" />
                                </a>
                            </div>
                            <div className="col col-lg-9 certificates-description">
                                <div>
                                    Certyfikat uczestnictwa w szkoleniu <strong>Crisis Coaching Essentials</strong>.
                                    Szkolenie organizowane było w ramach Akademii Coachingu Kryzysowego.
                                </div>
                            </div> */}

                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/inna/inna-1.png')} target="blank">
                                    <img src={require('./imgs/inna/inna-1.png')} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/inna/inna-2.png')} target="blank">
                                    <img src={require('./imgs/inna/inna-2.png')} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/inna/inna-3.png')} target="blank">
                                    <img src={require('./imgs/inna/inna-3.png')} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/inna/inna-4.png')} target="blank">
                                    <img src={require('./imgs/inna/inna-4.png')} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/inna/inna-5.png')} target="blank">
                                    <img src={require('./imgs/inna/inna-5.png')} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/inna/inna-6.png')} target="blank">
                                    <img src={require('./imgs/inna/inna-6.png')} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-2 certificates">
                                <a href={require('./imgs/inna/inna-7.png')} target="blank">
                                    <img src={require('./imgs/inna/inna-7.png')} alt="" />
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Achievements
