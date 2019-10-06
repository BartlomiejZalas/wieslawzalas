import React from 'react';

import './Achievements.css';
import CollapseBox from '../../UI/CollapseBox/CollapseBox';

const Achievements = () => {
    return (
        <section name="achievements" className="achievements">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section-title text-center">Aktywność</h2>
                        <div className="header-line" />

                        <CollapseBox title="Naukowa">
                            <ul>
                                <li>
                                    <strong>Superwizja szkolna w zmieniającej się rzeczywistości społecznej</strong> - artykuł opublikowany w czasopiśmie <em>Prace Naukowe Wyższej Szkoły Zarządzania i Przedsiębiorczości z siedzibą w Wałbrzychu</em> (rok 2018, tom 46 (2), strony: 49-66). <br />
                                    <a href="http://bazekon.icm.edu.pl/bazekon/element/bwmeta1.element.ekon-element-000171549401" target="blank">Link do artykułu</a>
                                </li>
                            </ul>
                        </CollapseBox>

                        <CollapseBox title="Współpraca ze szkołami">
                            <div className="row">

                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/szkola/szkola-1.png')} target="blank">
                                        <img src={require('./imgs/szkola/small_szkola-1.png')} alt="" />
                                    </a>
                                </div>
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/szkola/szkola-2.png')} target="blank">
                                        <img src={require('./imgs/szkola/small_szkola-2.png')} alt="" />
                                    </a>
                                </div>
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/szkola/szkola-3.png')} target="blank">
                                        <img src={require('./imgs/szkola/small_szkola-3.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </CollapseBox>

                        <CollapseBox title="Współpraca z samorządem">
                            <div className="row">

                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/samorzad/samorzad-1.png')} target="blank">
                                        <img src={require('./imgs/samorzad/small_samorzad-1.png')} alt="" />
                                    </a>
                                </div>
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/samorzad/samorzad-2.png')} target="blank">
                                        <img src={require('./imgs/samorzad/small_samorzad-2.png')} alt="" />
                                    </a>
                                </div>
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/samorzad/samorzad-3.png')} target="blank">
                                        <img src={require('./imgs/samorzad/small_samorzad-3.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </CollapseBox>

                        <CollapseBox title="Inna">
                            <div className="row">
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/inna/inna-7.png')} target="blank">
                                        <img src={require('./imgs/inna/small_inna-7.png')} alt="" />
                                    </a>
                                </div>
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/inna/inna-1.png')} target="blank">
                                        <img src={require('./imgs/inna/small_inna-1.png')} alt="" />
                                    </a>
                                </div>
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/inna/inna-2.png')} target="blank">
                                        <img src={require('./imgs/inna/small_inna-2.png')} alt="" />
                                    </a>
                                </div>
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/inna/inna-3.png')} target="blank">
                                        <img src={require('./imgs/inna/small_inna-3.png')} alt="" />
                                    </a>
                                </div>
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/inna/inna-4.png')} target="blank">
                                        <img src={require('./imgs/inna/small_inna-4.png')} alt="" />
                                    </a>
                                </div>
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/inna/inna-5.png')} target="blank">
                                        <img src={require('./imgs/inna/small_inna-5.png')} alt="" />
                                    </a>
                                </div>
                                <div className="col-sm-2 certificates">
                                    <a href={require('./imgs/inna/inna-6.png')} target="blank">
                                        <img src={require('./imgs/inna/small_inna-6.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </CollapseBox>
                        
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Achievements
