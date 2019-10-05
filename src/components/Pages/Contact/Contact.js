import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section name="kontakt" className="contact dark text-center">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="dark section-title">Kontakt</h2>
                        <div className="dark header-line"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 contact-data">
                        <h3 className="section-subtitle">Telefon</h3>
                        <i className="fas fa-phone"></i> 511 008 791
                        </div>
                    <div className="col-md-4 contact-data">
                        <h3 className="section-subtitle">Email</h3>
                        <i className="far fa-envelope-open"></i>&nbsp;
                        <a href="mailto:wzalas196@gmail.com">wzalas196@gmail.com</a>
                    </div>
                    <div className="col-md-4 contact-data">
                        <h3 className="section-subtitle">WWW</h3>
                        <i className="fas fa-globe-europe"></i>&nbsp;
                        <a href="http://wieslawzalas.pl">www.wieslawzalas.pl</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
