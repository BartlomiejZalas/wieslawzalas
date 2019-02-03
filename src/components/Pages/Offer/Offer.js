import React from 'react';

import './Offer.css';
import Box from './Box/Box';

const Offer = () => {
    return (
        <section name="oferta" className="offer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section-title text-center">Oferta</h2>
                        <p className="lead text-center">
                            Jeżeli odczuwasz niepokój strach, nie potrafisz podjąć decyzji – zadzwoń, przyjdź!<br />
                            Jeżeli nie radzisz sobie w rodzinie – zadzwoń, przyjdź!<br />
                            Jeżeli zachowania twoje lub najbliższych są powodem kłótni i nieporozumień – zadzwoń, przyjdź!<br />
                            Jeżeli odczuwasz w sobie chęć zmiany, nie wiesz dokładnie, co jest tego powodem – zadzwoń przyjdź!<br />
                            Jeżeli twoja kariera stoi w miejscu i nie jesteś z niej zadowolony – zadzwoń, przyjdź!<br />
                            Jeżeli nie doświadczasz żadnego z tych stanów, a chcesz się spotkać  - zapraszam.<br />
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <Box 
                            title="Co możemy razem zrobić?" 
                            description="Warsztaty-treningi grupowe dla rodziców. Grupy 10 – 16 osób. Czas trwania 
                            10 tygodni.  Trening obejmuje 10 spotkań po trzy godziny. Możliwość rozszerzenia o 
                            kolejne tematy w ramach kolejnych spotkań, stacjonarnych, warsztatów wyjazdowych, 
                            wycieczek z suplementem superwizyjnym."
                            icon="fa-question-circle"
                        />
                    </div>
                    <div className="col-lg-4">
                        <Box 
                            title="Jak pracuję?" 
                            description="Nigdy nie udało mi się nikogo zmienić lecz w trakcie mojego poradnictwa towarzyszyłem wielu ludziom, którzy skutecznie zmieniali swoje życie.
                            Moje doświadczenie pokazuje jednoznacznie, że nie ma jednej najbardziej skutecznej formy pomocy."
                            icon="fa-briefcase"
                        />
                    </div>
                    <div className="col-lg-4">
                        <Box 
                            title="Warszty z wypoczynkiem" 
                            description="Pobyt w ośrodku wypoczynkowym, zakwaterowanie, wyżywienie, szkolenia-treningi około 3 godziny dziennie rano lub po kolacji, organizacja czasu wolnego dla grupy szkoleniowej."
                            icon="fa-umbrella-beach"
                        />
                    </div>
                    <div className="col-lg-4">
                        <Box 
                            title="Dla firm i instytucji" 
                            description="Stacjonarna oraz kompleksowe wyjazdy szkoleniowe, połączone z wypoczynkiem, 
                            badania i analizy w oparciu o obserwacje i wywiady, tworzenie modeli komunikacji wewnętrznej i zewnętrznej"
                            icon="fa-user-tie"
                        />
                    </div>
                    <div className="col-lg-4">
                        <Box 
                            title="Szkoła dla rodziców" 
                            description="Warsztaty-treningi grupowe dla rodziców. Grupy 10 – 16 osób. Czas trwania 10 tygodni.  Trening obejmuje 10 spotkań po trzy godziny. Możliwość rozszerzenia o kolejne tematy w ramach kolejnych spotkań, stacjonarnych, warsztatów wyjazdowych, wycieczek z suplementem superwizyjnym."
                            icon="fa-child"
                        />
                    </div>
                    <div className="col-lg-4">
                        <Box 
                            title="Dla szkół i przedszkoli" 
                            description="Stacjonarne lub wyjazdowe (wycieczki, pobyty weekendowe, zielone szkoły)"
                            icon="fa-school"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer
