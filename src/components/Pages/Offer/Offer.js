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
                        Szanowni Państwo moja oferta polega na zaproponowaniu wspólnej pracy w celu polepszenia 
                        swojego życia, życia rodziny, życia firmy lub szkoły. Nasze szczęście zależy od nas, 
                        ale również od tych, którzy z nami wędrują przez ten świat. W społeczeństwie, które 
                        pędzi jak rakieta, gubimy często sens, tracimy z oczu zasady, gubimy swoje cele, nie 
                        potrafimy oprzeć się uzależnieniom. Co jakiś czas musimy zrobić porządek  w naszych 
                        działaniach, na nowo rozpalić zapał, poczuć swoje wnętrze, wzmocnić ducha i rozniecić
                         ogień marzeń. Jeżeli z różnych przyczyn nie potraficie tego zrobić sami i potrzebujecie 
                         pomocy, konsultacji, swoistej superwizji,  zapraszam do współpracy.
                        </p>

                        <p className="lead text-center">
                        Jeżeli odczuwasz niepokój strach, nie potrafisz podjąć decyzji – zadzwoń, przyjdź!<br/>
                        Jeżeli nie radzisz sobie w rodzinie – zadzwoń, przyjdź!<br/>
                        Jeżeli zachowania twoje lub najbliższych są powodem kłótni i nieporozumień – zadzwoń, przyjdź! <br/>
                        Jeżeli odczuwasz w sobie chęć zmiany w sobie, swojej firmie, nie wiesz dokładnie, co jest tego powodem – zadzwoń przyjdź!<br/>
                        Jeżeli twoja kariera stoi w miejscu i nie masz z niej zadowolenia – zadzwoń, przyjdź!<br/>
                        Jeżeli twoja organizacja się rozwija, zmienia  lub ma kłopoty, a ty nie wiesz, co w tej sytuacji zrobić – zadzwoń, przyjdź! <br/>
                        Jeżeli nie doświadczasz żadnego z tych stanów a chcesz się spotkać zapraszam – zadzwoń, przyjdź!<br/>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <Box 
                            title="Co możemy razem zrobić?" 
                            description="Poradnictwo kryzysowe w rodzinie,
                            profilaktyka i terapia uzależnień,
                            coaching rozwojowy,
                            szkoła dla rodziców,
                            poradnictwo całożyciowe,
                            poradnictwo pedagogiczne,
                            superwizja pedagogiczna – dla nauczycieli,
                            szkolenia na zamówienie dla firm. Jeżeli potrzebujesz
                            pomocy, możemy to zrobić wspólnie."
                            icon="fa-question-circle"
                        >
                            <p>
                                Jak wiele potrafi człowiek? Czy mamy jakieś ograniczenia? Co nas ogranicza?
                            </p>
                            <p>
                                W swoim życiu wielokrotnie towarzyszyłem ludziom, którzy z różnych powodów rezygnowali: 
                                jedni z marzeń, inni z normalności, inni z sukcesów, jeszcze inni żyli nie swoim życiem, 
                                brnęli w choroby, żyli w przeszłości lub przyszłości, ćpali, upijali się i upadali. 
                                Jednak większość z nich podnosiła się i od nowa rozpoczynała swoje życie, prostowali 
                                ścieżki, rozpalali w sobie ogień powołania. Czasami potrzebowali w tym pomocy drugiej 
                                osoby. Jeżeli potrzebujesz pomocy, możemy to zrobić wspólnie. 
                            </p>
                            <ul>
                                <li>Poradnictwo kryzysowe w rodzinie</li>
                                <li>Profilaktyka i terapia uzależnień</li>
                                <li>Coaching rozwojowy</li>
                                <li>Szkoła dla rodziców</li>
                                <li>Poradnictwo całożyciowe</li>
                                <li>Poradnictwo pedagogiczne</li>
                                <li>Superwizja pedagogiczna – dla nauczycieli</li>
                                <li>Szkolenia na zamówienie dla firm</li>
                            </ul>
                        </Box>
                    </div>
                    <div className="col-lg-4">
                        <Box 
                            title="Jak pracuję?" 
                            description="Nigdy nie udało mi się nikogo zmienić lecz w trakcie mojego poradnictwa towarzyszyłem wielu ludziom, którzy skutecznie zmieniali swoje życie.
                            Moje doświadczenie pokazuje jednoznacznie, że nie ma jednej najbardziej skutecznej formy pomocy."
                            icon="fa-briefcase"
                        >
                            <p>Nigdy nie udało mi się nikogo zmienić lecz w trakcie mojego poradnictwa towarzyszyłem wielu ludziom, którzy skutecznie zmieniali swoje życie. Moje doświadczenie pokazuje jednoznacznie, że nie ma jednej najbardziej skutecznej formy pomocy. Wszystko zależy od danej osoby i sytuacji, w której się znalazła. Dobór metody pomocy jest określany w trakcie spotkania wstępnego i w procesie kolejnych spotkań, może ulegać modyfikacji w celu uzyskania najbardziej efektywnych wyników. </p>
                            <p>Pierwsze spotkanie, konsultacja, diagnoza potrzeb, kontrakt. </p>
                            <p>Podczas tego spotkania ustalamy czy w danej sytuacji jest potrzebna pomoc. Czy ja potrafię pomóc czy też wymagany jest inny rodzaj pomocy lub specjalista z innej dziedziny. Jeżeli umawiamy się na współprace podpisujemy kontrakt, w którym: omawiamy zakres naszych działań, ustalamy cel do osiągnięcia, wybieramy sposób pracy, formę współpracy, wzajemne zobowiązania, czas współpracy, ewaluację postępów, sposób odstąpienia od kontraktu  i odpłatność. </p>
                            <p>Poradnictwo i inne działania są prowadzone indywidualnie, grupowo oraz w formie wizyt u klienta.</p>
                        </Box>
                    </div>
                    <div className="col-lg-4">
                        <Box 
                            title="Warszty z wypoczynkiem" 
                            description="Pobyt w ośrodku wypoczynkowym, zakwaterowanie, wyżywienie, szkolenia-treningi około 3 godziny dziennie rano lub po kolacji, organizacja czasu wolnego dla grupy szkoleniowej."
                            icon="fa-umbrella-beach"
                        >
                        <p>Prowadząc wiele szkoleń często spotykam się ze stwierdzeniami, że nie ma czasu na wypoczynek, na prace nad sobą, na dbanie o swoje wnętrze nie mówiąc już o pracy nad umiejętnościami komunikacyjnymi. Stąd moja propozycja, aby połączyć wypoczynek z przygodą poznania samego siebie, swojego związku, z radosną pracą nad zrozumieniem swoich bliskich,  nad dialogiem bez ocen i konieczności zwyciężania za wszelka cenę. Są różne zdania  na temat takiego sposobu samorozwoju, nie jest to propozycja dla wszystkich. Lecz jeśli chcesz się wspaniale pobawić, zwiedzić bardzo ciekawe zabytki, zobaczyć przepiękne krajobrazy i zmienić coś w swoim życiu - zapraszam.</p>
                        <p>Forma:<br/> Pobyt w ośrodku wypoczynkowym, zakwaterowanie, wyżywienie, szkolenia-treningi około 3 godziny dziennie rano lub po kolacji, organizacja czasu wolnego dla grupy szkoleniowej.</p>
                        <p>Dodatkowo dla osób towarzyszących całodniowy program wypoczynkowo-rekreacyjny.</p>
                        <p>Weekendy i obozy szkoleniowo wypoczynkowe o tematyce:</p>
                        <ul>
                        <li>Rozumienie poprzez dialog w rodzinie i grupie</li>
                        <li>Profilaktyka i faza ostrzegawcza uzależnień</li>
                        <li>Poznaj siebie i bądź skuteczny - asertywność, atrybucja zdarzeń, nastawienie intuicja</li>
                        <li>Człowiek proaktywny - mój potencjał, moje cele, moja energia</li>
                        <li>Skuteczna realizacja celu -  zaczynaj z wizją końca, wizualizacja, afirmacja</li>
                        <li>Metodologia skutecznego działania - aby rzeczy pierwsze były najważniejsze</li>
                        <li>Psychologia zmiany - etapy zmiany, jak pokonywać impasy, jak motywować</li>
                        <li>Jakim językiem komunikować się z „kosmitą” -  najpierw zrozum-później oceniaj, inteligencja ma wiele twarzy, informacja zwrotna jako narzędzie w komunikacji</li>
                        <li>Wygrywamy razem - teoria gier w codziennym życiu, jak skutecznie się realizować, jak wygrać żeby nie przegrać. </li>
                        <li>Synergia - sposoby zarządzania i ich skutki, wspólne cele, dynamika grupy</li>
                        <li>Jak żyć z takim ideałem jak JA - samokontrola, potrzeba rozwoju, kariera, fenomen każdego człowieka.</li>
                        </ul>
                        <p>Kto może skorzystać:<br />Dla rodzin- terminy podane są poniżej. Zbieramy grupę 12-16 osób biorących udział w treningach (osoby w związku) oraz osoby towarzyszące nie biorące udziału w zasadniczym treningu –szkoleniu, ale wymagające zakwaterowania i zorganizowania czasu wolnego.</p>
                        <p>Temat dla rodzin:</p>
                        <ul>
                        <li>Moje miejsce w rodzinie</li>
                        <li>Dialog w rodzinie</li>
                        <li>Oraz uzgodniony z uczestnikami temat z ww. listy</li>
                        </ul>

                        <p>Termin weekend (zapisy według kolejności zgłoszeń): </p>
                        <ul>
                        <li>Kwiecień 26-28</li>
                        <li>Maj 24-26</li>
                        <li>Czerwiec 28-30</li>
                        <li>Lipiec 26-28</li>
                        <li>Sierpień 23-25</li>
                        <li>Wrzesień 27-29</li>
                        <li>Terminy 10 dniowych pobytów terapeutyczno-wypoczynkowych (zapisy według kolejności zgłoszeń)</li>
                        <li>Kwiecień 4 -14</li>
                        <li>Maj 9-19</li>
                        <li>Czerwiec 13-23</li>
                        <li>Lipiec 11-21</li>
                        <li>Sierpień 1-11</li>
                        <li>Wrzesień 12-22</li>
                        </ul>
                        <p>Dla firm, szkół oraz innych instytucji- schemat jak wyżej – można swobodnie komponować treści szkoleń i warsztatów.</p>



                        </Box>
                    </div>
                    <div className="col-lg-4">
                        <Box 
                            title="Dla firm i instytucji" 
                            description="Oferujemy Państwu konsulting, warsztaty stacjonarne oraz kompleksowe wyjazdy szkoleniowe, połączone z wypoczynkiem, 
                            badania i analizy w oparciu o obserwacje i wywiady, tworzenie modeli komunikacji wewnętrznej i zewnętrznej"
                            icon="fa-user-tie"
                        >
                            <p>Co ważniejsze firma czy ludzie? Jak zoptymalizować działania, aby szczęśliwy pracownik z radością szedł do pracy żegnając  uśmiechniętą rodziną? Jak oceniać innych i pozostać dalej ich przyjacielem? Powyższe pytania pokazują jak skomplikowana i trudna jest rola szefa w firmie. Firma to żywy organizm i trzeba o nią zadbać. Powinniśmy śmiało i bez wahania korzystać z misji firmy, a nie tylko ją recytować. Powinniśmy jako podmioty firmy wspólnie ustalać: kim jest pracownik, kim powinien być przełożony, jak wypracować skuteczne formy nagradzania, komunikowania. W pracy nad takim obrazem firmy, często potrzeby jest podmiot zewnętrzny. Moja firma proponuje Państwu pomoc w skutecznym rozwoju.</p>
                            <p>Forma:</p>
                            <ul>
                            <li>>stacjonarna lub kompleksowe wyjazdy szkoleniowe, połączone z wypoczynkiem</li>
                            <li>>badania i analizy w oparciu o obserwacje i wywiady</li>
                            <li>>tworzenie modeli komunikacji wewnętrznej i zewnętrznej</li>
                            </ul>
                            <p>Rodzaj usług:</p>
                            <ul>
                            <li>Wdrażanie i ewaluacja wypracowanych modeli komunikacji i zarządzania</li>
                            <li>Tworzenie, ewaluacja procesów oceny </li>
                            <li>Consulting procesów zarządczych i komunikacji</li>
                            <li>Szkolenia/treningi według potrzeb opartych o wywiad i/lub diagnozę w zakresie umiejętności „miękkich”.</li>
                            </ul>
                            <p>Treningi i szkolenia</p>
                            <ul>
                            <li>Krok do lepszego zarządzania sobą i innymi: wg Stepeana Coveya „7 nawyków skutecznego działania”, Martina Seligmana „Optymizmu można się nauczyć”, Hwarda Gardnera „Inteligencje wielorakie”.</li>
                            <li>Poznaj siebie i bądź skuteczny - asertywność, atrybucja zdarzeń, nastawienie intuicja.</li>
                            <li>Człowiek proaktywny - mój potencjał, moje cele, moja energia.</li>
                            <li>Skuteczna realizacja celu -  zaczynaj z wizją końca, wizualizacja, afirmacja.</li>
                            <li>Metodologia skutecznego działania - aby rzeczy pierwsze były najważniejsze.</li>
                            <li>Psychologia zmiany zespołu - etapy zmiany, jak pokonywać impasy, jak motywować.</li>
                            <li>Jakim językiem komunikować się z „kosmitą” -  najpierw zrozum-później oceniaj, inteligencja ma wiele twarzy, informacja zwrotna jako narzędzie w komunikacji.</li>
                            <li>Wygrywamy razem - teoria gier w codziennym życiu, jak skutecznie sprzedawać, jak wygrać żeby nie przegrać. </li>
                            <li>Synergia - sposoby zarządzania i ich skutki, wspólne cele, dynamika grupy.</li>
                            <li>Jak żyć z takim ideałem jak JA - samokontrola, potrzeba rozwoju, kariera, fenomen każdego człowieka.</li>
                            <li>Rozwój osobisty i przywództwo- misja życiowa, droga do sukcesu w życiu biznesowym i osobistym i społecznym.</li>
                            </ul>
                            <p>Realizacja</p>
                            <p>Na każdym etapie indywidualna diagnoza umiejętności uczestników w danym temacie, bardzo wiele ćwiczeń, komentarzy, scenek, dyskusji, burz mózgów i mini wykładów.</p>
                            <p>Po szkoleniu każdy z uczestników zwiększy swój poziom elastyczności w stosunku do innych i do siebie, zaangażowania w życie firmy i realizacji jej celów, umiejętności współpracy,  skutecznego  posługiwanie się narzędziami stosowanymi  w obszarze pracy zawodowej, lepszego rozumienia potrzeb innych i swoich.</p>
                        </Box>
                    </div>
                    <div className="col-lg-4">
                        <Box 
                            title="Szkoła dla rodziców" 
                            description="
                            Warsztaty-treningi grupowe dla rodziców. Grupy 10 – 16 osób. Czas trwania 10 tygodni.  
                            Trening obejmuje 10 spotkań po trzy godziny. Możliwość rozszerzenia o kolejne tematy w 
                            ramach kolejnych spotkań, stacjonarnych, warsztatów wyjazdowych, wycieczek z suplementem 
                            superwizyjnym."
                            icon="fa-child"
                        >
                            <p>Jesteś rodzicem, to coś cudownego!  Czy ktoś kiedyś uczył Cię na czym to polega? Jak znaleźć swoje miejsce w rodzinie? Jak skutecznie porozumiewać się z dzieckiem? Jak budować wspólne przedsięwzięcia, w których obie strony wygrywają? Na te i wiele innych pytań poszukamy odpowiedzi w ramach Szkoły dla rodziców. Praca i zabawa w ramach tych zajęć powinna być w ramach naszej edukacji szkolnej, jednak nie ma dotychczas lekcji dotyczącej budowania  związków, rodziny i wychowywania dzieci. Jeżeli chcesz podjąć ten radosny wysiłek zapraszam.</p>
                            <p>Forma:</p>
                            <p>Warsztaty-treningi grupowe dla rodziców. Grupy 10 – 16 osób. Czas trwania 10 tygodni.  Trening obejmuje 10 spotkań po trzy godziny. Możliwość rozszerzenia o kolejne tematy w ramach kolejnych spotkań, stacjonarnych, warsztatów wyjazdowych, wycieczek z suplementem superwizyjnym.</p>
                            <p>Tematyka:</p>
                            <ul>
                            <li>Moje wzory?</li>
                            <li>Kim jestem jako ............?</li>
                            <li>Jak docierać do siebie?</li>
                            <li>Ćwiczenia perspektywy.</li>
                            <li>Asertywność w rodzinie.</li>
                            <li>Analiza indywidualnych przypadków.</li>
                            <li>Budowanie relacji.</li>
                            <li>Zmiany rozwojowe.</li>
                            <li>Moje czy jego życiowe sukcesy?</li>
                            <li>Plan na dalszą drogę.</li>
                            </ul>
                            <p>Tematy dodatkowe do wyboru:</p>
                            <ul>
                            <li>Konflikty</li>
                            <li>Uzależnienia</li>
                            <li>Przemoc</li>
                            <li>Zmiana</li>
                            </ul>
                        </Box>
                    </div>
                    <div className="col-lg-4">
                        <Box 
                            title="Dla szkół i przedszkoli" 
                            description="Nasza oferta opiera się na prowadzeniu aktywnych warsztatów, treningów 
                            i superwizji. Pracujemy z gronem pedagogicznym, rodzicami i dziećmi. Profilaktyka, 
                            nowoczesne sposoby nauczania i wszystkie inne potrzeby szkoleniowe, które ustalimy."
                            icon="fa-school"
                        >
                            <p>"Nasza szkoła jest cudowna", "nasza szkoła jest najlepsza", "nasza szkoła to gniazdo os", "nie lubię naszej szkoły". Takie i inne stwierdzenia powodują,  że bardzo często stajemy się bierną organizacją. Po co coś zmieniać, jeśli wszystko doskonale funkcjonuje, albo wręcz przeciwnie - po co zmieniać, jeśli nic w tej szkole się nie udaje. Wszystko to rozumiem, jednak jestem głęboko przekonany, że wspólna praca oparta na zrozumieniu, bez oceniania i narzekania, pozwoli na lepsze zrozumienie stosunków  pomiędzy nauczycielem, rodzicem, dzieckiem i innymi podmiotami życia szkolnego. Zapraszam do współpracy.</p>
                            <p>Forma:</p>
                            <p>Warsztaty: stacjonarne lub wyjazdowe (wycieczki, pobyty weekendowe, zielone szkoły)</p>
                            <p>Tematyka:</p>
                            <ul>
                            <li>Treningi i szkolenia dla kadry pedagogicznej.</li>
                            <li>Superwizja grupowa i indywidualna</li>
                            <li>Tworzenie i wdrażanie nowoczesnych form kształcenia (np.; edukacja deliberatywna, ocena kształtująca, nauczyciel coach, nauczyciel badacz, itp.) </li>
                            <li>Programy profilaktyczne dla dzieci i młodzieży.</li>
                            <li>Inne na zamówienie.</li>
                            </ul>
                        </Box>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer
