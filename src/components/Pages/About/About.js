import React from 'react'
import cover from './cover.jpg';

import './About.css';

export default function About() {
    return (
        <section name="cover">
            <div className="container-fluid">
                <div className="row row-cover">
                    <div className="col-sm-6 cover" style={{ backgroundImage: 'url(' + cover + ')' }}>
                        &nbsp;
                    </div>
                    <div className="col-sm-6 cover-text p-4">
                        <h2 className="py-3 section-title dark">O Mnie</h2>
                        <div className="dark header-line" />
                        <p className="py-1">
                            Nazywam się Wiesław Zalas - zawodowo pedagog, coach, doradca
                            społeczny i zawodowy.
                        </p>
                        <p className="py-1">
                            Trudno pisać o sobie i nie wyjść na „bufona”. Posłużę się więc
                            małym fortelem i przedstawię wam mojego najlepszego przyjaciela -
                            Wiesława.
                        </p>
                        <p className="py-1">
                            Jest zawsze ze mną, ciepły, wyrozumiały, pogodny, dowcipny.
                            Czasami się spieramy, bo życie ciągle podsuwa nam nowe,
                            niewyobrażalne sytuacje, a nie ma na nie gotowych recept.
                            Kiedy pomaga innym zazwyczaj dziękują mu i są wdzięczni.
                            Cieszy się wtedy i jest z siebie dumny. Posiada wielkie
                            doświadczenie w pomaganiu. Ukończył wiele szkół, ale przede
                            wszystkim ma rodzaj wrodzonej intuicji, która pozwala mu
                            zrozumieć innych. Szanuje ludzi, kocha ich, nie zmusza do
                            niczego lecz słucha i zachęca do zmiany. Taki sobie doradca,
                            trener (coach) i szkoleniowiec.                        </p>
                        <p className="py-1">
                            Doczytałeś do tego momentu i czujesz w sobie nadzieję, że
                            chciałbyś z nim coś poprawić w Swoim życiu? Może w życiu
                            drogiej Ci osoby? Polecam go gorąco ja - Wiesław Zalas.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}
