import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section name="kontakt" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section-title text-center dark">Kontakt</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Wyślij wiadomość</h3>
                        <div className="contact-form">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Imię i Nazwisko" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="3" placeholder="Wiadomość" />
                            </div>
                            <button className="btn btn-warning">Wyślij</button>
                        </div>
                    </div>
                    <div className="col-md-6 contact-data">
                        <h3>Skontaktuj się ze mną</h3>
                        <h4>Telefon</h4>
                        <i className="fas fa-phone"></i> 511 008 791
                        <hr />
                        <h4>Email</h4>
                        <i className="far fa-envelope-open"></i> wzalas@interia.pl
                        <hr />
                        <h4>Adres</h4>
                        <i className="fas fa-map-marker-alt"></i> ul. Ulica 42/6, 58-300 Wałbrzych
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
