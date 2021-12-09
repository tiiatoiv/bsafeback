//import GameStatsStyle from './gamestats.css';
import "./styles/material.css";
import { FaSearch, FaBookmark, FaBook } from "react-icons/fa";
import { GrFormNext, GrFormDown } from "react-icons/gr";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { fireEvent } from "@testing-library/dom";
import sign1 from "./images/image002.png";
import sign2 from "./images/image003.png";
import sign3 from "./images/image004.png";
import sign4 from "./images/image005.png";
import sign5 from "./images/image006.png";
import sign6 from "./images/image007.png";
import sign7 from "./images/image008.png";
import sign8 from "./images/image009.png";
import sign9 from "./images/image010.png";
import sign10 from "./images/image011.png";
import sign11 from "./images/image012.png";
import sign12 from "./images/image013.png";
import sign13 from "./images/image014.png";
import sign14 from "./images/image015.png";
import sign15 from "./images/image016.png";
import sign16 from "./images/image017.png";
import sign17 from "./images/image018.png";
import sign18 from "./images/image019.png";
import sign19 from "./images/image020.png";
import sign20 from "./images/image021.png";
import sign21 from "./images/image022.png";
import sign22 from "./images/image023.png";
import sign23 from "./images/image024.png";
import sign24 from "./images/image025.png";
import sign25 from "./images/image026.png";
import sign26 from "./images/image027.png";
import sign27 from "./images/image028.png";
import sign28 from "./images/image029.png";
import sign29 from "./images/image030.png";
import sign30 from "./images/image031.png";

//import firebase from 'firebase';

function ETTEmaterial() {
  const [firstpartShown, setIsFirstPartShown] = useState(false);
  const [secondpartShown, setIsSecondPartShown] = useState(false);
  const [thirdpartShown, setIsThirdPartShown] = useState(false);
  const [fourthpartShown, setIsFourthPartShown] = useState(false);
  const [fifthpartShown, setIsFifthPartShown] = useState(false);
  const [sixthpartShown, setIsSixthPartShown] = useState(false);
  const [seventhpartShown, setIsSeventhPartShown] = useState(false);
  const [eightpartShown, setIsEightPartShown] = useState(false);
  const [ninthpartShown, setIsNinthPartShown] = useState(false);
  const [tenthpartShown, setIsTenthPartShown] = useState(false);
  const [tapaturmateoriaChecked, setIsTapaturmaTeoriaChecked] = useState(false);
  const [viisiAskeltaChecked, setViisiAskeltaChecked] = useState(false);
  const [oikeudetChecked, setIsOikeudetChecked] = useState(false);
  const [nayttamoChecked, setIsNayttamoChecked] = useState(false);
  const [yleisoChecked, setIsYleisoChecked] = useState(false);
  const [kestavaChecked, setIsKestavaChecked] = useState(false);
  const [varoitusChecked, setIsVaroitusChecked] = useState(false);
  const [kieltoChecked, setIsKieltoChecked] = useState(false);
  const [turvallisuusChecked, setIsTurvallisuusChecked] = useState(false);
  const [nostotChecked, setIsNostotChecked] = useState(false);
  const [ergonomisetChecked, setIsErgonomisetChecked] = useState(false);
  const [valineetChecked, setIsValineetChecked] = useState(false);
  const [quizzess, setQuizzess] = useState([]);

  var isQuizzSelected = false;

  const history = useHistory();

  const isFirstPartShown = () => {
    if (firstpartShown === true) {
      setIsFirstPartShown(false);
    } else {
      setIsFirstPartShown(true);
    }
  };

  const isSecondPartShown = () => {
    if (secondpartShown === true) {
      setIsSecondPartShown(false);
    } else {
      setIsSecondPartShown(true);
    }
  };

  const isThirdPartShown = () => {
    if (thirdpartShown === true) {
      setIsThirdPartShown(false);
    } else {
      setIsThirdPartShown(true);
    }
  };

  const isFourthPartShown = () => {
    if (fourthpartShown === true) {
      setIsFourthPartShown(false);
    } else {
      setIsFourthPartShown(true);
    }
  };

  const isFifthPartShown = () => {
    if (fifthpartShown === true) {
      setIsFifthPartShown(false);
    } else {
      setIsFifthPartShown(true);
    }
  };

  const isSixthPartShown = () => {
    if (sixthpartShown === true) {
      setIsSixthPartShown(false);
    } else {
      setIsSixthPartShown(true);
    }
  };

  const isSeventhPartShown = () => {
    if (seventhpartShown === true) {
      setIsSeventhPartShown(false);
    } else {
      setIsSeventhPartShown(true);
    }
  };

  const isEightPartShown = () => {
    if (eightpartShown === true) {
      setIsEightPartShown(false);
    } else {
      setIsEightPartShown(true);
    }
  };

  const isNinthPartShown = () => {
    if (ninthpartShown === true) {
      setIsNinthPartShown(false);
    } else {
      setIsNinthPartShown(true);
    }
  };

  const isTenthPartShown = () => {
    if (tenthpartShown === true) {
      setIsTenthPartShown(false);
    } else {
      setIsTenthPartShown(true);
    }
  };

  const isTapaturmaTeoriaChecked = () => {
    if (tapaturmateoriaChecked === true) {
      setIsTapaturmaTeoriaChecked(false);
    } else {
      setIsTapaturmaTeoriaChecked(true);
    }
  };

  const isViisiAskeltaChecked = () => {
    if (viisiAskeltaChecked === true) {
      setViisiAskeltaChecked(false);
    } else {
      setViisiAskeltaChecked(true);
    }
  };

  const isOikeudetChecked = () => {
    if (oikeudetChecked === true) {
      setIsOikeudetChecked(false);
    } else {
      setIsOikeudetChecked(true);
    }
  };

  const isNayttamoChecked = () => {
    if (nayttamoChecked === true) {
      setIsNayttamoChecked(false);
    } else {
      setIsNayttamoChecked(true);
    }
  };

  const isYleisoChecked = () => {
    if (yleisoChecked === true) {
      setIsYleisoChecked(false);
    } else {
      setIsYleisoChecked(true);
    }
  };

  const isKestavaChecked = () => {
    if (kestavaChecked === true) {
      setIsKestavaChecked(false);
    } else {
      setIsKestavaChecked(true);
    }
  };

  const isTurvallisuusChecked = () => {
    if (turvallisuusChecked === true) {
      setIsTurvallisuusChecked(false);
    } else {
      setIsTurvallisuusChecked(true);
    }
  };

  const isVaroitusChecked = () => {
    if (varoitusChecked === true) {
      setIsVaroitusChecked(false);
    } else {
      setIsVaroitusChecked(true);
    }
  };

  const isKieltoChecked = () => {
    if (kieltoChecked === true) {
      setIsKieltoChecked(false);
    } else {
      setIsKieltoChecked(true);
    }
  };

  const isNostotChecked = () => {
    if (nostotChecked === true) {
      setIsNostotChecked(false);
    } else {
      setIsNostotChecked(true);
    }
  };

  const isErgonomisetChecked = () => {
    if (ergonomisetChecked === true) {
      setIsErgonomisetChecked(false);
    } else {
      setIsErgonomisetChecked(true);
    }
  };

  const isValineetChecked = () => {
    if (valineetChecked === true) {
      setIsValineetChecked(false);
    } else {
      setIsValineetChecked(true);
    }
  };

  const isChapterChecked = (booleanInQuestion) => {
    if (booleanInQuestion === true) {
      setChapterBoolean(booleanInQuestion, false);
    } else {
      setChapterBoolean(booleanInQuestion, true);
    }
  };

  const setChapterBoolean = (booleanInQuestion, bool) => {
    booleanInQuestion = bool;
  };

  useEffect(() => {
    setQuizzess([]);
  }, []);

  return (
    <div>
      {firstpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>1 Työskentele turvallisesti</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isFirstPartShown()}
                >
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
                Turvallinen työskentely edellyttää, että tiedostat
                esitystuotantoihin liittyvät riskit ja otat ne työssäsi huomioon
                oman turvallisuutesi takaamiseksi.{" "}
              </p>
            </div>
            <div class="chapterBox" onClick={() => isTapaturmaTeoriaChecked()}>
              <h3>1.1 Tapaturmateoria </h3>
              {tapaturmateoriaChecked ? (
                <div class="chapterText">
                  <p>
                    On tärkeää tiedostaa,{" "}
                    <strong>
                      että täydellistä turvallisuutta ei ole olemassa
                    </strong>
                    , ja huolimatta siitä, kuinka turvallisesti pyrimme
                    työskentelemään, <strong>onnettomuuksia tapahtuu. </strong>
                    Turvallisuudessa on aina kyse tasapainosta käytettävyyden ja
                    hyväksyttävissä olevan riskin välillä. Jotta voimme tehdä
                    tasapainoon johtavia valintoja järkevästi, meidän täytyy
                    ymmärtää, miten onnettomuudet tapahtuvat ja minkälaisia
                    mekanismeja niiden takana piilee.
                  </p>
                  <b>Riski</b>
                  <p>
                    Riskissä on kolme osatekijää{" "}
                    <strong>
                      1. vaarallinen tilanne tai teko, 2. todennäköisyys,{" "}
                    </strong>
                    että jokin menee vikaan sekä tämän tapahtuman{" "}
                    <strong>3. seuraukset.</strong> Jokainen vaarallinen tilanne
                    tai teko luo vaaran uhan. Tämä ei kuitenkaan tarkoita, että
                    jokin menee pieleen. Esimerkiksi jos pudotat työkalun, kun
                    ketään ei ole lähistöllä, vahinkoa ei tapahdu.{" "}
                  </p>
                  <b>Todennäköisyys </b>
                  <p>
                    Jokainen vaarallinen tilanne tai teko luo vaaran uhan. Tämä
                    ei kuitenkaan tarkoita, että jokin menee pieleen.
                    Esimerkiksi jos pudotat työkalun, kun ketään ei ole
                    lähistöllä, vahinkoa ei tapahdu.{" "}
                  </p>
                  <b>Seuraus</b>
                  <p>
                    Seurauksen käsite osoittaa vahinkojen mahdollisen vakavuuden
                    tai vaikutuksen työpaikkaan. Esimerkiksi, kun työkalu
                    putoaa, aiheuttaako se pieniä vaurioita vai voiko se tappaa
                    jonkun?{" "}
                  </p>
                  <b>Läheltä piti-tilanne </b>
                  <p>
                    Läheltä piti -tilanne on tahaton vaaratilanne, josta ei
                    koidu lainkaan vaurioita tai vammoja tai vauriot ja vammat
                    ovat vähäisiä. Jotain vaarallista siis tapahtui, mutta
                    tilanne päättyi kuitenkin hyvin. Esimerkkejä: Joku pudottaa
                    vasaran korkealta vahingoittamatta ketään tai joku kompastuu
                    kaapeliin, mutta ei kuitenkaan kaadu vaan jatkaa matkaa.{" "}
                  </p>
                  <b>Tapaturma </b>
                  <p>
                    Tapaturma on tahaton tilanne, josta aiheutuu vakavaa
                    vahinkoa tai vammoja. Toisin sanoen tilanne päättyy
                    ikävästi. Esimerkkejä: Joku pudottaa vasaran korkealta ja
                    satuttaa toista ihmistä tai joku kompastuu kaapeliin, kaatuu
                    ja satuttaa itsensä{" "}
                  </p>
                  <b>Vahinko tai vamma </b>
                  <p>
                    Vammat ja vauriot ovat{" "}
                    <strong>tapaturman seurauksia.</strong> Voimme luokitella ne
                    vakavuuden ja seurausten perusteella.
                  </p>
                  <ul>
                    <li>
                      <strong>Pienet haaverit,</strong> jotka hoidetaan paikan
                      päällä ensiavun turvin, ei sairauspoissaoloa
                    </li>
                    <li>
                      Vammat, joista aiheutuu{" "}
                      <strong>väliaikainen sairauspoissaolo</strong>
                    </li>
                    <li>
                      <strong>Pysyvät vammat</strong> (esimerkiksi
                      liikuntarajoitteet)
                    </li>
                    <li>
                      <strong> Kuolema</strong>{" "}
                    </li>
                  </ul>
                  <p>
                    On tärkeä ymmärtää, että{" "}
                    <strong>
                      vahingon aiheuttaja ei ole sama kuin tapaturman
                      aiheuttaja.
                    </strong>{" "}
                    Vahingon aiheuttaja on se, joka saa aikaan fyysisen vaurion,
                    esimerkiksi putoava valonheitin tai terävä veitsi.
                    Tapaturman aiheuttaja on se toiminta tai tilanne, joka
                    aiheutti tapaturman, esimerkiksi turvavaijerin puute tai
                    väärä tapa käsitellä veistä.{" "}
                  </p>
                  <b>Suhteet </b>
                  <p>
                    Vaara, todennäköisyys ja seuraus muodostavat riskin. Riski
                    saattaa aiheuttaa vaaratilanteen. Jos vaaratilanne päättyy
                    huonosti, sattuu tapaturma, joka aiheuttaa vahinkoja.
                    Tapaturmien välttämiseksi yritämme hallita riskitekijöitä,
                    analysoimme riskit ja pidämme kirjaa läheltä piti
                    -tilanteista.{" "}
                  </p>
                  <b>Vaarallinen toiminta </b>
                  <p>
                    Tilastot osoittavat, että 80 % tapaturmista johtuu ihmisen
                    toiminnasta. Jos siis haluamme ehkäistä onnettomuudet,
                    ensimmäiseksi pitää tarkastella ihmisen käytöstä. Meidän
                    pitää kysyä, miksi joku käyttäytyy tietyllä tavalla. Syyt
                    vaaralliseen käytökseen voidaan jakaa kolmeen:
                    tietämättömyys, kykenemättömyys ja haluttomuus.
                  </p>
                  <p>
                    <strong>Tietämättömyydessä</strong> on useimmiten kyse{" "}
                    <strong>tiedon puutteesta. </strong>
                    Jos ei tiedä vaaran olemassaolosta tai tekojensa
                    seurauksista, riskiä on vaikea välttää. Jos ei tiedä, miten
                    suojata itsensä tai kuinka toimia onnettomuustilanteessa, on
                    vaikea minimoida onnettomuuden seurauksia.{" "}
                  </p>
                  <p>
                    Ratkaisut tietämättömyyteen ovat yksinkertaisia. Jos joku
                    epäilyttää, kysy. Perehdy laitteisiin, materiaaleihin ja
                    työtapoihin. Ennen kaikkea myönnä, ettet tiedä.
                  </p>{" "}
                  <p>
                    <strong>Kykenemättömyyteen</strong> voi olla monia syitä.
                    Yksi syy voi olla, että työntekijä ei
                    <strong> fyysisesti</strong> pysty tekemään jotain. Hän ei
                    esimerkiksi ole tarpeeksi vahva tai notkea, häneltä puuttuu
                    kokemusta tai oikeanlaista osaamista työn suorittamiseen tai
                    hänellä ei ole aikaa tehdä työtä kunnolla. Joskus taas
                    työntekijä ei
                    <strong> henkisesti</strong> pysty suorittamaan tehtävää
                    turvallisesti, esimerkiksi koska hän ei pysty keskittymään
                    oman elämäntilanteensa takia tai koska hän pelkää sitä, mitä
                    hänen pitäisi tehdä.
                  </p>{" "}
                  <p>
                    Esimerkkejä: Ryhdyt siirtämään kaiuttimia, vaikka ne ovat
                    liian raskaat yksin nostettaviksi tai työskentelet
                    korkealla, vaikka tunnet itsesi sairaaksi.{" "}
                  </p>{" "}
                  <p>
                    Jotta tilanne voidaan ratkaista, työntekijän täytyy
                    <strong> tuntea ja myöntää rajansa.</strong> Tällä tavalla
                    tunnistamme ongelman ja voimme (ehkä) tehdä sille jotakin.
                    Joka tapauksessa, työntekijä ei saa antaa kenenkään pakottaa
                    itseään tekemään mitään, mihin ei koe kykenevänsä.
                  </p>
                  <p>
                    <strong>Haluttomuuteen </strong>onnettomuuden syynä on
                    kaikkein vaikein puuttua, koska se edellyttää ihmisten
                    <strong> asenteiden</strong> muutosta. Voi olla monia syitä,
                    miksi joku ei halua käyttää olemassa olevia turvavälineitä
                    tai työskennellä turvallisesti. Syynä voi olla laiskuus,
                    motivaation puute tai käsitys, että itse tietää asiat
                    paremmin. Useimmissa tapauksissa tällainen käytös juontuu
                    tavoista, joita voi olla vaikea muuttaa tai ammatillisesta
                    sokeudesta. Ammatillinen sokeus tarkoittaa, että pitkän ajan
                    kuluessa tottuu tiettyihin riskeihin ja sen takia aliarvioi
                    ne.
                  </p>{" "}
                  <p>
                    Esimerkkejä: Et käytä turvakenkiä, koska olet aina
                    työskennellyt ilman niitä tai kun työskentelet korkealla, et
                    käytä työkaluissa turvavaijeria, koska et halua tuhlata
                    aikaa.
                  </p>{" "}
                  <p>
                    Jotta tämäntyyppinen käytös korjaantuisi, meidän pitää
                    ymmärtää muutostarpeen syyt ja motivoida ja tarkkailla
                    toisiamme.{" "}
                  </p>
                  <b>Vaaralliset tilanteet </b>
                  <p>
                    Toinen tapaturmanaiheuttajatyyppi muodostuu tilanteista,
                    jotka aiheuttavat riskin työntekijöille tai muille
                    ihmisille. Nämä voidaan jakaa kolmeen lajiin: järjestelyt,
                    tekniikka ja olosuhteet.
                  </p>
                  <p>
                    <strong>Järjestelyihin </strong>liittyvät vaaratilanteet
                    aiheutuvat
                    <strong> tavasta, jolla työ on järjestetty.</strong> Nämä
                    riskit sisältävät muun muassa aikataulutusongelmat
                    työryhmien tai toimintojen välillä (esimerkiksi esityksen
                    purku on järjestetty samaan aikaan kuin laitteiston
                    siirrot).
                  </p>
                  <p>
                    <strong>Tekniikkaan liittyviä vaaratilanteita </strong>
                    aiheuttavat koneiden, laitteiden ja työkalujen lisäksi muut
                    konkreettiset elementit kuten portaikot ja kulkusillat.
                  </p>
                  <p>
                    <strong>Olosuhteisiin </strong>liittyvät vaaratilanteet
                    viittaavat <strong>ulkoisiin tekijöihin, </strong>
                    jotka eivät ole suoraan yhteydessä toimintaan mutta
                    vaikuttavat siihen. Esimerkiksi rajallinen valaistus,
                    sääolosuhteet tai liiallinen melu vaikuttavat työhön
                    negatiivisesti.{" "}
                  </p>
                  <b>Samanaikaisuus </b>
                  <p>
                    Onnettomuudelle ei ole vain yhtä syytä. tapaturma on aina
                    seurausta{" "}
                    <strong>olosuhteiden ja toiminnan yhdistelmästä.</strong>{" "}
                    Tapaturma sattuu ainoastaan silloin, kun nämä osatekijät
                    tapahtuvat samaan aikaan.
                  </p>
                  <p>
                    Esimerkki: Työkalu tippuu telineeltä ja osuu alla kulkevaan
                    henkilöön. Jos tutkimme tilannetta tarkkaan, huomaamme, että
                    tapaturmaan liittyy useita erilaisia riskejä:
                    <ul>
                      <li>Rakennustelineellä on työkalu</li>
                      <li>Esineitä ei ole suojattu putoamiselta</li>
                      <li>Telineellä työskentelee joku</li>
                      <li>Joku kulkee telineen alta</li>
                    </ul>
                    Mikään näistä riskeistä ei kuitenkaan yksin aiheuta
                    tapaturmaa.
                  </p>
                  <p>
                    Tapaturman aiheuttaja on: Joku kulkee ohi, kun telineellä
                    työskentelevä henkilö, joka ei ole suojannut työvälineitään
                    putoamiselta, tönäisee työkalunsa alas{" "}
                  </p>
                  <p>
                    Jos yksikin riskeistä poistettaisiin, tapaturmaa ei
                    sattuisi.
                    <ul>
                      <li>Jos työkalua ei ole, se ei voi pudota</li>
                      <li> Jos työkalussa on turvavaijeri, se ei voi pudota</li>
                      <li>
                        Jos kukaan ei työskentele telineellä, työkalua ei voi
                        tönäistä alas
                      </li>
                      <li>
                        Jos kukaan ei kulje telineen ohi työkalun pudotessa,
                        sattuisi vain vaaratilanne, ei tapaturmaa.
                      </li>
                    </ul>
                    Kaikkia riskejä ei kuitenkaan voi poistaa, muuten työ ei
                    tule tehdyksi. Vaihtoehtona on välttää samanaikaisuutta.
                    Varmistamme, että riskit eivät toteudu samaan aikaan. Toisin
                    sanoen:{" "}
                    <ul>
                      <li>
                        Jos kukaan ei voi kulkea telineen läheisyydessä, kun
                        joku työskentelee telineellä, tapaturmaa ei voi sattua.
                      </li>
                    </ul>
                    Samanaikaisuuden välttämistä käytetään paljon tilanteissa,
                    joissa riskiä ei voida kokonaan poistaa.{" "}
                  </p>
                  <b>Ammattitaudit </b>
                  <p>
                    Ammattitaudit eivät johdu tapaturmista. Fyysiset vahingot
                    eivät ole seurausta yhtäkkisestä tapahtumasta vaan
                    pitkäaikaisesta altistumisesta vaarallisille tai
                    epäterveellisille olosuhteille. Tyypillisiä esimerkkejä ovat
                    kuulovauriot, jotka johtuvat pitkäaikaisesta altistumisesta
                    melulle, toistuvasta nostamisesta johtuvat selkävaivat ja
                    pitkäkestoisesta näyttöpäätetyöskentelystä johtuvat
                    silmäongelmat. Koska vaivat{" "}
                    <strong>
                      eivät ole suoraan yhteydessä tiettyyn tapahtumaan
                    </strong>
                    , on vaikea todistaa yhteyttä työtehtäviin ja ehkäistä
                    niitä.
                  </p>
                  <p>
                    Ergonomisemmat työtavat, oikea suojavarustus ja tehtävien
                    monipuolisuus ehkäisevät ammattitauteja parhaiten.{" "}
                  </p>
                  <b>Psykososiaaliset riskit</b>
                  <p>
                    Psykososiaaliset riskit ovat{" "}
                    <strong>
                      psyykkiseen ja fyysiseen terveyteen liittyviä riskejä
                    </strong>
                    , jotka juontavat juurensa työn sisällöstä tai työn
                    kontekstista. Sisällöllä tarkoitetaan tässä työtehtävien
                    laatua, työmäärää, aikatauluja ja työn olosuhteita
                    (työpaikka, laitteistot jne.). Kontekstilla taas viitataan
                    tässä työntekijän mahdollisuuksiin vaikuttaa työhönsä,
                    työpaikan työkulttuuriin, työyhteisön jäsenten välisiin
                    suhteisiin, etenemismahdollisuuksiin sekä työn ja vapaa-ajan
                    väliseen tasapainoon. Nämä riskit voivat aiheuttaa
                    äärimmäistä stressiä, masennusta, loppuun palamista tai
                    tylsistymistä, mutta myös fyysisiä ongelmia kuten tuki- ja
                    liikuntaelimistön vaivoja tai sydän- ja verisuonitauteja.
                  </p>
                  <p>
                    Useimmilla työpaikoilla on toimintaohje seksuaalista
                    häirintää, asiatonta käytöstä, kiusaamista ja muita
                    vastaavia tilanteita varten.{" "}
                    <strong>Ongelmien esiin ottaminen ajoissa</strong> voi
                    auttaa minimoimaan psykososiaalisten riskien seurauksia.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isViisiAskeltaChecked()}>
              <h3>1.2 Viisi askelta riskien vähentämiseen </h3>
              {viisiAskeltaChecked ? (
                <div class="chapterText">
                  <p>
                    Tapaturmateorian avulla opimme tunnistamaan riskit. Seuraava
                    askel riskienhallinnassa on ryhtyä turvallisuutta lisääviin
                    toimenpiteisiin. Toteuttamistapa riippuu kulloisestakin
                    kokonaistilanteesta.{" "}
                    <strong>
                      Tilanteen salliessa kohdistamme toimet mahdollisiin
                      tapaturman aiheuttajiin
                    </strong>
                    , niin että poistamme riskit tai{" "}
                    <strong>vältämme riskitekijöiden kasautumisen</strong>. Jos
                    tämä ei ole mahdollista, pyrimme minimoimaan seuraukset.
                  </p>
                  <p>
                    Periaatteena on, että{" "}
                    <strong>
                      arvioimme riskin, suoritamme parhaan mahdollisen
                      toimenpiteen ja arvioimme riskin uudelleen niin kauan,
                      että se on hyväksyttävissä rajoissa
                    </strong>
                    . On tärkeää tarkastella arvioinnissa koko tilannetta, koska
                    on mahdollista, että yhtä riskitekijää pienentämällä syntyy
                    uusi riski.
                  </p>
                  <p>
                    {" "}
                    Mahdollisia toimenpiteitä on viittä eri tyyppiä. Jotkut
                    takaavat tilanteen turvallisuuden paremmin kuin toiset,
                    mutta kaikkia toimenpiteitä ei voi soveltaa joka
                    tilanteeseen. Joissain tapauksissa riskin vähentäminen
                    estäisi kokonaan toiminnan, jota yritämme suojata. Oikean
                    toimenpiteen valinta on aina tasapainottelua turvallisuuden
                    ja käytettävyyden välillä. Viisi toimenpidetyyppiä
                    tehokkaimmasta vähiten tehokkaaseen ovat:
                  </p>
                  <ol>
                    <li>Riskin poistaminen</li>
                    <li>Yleinen suojaaminen</li>
                    <li>Henkilökohtainen suojautuminen</li>
                    <li>Koulutus</li>{" "}
                    <li> Tiedottaminen, ilmoittaminen ja varoittaminen</li>
                  </ol>
                  <p>
                    <strong>Riskin poistaminen</strong>
                    Tehokkain toimenpide on riskin poistaminen. Jos poistamme
                    tapaturman mahdollisen aiheuttajan, ongelmaa ei enää ole.
                  </p>
                  <p>
                    Esimerkiksi:{" "}
                    <ul>
                      <li>
                        Näyttämön lattiassa on aukko (luukku, orkesterisyvennys,
                        hissi tms.), jonka takia on olemassa riski, että ihmiset
                        putoavat aukkoon. Aukon sulkeminen poistaa riskin
                        kokonaan.
                      </li>
                      <li>
                        Työkalujen ja laitteiden käyttö näyttämöllä on
                        välttämätöntä, mutta voimme poistaa ne kulkuväyliltä ja
                        säilyttää niitä kuljetuslaatikoissa tai varastotiloissa.
                        Työkaluihin ja laitteisiin kompastumisen riski
                        poistetaan kulkuväyliltä ja riski siirtyy muualle.
                      </li>
                    </ul>
                  </p>
                  <strong>Yleinen suojaaminen</strong>
                  <p>
                    Jos riskiä ei voida kokonaan poistaa, suoritamme
                    toimenpiteitä, jotka suojaavat kaikkia ihmisiä yleisesti.
                    Kun kehittelemme yhteisiä turvaratkaisuja, meidän täytyy
                    ottaa huomioon käyttäjien väliset erot. Voi olla tarpeen
                    tehdä muutoksia yleiseen suojaukseen lapsia, ikäihmisiä ja
                    vammaisia varten.
                  </p>
                  <p>Esimerkiksi: </p>
                  <ul>
                    <li>
                      Näyttämön lattiassa on aukko (luukku, orkesterisyvennys,
                      hissi tms.), jota tarvitaan juuri nyt. Suoja-aidan
                      pystyttäminen aukon ympärille suojelee kaikkia. Kukaan ei
                      pääse aukon lähelle, joten kukaan ei putoa. Tässä
                      tapauksessa on tärkeää määritellä, ketkä kuuluvat
                      ”kaikkiin”. Jos joukkoon kuuluu myös lapsia, suoja-aidan
                      rakoja täytyy pienentää.
                    </li>
                    <li>
                      {" "}
                      Valonheittimen ripustaminen tankoon sisältää erityisen
                      putoamisriskin, koska valaisin roikkuu ihmisten päiden
                      päällä. Riskinä on pultin tai kiinnikkeen katkeaminen.
                      Turvavaijeri estää valonheitintä putoamasta ja turvaa alla
                      olevat ihmiset.
                    </li>
                  </ul>
                  <p>
                    <strong>Henkilökohtainen suojautuminen</strong>
                  </p>
                  <p>
                    Useimmiten yleinen suojaaminen ei tule kysymykseen, koska se
                    tekisi esitysteknisen laitteiston käytön mahdottomaksi.
                    Silloin täytyy erikseen <strong>suojata henkilöt</strong>,
                    jotka työskentelevät laitteiston kanssa. Tämä ei kuitenkaan
                    tee yleistä suojaamista tarpeettomaksi, koska myös muita
                    ihmisiä pitää suojella. Monesti tarvitaan kaksinkertaista
                    suojausta: yleinen suojaus niille, jotka eivät osallistu
                    toimintaan ja henkilökohtainen suojaus niille, jotka
                    käyttävät laitteita. Henkilökohtaisen suojauksen heikkous on
                    siinä, että suojattava henkilö on itse vastuussa sen
                    käytöstä.
                  </p>
                  <p>
                    On olemassa kahdenlaista henkilökohtaista suojausta. Suojaus
                    joko <strong>estää tapaturmat</strong> tai{" "}
                    <strong>minimoi niiden vaikutukset</strong>.
                  </p>
                  <p>Esimerkiksi: </p>
                  <ul>
                    <li>
                      Turvakenkien ansiosta varpaille tippuva valonheitin
                      aiheuttaa minimaalisen vahingon.
                    </li>
                    <li>
                      Valjaat, joissa on turvaköysi, estävät joutumisen liian
                      lähelle näyttämöllä olevaa aukkoa.
                    </li>
                  </ul>
                  <p>
                    <strong>Koulutus</strong>
                  </p>
                  <p>
                    Joskus on vaikeaa suojella ihmisiä taiteellisessa
                    työympäristössä. Jotkut turvatoimet eivät sovi yhteen
                    taiteellisen vision kanssa, ne pilaavat esityksen sisällön
                    tai häiritsevät näyttämökuvaa.{" "}
                    <strong>
                      Näitäkin riskejä voidaan vähentää kouluttamalla
                    </strong>{" "}
                    ihmisiä. Heillä pitää olla syvä ymmärrys riskitekijöistä ja
                    heidän pitää harjoitella miten ottaa riskit huomioon
                    näyttämöllä ja kuinka toimia, kun jotain sattuu.{" "}
                  </p>
                  <p>Esimerkiksi: </p>
                  <ul>
                    <li>
                      Näyttämöllä on aukko katoamistemppua varten. Meidän pitää
                      opastaa näyttelijöitä ja muita näyttämöllä olevia
                      henkilöitä, kuinka näyttämöllä toimitaan, kun
                      näyttämöluukku on auki.
                    </li>
                    <li>
                      Näyttelijä pitää opettaa käyttämään asetta niin, että
                      kuulovaurioita ja palovammoja ei synny.
                    </li>
                  </ul>
                  <p>
                    On tilanteita, joissa koulutus on ainoa vaihtoehto. Näiden
                    lisäksi tarvitaan{" "}
                    <strong>
                      koulutusta yleisen ja henkilökohtaisen suojauksen
                      käyttöön.
                    </strong>{" "}
                    Toimenpiteet tehoavat vain, jos niitä käytetään oikein.
                  </p>
                  <p>
                    <strong>Tieto, tiedottaminen ja varoittaminen</strong>
                  </p>
                  <p>
                    Viimeinen askel on tiedottaa ja varoittaa kaikkia ihmisiä,
                    joita riskit koskevat.{" "}
                    <strong>
                      Tiedottaminen ja varoittaminen eivät pienennä riskejä
                    </strong>{" "}
                    tai tapaturman seurauksia, mutta tiedottamisen ja
                    varoittamisen ansioista ihmiset ovat tietoisia riskeistä.
                  </p>
                  <p>
                    Varoitukset sisältävät kaiken tyyppiset{" "}
                    <strong>opasteet</strong>
                    (varoituskyltit ovissa jne.), jotka kiinnittävät ihmisten
                    huomion tietyn ympäristön riskeihin. Kyltit myös kertovat,
                    mitä henkilökohtaista suojausta tietyssä ympäristössä
                    tarvitaan ja mitä turvavälineitä on saatavilla.
                    Konkreettiset riskit tehdään <strong>
                      näkyvämmiksi
                    </strong>{" "}
                    merkitsemällä tai valaisemalla. Ihmisten tiedottaminen
                    auttaa heitä toimimaan tietyissä tilanteissa. Työpisteillä
                    annetaan <strong>ohjeet</strong>
                    laitteiston turvalliseen käyttöön ja tuotteiden
                    turvaohjeissa kerrotaan, miten niitä pitää käsitellä.
                  </p>
                  <p>
                    Toimintaohjeet eli sovittujen toimintojen ja vastuiden
                    selittäminen (talon säännöt) kertovat ihmisille, kuinka
                    toimia eri tilanteissa. Tämäntyyppinen tiedottaminen täytyy
                    toistaa säännöllisin väliajoin. Joissain työpaikoissa
                    tällainen ohjeistus jaetaan päivittäisissä
                    tiedotustilaisuuksissa.
                  </p>
                  <p>Esimerkiksi: </p>
                  <ul>
                    <li>
                      Näyttämön lattiassa oleva aukko tehdään näkyväksi
                      kiinnittämällä sen ympärille LED-nauhoja.
                    </li>
                    <li>
                      Ennen esityksen alkua näyttämöhenkilökunnalle kerrotaan,
                      kuinka toimia normaaleissa ja poikkeustilanteissa
                      trapetsiesityksen aikana
                    </li>
                    <li>
                      Ovilla on teksti, joka varoittaa yleisöä esityksessä
                      käytettävistä välkkyvistä valoista
                    </li>
                  </ul>
                  <p>
                    <strong>Keinojen yhdisteleminen</strong>
                  </p>
                  <p>
                    Useimmiten tarvitsemme useampia turvatoimia pienentääksemme
                    riskit hyväksyttävälle tasolle. Riskien vähentäminen alkaa
                    yllämainituilla viidellä askeleella. Jokaisen askeleen
                    jälkeen arvioimme riskit uudelleen ja suoritamme lisää
                    turvatoimia, kunnes riskit ovat hyväksyttävällä tasolla.
                  </p>
                  <p>
                    On tärkeää <strong>ottaa huomioon kokonaistilanne</strong>{" "}
                    kaikkine riskeineen. On mahdollista, että yhden riskitekijän
                    minimoiminen synnyttää uuden riskin. Uusi riski tunnistetaan
                    tilannearviossa.
                  </p>
                  <p>
                    Toiminnan kokonaisuuteen voi liittyä{" "}
                    <strong>useita riskejä</strong>. On tärkeää käsitellä niitä
                    yksitellen, jotta toiminta on kokonaisuudessaan turvallinen.
                  </p>
                  <p>
                    <strong>Odottamattomat riskit </strong>
                  </p>
                  <p>
                    Kaikkia riskejä ei tietenkään voi ennakoida eikä niitä siis
                    yksilöidä riskiarviossa. Tällöin ratkaisuna on{" "}
                    <strong>viime hetken riskiarvio</strong>, jonka työntekijät
                    tekevät itse, kun ongelmia ilmenee. He tekevät nopean
                    tilanneanalyysin ja vähentävät riskiä viiden askeleen
                    periaatteen mukaisesti.
                  </p>
                  <p>
                    <strong>Varo väärää turvallisuudentunnetta</strong>
                  </p>
                  <p>
                    Pahinta mitä voi tehdä{" "}
                    <strong>
                      on antaa ihmisten luulla, että tilanne on turvallinen
                    </strong>{" "}
                    silloin kun se ei ole. Tästä koituu entistäkin
                    vaarallisempia tilanteita, koska ihmisiltä häviää tietoisuus
                    riskeistä.
                  </p>{" "}
                  <p>Esimerkiksi: </p>
                  <ul>
                    <li>
                      Näyttämöllä oleva aukko peitetään ohuella vanerilevyllä.
                      Paikka näyttää nyt turvalliselta, mutta jos aukon päälle
                      astuu, putoaa levyn läpi.
                    </li>
                  </ul>
                  <p>
                    <strong>Riskienarviointi</strong>
                  </p>
                  <p>
                    Riskienarviointi on <strong>prosessi</strong>, jossa
                    tunnistetaan riskit ja ehdotetaan toimia terveyden ja
                    turvallisuuden nostamiseksi hyväksyttävälle tasolle.
                    Työympäristössä arvio on <strong>muodollinen</strong>. Tämä
                    on tarpeen, koska riskit koskevat useita ihmisiä
                    monitahoisessa tilanteessa. Se on osa työpaikan
                    riskienhallinnan kokonaisuutta. Riskiarviointi täytyy
                    dokumentoida, jotta siitä olisi hyötyä koko työyhteisölle.
                  </p>
                  <p>
                    Riskiarviointi on <strong>työkalu</strong>. Se on menetelmä,
                    joka auttaa meitä tunnistamaan riskit, ehdottamaan
                    toimenpiteitä ja dokumentoimaan prosessin. Se ei kuitenkaan
                    ole päämäärä tai tavoite itsessään, vaan päämäärä on luoda
                    turvallisempi työympäristö.
                  </p>
                  <p>
                    Riskiarviointia voidaan tehdä <strong>eri tasoilla</strong>{" "}
                    ja eri tilanteita varten. Jotkut arvioinnit ovat staattisia
                    - rakennus seisoo paikallaan pitkän aikaa eikä tilanne
                    juurikaan muutu. Toiset arvioinnit ovat muuttuvampia, koska
                    esitystuotannot vaihtuvat.
                  </p>
                  <p>
                    Kaikki riskiarvioinnit täytyy nähdä{" "}
                    <strong>kokonaisuuksina</strong>. On täysin mahdollista
                    tuoda turvallinen esitys turvalliselle näyttämölle ja
                    synnyttää samalla uusia riskejä. Jos tilanteet muuttuvat,
                    riskianalyysi pitää päivittää. Siten
                    <strong> riskiarviointi on jatkuva prosessi</strong>. Jos
                    työprosessin aikana ilmenee ennakoimattomia riskejä, voi
                    olla tarpeen tehdä
                    <strong> viime hetken riskiarvio</strong>. Tämän tekevät
                    työntekijät itse välittömästi, kun huolenaihetta ilmenee.
                  </p>
                  <p>
                    Riskienhallinnan <strong>menetelmiä</strong> on paljon ja
                    jokaisella on hyvät ja huonot puolensa. Numeeriset
                    menetelmät määrittävät riskit numeroiden avulla ja laskevat
                    todennäköisyyksiä ja esiintymistiheyksiä sekä koulutuksen
                    tasoja. Tekstilähtöiset taas yhdistävät käsitteet tiettyihin
                    mittareihin.
                  </p>
                  <p>
                    Riskienhallinnanjärjestämät auttavat{" "}
                    <strong>priorisoimaan </strong>
                    toimintoja. Ei ole aina mahdollista tai tarpeellista ryhtyä
                    konkreettisiin toimiin yksittäisten riskien suhteen.
                    Riskienhallintajärjestelmä ottaa huomioon työpaikan
                    realiteetit, kuten toimenpiteen kustannukset, suunnittelun,
                    tuotantoajan menetyksen ja määräajat, joiden perusteellä
                    päätetään suoritetaanko toimenpiteet heti vai voidaanko ne
                    lykätä tiettyyn määräpäivään.
                  </p>
                  <p>
                    <strong>Meidän tehtävämme </strong>
                    riskienarviointiprosessissa on olla aktiivinen osallistuja,
                    tiedottaa riskeistä turvallisuusvastaavalle, tehdä viime
                    hetken riskianalyysejä tilanteissa, jotka eivät olleet
                    ennustettavissa ja tietysti noudattaa riskianalyysin
                    tuloksena syntyviä suosituksia.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isOikeudetChecked()}>
              <h3>1.3 Oikeudet ja velvollisuudet </h3>
              {oikeudetChecked ? (
                <div class="chapterText">
                  <p>
                    Taatakseen{" "}
                    <strong>
                      jokaisen EU-maan työntekijän tasavertaisen kohtelun
                      työterveys- ja turvallisuusasioissa
                    </strong>
                    , Euroopan unioni on määritellyt perusoikeudet ja
                    -velvollisuudet sekä työnantajille että työntekijöille. Nämä
                    säädökset on sisällytetty jokaisen jäsenmaan kansalliseen
                    tai alueelliseen lainsäädäntöön. Maat voivat tietysti
                    asettaa vaatimuksensa korkeammallekin, mutta kaikkien pitää
                    noudattaa ainakin alla lueteltuja vähimmäis-vaatimuksia.
                  </p>
                  <p>Työntekijän täytyy:</p>{" "}
                  <ul>
                    <li>
                      <strong>käyttää asianmukaisesti</strong> koneita,
                      laitteita, työkaluja, vaarallisia aineita,
                      kuljetuskalustoa, muita tuotantoon liittyviä välineitä ja
                      henkilökohtaisia turvavarusteita.
                    </li>
                    <li>
                      <strong>tiedottaa</strong> työnantajaa välittömästi
                      kaikista tilanteista, joista aiheutuu vakavaa ja välitöntä
                      vaaraa, sekä kaikista puutteista turvajärjestelyissä.
                    </li>
                    <li>
                      <strong>tehdä yhteistyötä työnantajan kanssa</strong>{" "}
                      työturvallisuusvaatimusten täyttämiseksi ja työympäristön
                      ja -olosuhteiden turvallisuuden takaamiseksi.
                    </li>
                    <li>
                      Työntekijöille pitää taata
                      <strong>työterveyspalvelut </strong>kansallisen
                      terveysjärjestelmän mukaisesti. Riskiryhmiä pitää suojella
                      vaaroilta, jotka vaikuttavat heihin erityisesti.
                    </li>
                  </ul>
                  <p>Työnantajan täytyy: </p>
                  <p>
                    <ul>
                      <li>
                        <strong>arvioida kaikki</strong> työntekijöiden
                        terveyteen ja turvallisuuteen liittyvät riskit, muun
                        muassa työvälineiden valinnassa, kemiallisten aineiden
                        ja valmisteiden käytössä sekä työpaikkojen
                        järjestelyissä.
                      </li>
                      <li>
                        <strong>suorittaa toimenpiteitä</strong>, jotka
                        parantavat työntekijöiden turvallisuutta ja jotka
                        integroidaan kaikkeen hankkeen ja/tai työpaikan
                        toimintaan ja joita noudatetaan kaikilla
                        hallinnollisilla tasoilla.
                      </li>
                      <li>
                        osoittaessaan työntekijälle tehtäviä{" "}
                        <strong>
                          ottaa huomioon työntekijän kyvyt ja ominaisuudet
                        </strong>
                        , jotka vaikuttavat terveyteen ja turvallisuuteen
                      </li>
                      <li>
                        <strong>kysyä</strong> työntekijöiltä neuvoa uuden
                        teknologian käyttöönottoa varten
                      </li>
                      <li>
                        <strong>nimetä työntekijä/työntekijöitä</strong>{" "}
                        suorittamaan työturvallisuuteen ja ammatillisten riskien
                        ehkäisyyn liittyviä toimenpiteitä.
                      </li>
                      <li>
                        <strong>
                          suorittaa tarvittavat toimet, jotta ensiapu,
                          sammutustyöt ja työntekijöiden evakuointi
                        </strong>{" "}
                        sujuvat ongelmitta vakavassa ja välittömässä
                        vaaratilanteessa.
                      </li>
                      <li>
                        <strong>dokumentoida työtapaturmat</strong> ja laatia
                        vastuullisille viranomaisille raportteja työntekijöille
                        sattuneista työtapaturmista.
                      </li>
                      <li>
                        <strong>
                          tiedottaa ja kysyä neuvoa työntekijöiltä
                        </strong>{" "}
                        ja antaa heidän osallistua keskusteluihin kaikista
                        työturvallisuuteen ja -terveyteen liittyvistä asioista.
                      </li>
                      <li>
                        varmistaa, että jokainen työntekijä saa{" "}
                        <strong>
                          riittävän työturvallisuus- ja -terveyskoulutuksen
                        </strong>
                        .
                      </li>
                    </ul>{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
              maxHeight: "6em",
              marginBottom: 0,
            }}
            onClick={() => setIsFirstPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>1 Työskentele turvallisesti</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  marginBottom: "0.3em",
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}

      {secondpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>
                  2 Luo turvallinen ja ympäristöystävällinen työpaikka
                </h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isSecondPartShown()}
                >
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
                Luodaksesi turvallisen ja ympäristöystävällisen työpaikan, sinun
                täytyy tiedostaa riskit, jotka syntyvät sinun ja työtovereidesi
                toiminnasta näyttämöllä ja yleisöalueella esitys- ja
                tapahtumatuotannoissa ja toimia niin, että kaikki ovat turvassa.{" "}
              </p>
            </div>
            <div class="chapterBox" onClick={() => isNayttamoChecked()}>
              <h3>2.1 Näyttämön riskit </h3>
              {nayttamoChecked ? (
                <div class="chapterText">
                  <p>
                    Tätä ei voi korostaa liikaa: näyttämö on täynnä riskejä. Osa
                    riskeistä täytyy eliminoida rakenteellisesti, mutta hyvin
                    monet riskit voidaan minimoida näyttämötyöntekijöiden
                    hyvillä käytännöillä. Ensimmäinen askel on erilaisten
                    riskien tiedostaminen.
                  </p>
                  <p>
                    <strong>Siisti näyttämö on turvallinen näyttämö </strong>
                  </p>
                  <p>
                    Monien ihmisten täytyy olla näyttämöllä pystytyksen, purun,
                    harjoitusten ja esitysten aikana. Heistä kaikki tarvitsevat
                    vapaat kulkureitit työpisteilleen ja tilaa työskennellä. On
                    ensiarvoisen tärkeää, että rakentamisen aikana tarvittavat
                    tavarat ja materiaalit ovat näyttämöllä{" "}
                    <strong>hyvässä järjestyksessä</strong>. Materiaalien tuonti
                    näyttämölle juuri oikeaan paikkaan tehostaa työtä ja
                    parantaa turvallisuutta. Selkeä ja hyvin järjestetty
                    työpiste, olipa se sitten pysyvä tai väliaikainen,
                    varmistaa, että työntekijät voivat liikkua näyttämöllä
                    turvallisesti.
                  </p>
                  <p>
                    Työkalut ja materiaalilaatikot laitetaan riviin näyttämön
                    laidalle tai etureunaan. Tällä tavoin on helppo löytää mitä
                    tarvitsee, laatikoita ei tarvitse liikutella ja kulkutiet
                    pysyvät vapaina. Johdot vedetään heti oikeaan kohtaan, pois
                    kävely- tai ajoreiteiltä. Lavasteiden osat tuodaan
                    näyttämölle niin, että niitä ei tarvitse liikutella useaan
                    kertaan pystytysvaiheessa. Ihannetapauksessa ne sijoitetaan
                    näyttämölle samassa järjestyksessä kuin niitä käytetään.
                    Roskat ja jätteet poistetaan näyttämöltä välittömästi.
                    Lavasteet, joita ei käytetä, varastoidaan erikseen ja tyhjät
                    kuljetuslaatikot viedään pois näyttämöltä, jos mahdollista.
                  </p>
                  <p>
                    <strong>Poistumisteiden</strong>
                    täytyy olla esteettömät ja{" "}
                    <strong>turvavälineisiin täytyy päästä käsiksi</strong>{" "}
                    kaikkina aikoina.
                  </p>
                  <p>
                    Joskus siisteys on ristiriidassa taiteellisten vaatimusten
                    kanssa. Usein likainen näyttämö on osa lavastusta. Tällöin
                    tarvitaan tiettyjä turvatoimia työntekijöiden, laitteiden ja
                    itse näyttämön suojelemiseksi. Näyttämön lattia pitää
                    suojella vaurioilta ja <strong>lattian kantokyky</strong>{" "}
                    pitää varmistaa.{" "}
                  </p>
                  <p>
                    Meidän pitää välttää materiaalien karkaamista niiden
                    käyttöalueen ulkopuolelle. Tämä on erityisen tärkeää
                    silloin, kun kyse on aineista, jotka voivat valua
                    alapuolella oleviin tiloihin tai leijua ilmassa.
                  </p>
                  <p>
                    <strong>Valaistusolosuhteet</strong>
                  </p>
                  <p>
                    Yksi turvallisen työn tärkeimmistä tekijöistä on kunnon
                    valaistus. Kun olemme rakentamassa esitystä, hyvä valaistus
                    auttaa näkemään mitä olemme tekemässä. Esityksen aikana
                    työskentely tapahtuu kuitenkin esitystä varten suunnitellun
                    valaistuksen ehdoilla. Tämän takia tarvitsemme näyttämön
                    sivuille valoja, jotka eivät näy katsomoon mutta
                    mahdollistavat liikkumisen ja työskentelyn. Tähän
                    tarkoitukseen käytetään useimmiten
                    <strong> sinistä valoa</strong>, joka ei heijastu mustista
                    tai tummansinisistä sivukatteista, mutta auttaa näkemään
                    eteensä kulisseissa.
                  </p>
                  <p>
                    Rajallisten valaistusolosuhteiden takia kompastumiset pitää
                    ehkäistä huolellisesti.{" "}
                    <strong>Portaat, esteet ja kulkuväylät </strong>
                    merkitään fosforiteipillä eli jälkiheijastavalla teipillä
                    tai muulla huomiomateriaalilla.
                  </p>
                  <p>
                    <strong>Korkean riskin alueet</strong>
                  </p>
                  <p>
                    Joihinkin pystytyksen vaiheisiin kuuluu vaarallisia
                    tehtäviä, kuten työskentely avoimella köysiullakolla tai
                    elementtien kokoaminen muiden työntekijöiden yläpuolella.
                    Muita riskitekijöitä ovat lattialuukkujen avaaminen sekä
                    liikkuvat nostolavat, orkesterimontut ja korokkeet. Näissä
                    tapauksissa vaarallinen alue <strong>aidataan</strong> ja
                    ainoastaan tehtävän edellyttämillä työntekijöillä on pääsy
                    kyseiselle alueelle. Heidän tulee käyttää asiaankuuluvia
                    henkilönsuojaimia riskin minimoimiseksi.
                  </p>
                  <p>
                    Harjoitusten ja esitysten aikana
                    <strong> taiteellisten syiden</strong> takia aidat ja muut
                    turvatoimet täytyy jättää pois. Silloin käytetään
                    vaihtoehtoisia keinoja huomion kiinnittämiseksi riskiin ja
                    työntekijöiden määrän minimoimiseksi korkean riskin
                    alueella. Turvatoimien poiston jälkeen alueelle päästetään
                    ainoastaan ihmisiä, joita tarvitaan näyttämöllä ja jotka on
                    koulutettu kyseistä tilannetta varten.
                  </p>
                  <p>
                    <strong>Erityistilanteet</strong>
                  </p>
                  <p>
                    Jotkut näyttämöllä suoritettavat tehtävät heikentävät
                    työolosuhteita. Valojen suuntaaminen edellyttää pimeää
                    näyttämöä, jotta tehtävän voi hoitaa kunnolla. Muun
                    toiminnan pitää sopeutua tai pysähtyä siksi aikaa.
                  </p>
                  <p>
                    <strong>Soundcheck</strong> ja kaiutinjärjestelmän säätö
                    edellyttävät joskus järjestelmän käyttöä huomattavan
                    kovaäänisesti tai maksimiteholla. Tämän takia
                    keskusteleminen näyttämöllä on mahdotonta ja riskinä ovat
                    korkeat äänenvoimakkuudet. Vaikutusalueella olevien ihmisten
                    pitää käyttää kuulonsuojaimia.
                  </p>
                  <p>
                    <strong>Erikoistehosteiden </strong>
                    testaamiseen liittyy aina epävarmuustekijöitä. Emme voi
                    koskaan tarkasti tietää tehosteen laatua ja siihen liittyviä
                    riskejä, ennen kuin sitä testataan näyttämöllä täsmälleen
                    samoissa olosuhteissa, joissa sitä tullaan käyttämään.
                  </p>
                  <p>
                    Tavoitteena on, että näissä erityistilanteissa näyttämöllä
                    olisi ainostaan ihmisiä, joita tilanne suoranaisesti koskee.
                  </p>
                  <p>
                    <strong>
                      Ala- ja yläpuolella olevat koneet ja laitteet
                    </strong>
                  </p>
                  <p>
                    Pystytyksen ja purun aikana nostimet ja muu ripustuskalusto
                    liikkuvat ihmisten yläpuolella. Nostoa operoiva henkilö{" "}
                    <strong>varoittaa </strong>
                    kaikkia näyttämöllä olijoita liikkeistä erityisesti silloin,
                    kun liike tapahtuu päiden tasolla. Sinun pitää kuitenkin
                    itsekin <strong>tarkkailla</strong>, mitä pään yläpuolella
                    tapahtuu.
                  </p>
                  <p>
                    Riskejä aiheuttavat myös muut näyttämöllä olevat laitteet ja
                    työntekijöillä on velvollisuus suojata laitteet niin, että
                    ne eivät voi vahingoittaa ihmisiä, ja heidän pitää myös
                    aidata työskentelyalueet, mutta riski on silti aina
                    olemassa. Tapaturmien välttämiseksi on ensiarvoisen tärkeää
                    <strong> kiinnittää huomiota </strong>alati muuttuvaan
                    työympäristöön.
                  </p>
                  <p>
                    <strong>Koneiden suojaaminen</strong>
                  </p>
                  <p>
                    Kun vaarallisiin koneisiin ja laitteisiin on pääsy
                    henkilöillä, joilla ei ole koulutusta eikä lupaa niiden
                    käyttöön, ne täytyy suojata asiatonta käyttöä vastaan.
                    Nostinjärjestelmät, pyrotekniikka, nostolaitteet,
                    henkilönostimet ja sähkölaitteet, kuten myös rautaesiripun
                    käyttöpaneeli täytyy lukita.
                  </p>
                  <p>
                    <strong>
                      Alkoholi, huumeet ja muut työskentelyyn vaikuttavat aineet
                    </strong>
                  </p>
                  <p>
                    Kaikki aineet,jotka vaikuttavat kykyyn reagoida nopeasti,
                    ajatella kunnolla ja työskennellä tarkasti, pitää kieltää,
                    koska ne aiheuttavat riskin muille näyttämöllä olijoille.
                    Tämä kielto ei koske pelkästään näiden aineiden käyttöä vaan
                    myös vapaa-aikana tapahtuneen käytön vaikutuksia, jotka
                    tuntuvat myös työaikana.
                  </p>
                  <p>Kiellettyihin aineisiin kuuluvat: </p>
                  <ul>
                    <li>alkoholi kaikenlaiset</li>
                    <li>huumeet</li>
                    <li>
                      lääkkeet, joilla on samankaltaisia vaikutuksia (tarkasta,
                      mitä tuoteselosteessa sanotaan autolla ajamisesta ja
                      koneiden ja laitteiden käytöstä)
                    </li>
                  </ul>
                  <p>
                    Monet työnantajat noudattavat{" "}
                    <strong>nollatoleranssia</strong>, mutta
                    vähimmäisvaatimuksena on noudattaa samoja rajoituksia kuin
                    autolla ajettaessa.
                  </p>
                  <p>
                    <strong>Enimmäistyöaika</strong>
                  </p>
                  <p>
                    Aika jolloin ihminen voi työskennellä keskittyneesti on
                    rajallinen. Myös ahkerimmilla työntekijöillä on raja ajalle,
                    jolloin he voivat tehdä työnsä tarkasti ja reagoida
                    nopeasti. Ylittämällä nämä aikarajat he vaarantavat
                    työtoverinsa.
                  </p>
                  <p>
                    Tähän asiaan liittyy myös vuorokausilepo eli{" "}
                    <strong>lepoaika</strong> työvuorojen välillä. Lyhyiden
                    öiden ja unien takia ihminen reagoi hitaammin ja vähemmän
                    tarkasti.
                  </p>
                  <p>
                    Enimmäistyöaikaa ja vuorokausilepoa koskevat asetukset
                    vaihtelevat maittain. Joissain maissa enimmäistyöajan
                    ylittäminen on rangaistava teko. Suomessa pääsääntönä
                    vuorokausilevossa on, että työntekijälle on annettava
                    jokaisen työvuoron alkamista seuraavan 24 tunnin aikana
                    vähintään 11 tunnin pituinen keskeytymätön vuorokausilepo.
                    Vastaavasti pääsääntönä viikoittaisessa vapaa-ajassa on,
                    että työntekijä saa kerran seitsemän päivän aikana vähintään
                    35 tuntia kestävän keskeytymättömän lepoajan. Lepoaikoihin
                    on olemassa poikkeuksia esimerkiksi jaksotyössä ja
                    liukuvassa työajassa. Myös eri alojen työehtosopimuksissa on
                    eroja, joten varmista oma lepoaikasi.
                  </p>
                  <p>
                    <strong>Työskentely kolmansien osapuolten kanssa</strong>
                  </p>
                  <p>
                    Pystytyksen aikana näyttämöllä voi työskennellä myös
                    tuotannon ulkopuolisia työryhmiä. Lakiasioiden näkökulmasta
                    niitä kutsutaan “kolmansiksi osapuoliksi”. Kolmannet
                    osapuolet eivät saa aloittaa työskentelyä ennen kuin heille
                    on kerrottu paikalliset työhön ja turvallisuuteen liittyvät
                    asiat:
                  </p>{" "}
                  <ul>
                    <li>työn järjestäminen, paikalliset säädökset</li>
                    <li>käytettävissä olevat työvälineet, koneet jne.</li>
                    <li>olemassa olevat käytännöt</li>
                    <li>henkilönsuojainten käyttö</li>
                    <li>poistumistiet, turvavälineet, ensiapu</li>
                  </ul>
                  <p>
                    Toiminnat täytyy myös <strong>koordinoida</strong>. Täytyy
                    olla selvää, kuka on vastuussa mistäkin työn osaalueesta ja
                    mitä riskejä eri osapuolet aiheuttavat toisilleen. Täytyy
                    myös varmistaa, että kaikki osapuolet ovat päteviä
                    suorittamaan tehtävät turvallisesti.
                  </p>
                  <p>
                    Työantaja, joka kantaa kokonaisvastuun, usein{" "}
                    <strong>delegoi vastuun</strong> turvallisuusasioista
                    näyttämömestarille, järjestäjälle, stagemanagerille tai
                    muulle turvallisuusvastaavalle, joka pitää
                    tiedotustilaisuuden ja turvallisuusinfon ja kertoo kaikille
                    laatimansa aikataulun siitä, kuka näyttämöllä tekee mitä ja
                    milläkin hetkellä.
                  </p>
                  <p>
                    <strong>Kun asiat menevät vikaan</strong>
                  </p>
                  <p>
                    Poikkeustilanteessa tai onnettomuuden sattuessa sinun pitää
                    ensimmäiseksi varmistaa oma turvallisuutesi. Seuraava askel
                    on ilmoittaa tilanteesta turvallisuusvastaavalle ja pyrkiä
                    minimoimaan tapaturmasta aiheutuvat haitat. Pyri siihen,
                    että muut ihmiset eivät altistu riskille.
                    Turvallisuusvastaava käy{" "}
                    <strong>turvallisuusinfossa </strong>läpi esiintymispaikkaan
                    ja kulloiseenkin esitykseen liittyvät toimenpiteet ja
                    vastuunjaon hätätilanteen sattuessa.
                  </p>
                  <p>
                    Jos sinun pitää soittaa <strong>hätänumeroon</strong>, anna
                    tarkat tiedot:
                    <ul>
                      <li>Kerro, mitä on tapahtunut.</li>
                      <li>Kerro tarkka osoite, kunta ja tapahtuma.</li>
                      <li>Vastaa sinulle esitettyihin kysymyksiin.</li>
                      <li>Toimi annettujen ohjeiden mukaisesti.</li>
                      <li>Lopeta puhelu vasta saatuasi siihen luvan.</li>
                    </ul>{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isYleisoChecked()}>
              <h3>2.2 Yleisöturvallisuus </h3>
              {yleisoChecked ? (
                <div class="chapterText">
                  <p>
                    Ensisijainen vastuu yleisöturvallisuudesta on
                    toiminnanharjoittajalla tai tapahtuman järjestäjällä.
                    Yleisön turvallisuusasioista huolehtimiseen on tuotannossa
                    voitu nimetä erikseen henkilö. Hänen kanssaan pitäisi
                    keskustella aina, kun työskentelet yleisöalueella ja
                    muutamat perusperiaatteet auttavat ehkäisemään riskejä
                    siellä.{" "}
                  </p>
                  <p>
                    <strong>Vaihtoehtoiset tilat</strong>
                  </p>
                  <p>
                    Viime vuosina yhä useampia esityksiä on tuotettu paikkoihin
                    varsinaisten esitys- tai tapahtumatilojen ulkopuolella.
                    Näissä paikoissa esityksen järjestäjä yleensä rakentaa
                    katsomon ja tekninen henkilökunta osallistuu normaalia
                    enemmän yleisötilan luomiseen. Heidän pitää noudattaa{" "}
                    <strong>samoja turvaohjeita</strong> kuin tavallisessa
                    teatterissa ja pysyttäytyä niissä kompetensseissa, joihin
                    heidät on koulutettu.
                  </p>
                  <p>
                    <strong>Ulkoilmatapahtumassa tai väliaikaisessa</strong>{" "}
                    esiintymispaikassa täytyy luoda uusia toimintatapoja. Voi
                    olla tarvetta uudenlaiselle vastuunjaolle, uusille
                    turvallisuussäädöksille, vartioinnin lisäjärjestelyille ja
                    erikoisjärjestelyille yleisön suhteen.
                  </p>
                  <p>
                    Maasta riippuen joko paikallinen pelastuslaitos tai
                    aluehallinto tarkastaa, onko kaikki järjestetty säännösten,
                    lupien ja ohjeiden mukaan.
                  </p>
                  <p>
                    <strong>
                      Varmista kulkuväylät normaalia poistumista ja
                      hätätilanteita varten
                    </strong>
                  </p>
                  <p>
                    Minimoidaksemme riskit meidän täytyy varmistaa, että mitkään
                    yleisötilaan tehdyt muutokset eivät tuki yleisön
                    kulkuväyliä. Johtojen vedot pitää suunnitella niin, että ne
                    eivät luo kompastumisriskiä. Laitteita,
                    seurantavalonheittimiä, kameroita, henkilökunnan tuoleja tai
                    muuta vastaavaa ei saa sijoittaa{" "}
                    <strong>yleisön kulkuväylille</strong>. Luonnollisesti me
                    emme myöskään saa jättää tilaan roskia, tyhjiä laatikoita
                    tai muuta ylimääräistä.{" "}
                  </p>
                  <p>
                    <strong>Kulkureittien vähimmäisleveydet</strong> vaihtelevat
                    maittain ja joskus jopa paikallinen pelastusviranomainen
                    antaa erilliset määräyksensä. Joka tapauksessa on aina
                    olemassa vähimmäisleveys, johon vaikuttavat ihmisten
                    lukumäärä ja se, onko kulkuväylä tasainen, nouseva tai
                    laskeva.
                  </p>
                  <p>
                    <strong>
                      Varmista, että poistumis- ja turvavalot sekä turvamerkit
                      ovat selkeästi näkyvillä
                    </strong>
                  </p>
                  <p>
                    Yleisötilassa on kahdentyyppistä valaistusta lisäämässä
                    turvallisuutta. Toinen palaa jatkuvasti, jotta katsojat
                    näkevät minne mennä, jos heidän pitää lähteä tilasta
                    esityksen aikana. Näitä valoja kutsutaan{" "}
                    <strong>poistumisopastevalaistukseksi</strong>, jotka
                    useissa tapauksissa yhdistetään poistumistie- ja
                    turvamerkkeihin.
                  </p>
                  <p>
                    Toinen valaistustyyppi on <strong>turvavalaistus</strong>,
                    joka syttyy hätätilanteessa. Sen avulla ihmiset pääsevät
                    poistumaan tilasta, vaikka samaan aikaan olisi sähkökatkos.
                    Turvavalaistuksen valoteho on korkeampi kuin
                    poistumistieopasteiden.{" "}
                  </p>
                  <p>
                    Arkikielessä poistumisopastevaloista ja turvaloista
                    käytetään usein termiä hätävalot.
                  </p>
                  <p>
                    Missään tilanteessa poistumistieopasteita tai
                    turvavalaistusta{" "}
                    <strong>ei saa peittää tai kytkeä pois päältä</strong>, kun
                    yleisö on katsomossa.Jos havaitset minkäänlaisia poikkeamia
                    tai rikkinäisiä laitteita, ota yhteyttä
                    turvallisuuspäällikköön.
                  </p>
                  <p>
                    <strong>Putoamissuojaus</strong>
                  </p>
                  <p>
                    Kun pystytetään väliaikaisia rakennelmia, joihin yleisöllä
                    on pääsy, putoamissuojaus täytyy hoitaa erityisellä
                    huolella. Korokkeille ja muihin kohtiin, joissa on
                    putoamisvaara, täytyy asentaa <strong>kaiteet</strong>.
                    Katsomorakenteissa tuolien putoaminen estetään matalilla
                    kaiteilla katsomopalojen reunoilla. Korokkeille nousemista
                    varten täytyy olla myös kunnon portaat.{" "}
                  </p>
                  <p>
                    <strong>Näyttämötehosteet</strong>
                  </p>
                  <p>
                    Näyttämöllä käytettävät tehosteet voivat aiheuttaa riskin
                    yleisölle.{" "}
                  </p>
                  <ul>
                    <li>
                      <strong>Äänenvoimakkuudet </strong>voivat nousta liian
                      korkeiksi joissain katsomon osissa.
                    </li>
                    <li>
                      <strong>Laserit</strong> voivat vahingoittaa silmiä.
                    </li>
                    <li>
                      <strong>Strobovalot</strong> voivat laukaista epileptisen
                      kohtauksen.
                    </li>
                    <li>
                      <strong>Savu</strong> voi saada ihmiset paniikkiin tai
                      aiheuttaa hengitysoireita.
                    </li>
                    <li>
                      <strong>Tuli</strong> voi saada ihmiset paniikkiin.
                    </li>
                    <li>
                      <strong>Pyrotekniikka</strong> voi vahingoittaa korvia,
                      silmiä ja aiheuttaa palovammoja.
                    </li>
                    <li>
                      <strong>Blinderit eli häikäisyvalot</strong> voivat
                      sokaista silmät joksikin aikaa.
                    </li>
                  </ul>
                  <p>
                    Tärkeintä on olla altistamatta yleisöä riskille. Estämme
                    yleisöä pääsemästä liian lähelle ja rajoitamme tehosteet
                    turvalliselle tasolle. Jotkut ihmiset ovat kuitenkin
                    herkempiä, ja heitä varten meidän täytyy laittaa
                    sisääntulo-oville <strong>varoitukset</strong> näistä
                    riskeistä ja muutoin ennakolta informoida yleisöä
                    tehosteiden käytöstä.
                  </p>
                  <p>
                    <strong>Erityisjärjestelyjä erityisryhmille</strong>
                  </p>
                  <p>
                    Joidenkin katsojien kuten lasten, aisti- ja
                    liikuntarajoitteisten ihmisten sekä ikäihmisten vuoksi
                    täytyy joskus tehdä <strong>erityisjärjestelyjä</strong>.
                    Tämä voi tarkoittaa pienempiä aukkoja turvakaiteissa,
                    ramppeja tai pyörätuoleille varattuja paikkoja katsomossa.
                    Joissain maissa voidaan edellyttää valvojan nimeämistä
                    erityisryhmiin kohdistuvien riskien minimoimiseksi.
                  </p>
                  <p>
                    <strong>Työskentely yleisön yläpuolella</strong>
                  </p>
                  <p>
                    Poikkeustapauksissa meidän täytyy työskennellä yleisön
                    yläpuolella, tällöin tarvitaan ylimääräisiä turvatoimia ja
                    erityistä huomiota kiinnitetään putoaviin esineisiin.
                    Esimerkiksi kaikki yleisön yläpuolella työskentelevät
                    henkilöt tyhjentävät{" "}
                    <strong>taskunsa ja kaikki työkalut</strong> ja muut esineet
                    suojataan putoamisen varalta.
                  </p>
                  <p>
                    <strong>Vaaralliset alueet</strong>
                  </p>
                  Jos yleisöllä on pääsy näyttämölle tai huoltoalueille, meidän
                  täytyy lukita kaikki vaaralliset alueet, kuten kattoristikko
                  ja sillat, sähkökaapit ja varastot. Tällöin kiinteisiin
                  poistumisteihin voidaan joutua tekemään tilapäisiä muutoksia.
                  Silloin turvallinen toiminta täytyy varmistaa tilanteeseen
                  sopivin erityisjärjestelyin ja varmistaa kaikissa olosuhteissa
                  yleisön turvallisuus.
                  <p>
                    <strong>Toimintatavat</strong>
                  </p>
                  <p>
                    <strong>Menettelytavat</strong> täytyy varmistaa missä
                    tahansa teetkin töitä, mutta erityisesti silloin, kun
                    työskentelet yleisöalueella esityksen aikana. Silloin
                    käytännöt täytyy varmistaa yleisöturvallisuudesta vastaavan
                    henkilökunnan kanssa. He kertovat sinulle, miten toimit sekä
                    normaalitilanteissa että hätätilanteen sattuessa.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isKestavaChecked()}>
              <h3>2.3 Kestävä kehitys </h3>
              {kestavaChecked ? (
                <div class="chapterText">
                  <p>
                    Kestävän kehityksen täytyy olla osa työtämme. Esitystaide on
                    erittäin kuormittava ala. Me rakennamme lavasteita
                    käytettäviksi pari kertaa, kuljetamme niitä pitkiä matkoja
                    ja myöhemmin heitämme ne pois.
                  </p>
                  <p>Vähennä </p>
                  <ul>
                    <li>Käytä tavaraa, josta syntyy vähän jätettä.</li>
                    <li>Vähennä energian käyttöä.</li>
                    <li>
                      Vähennä jätettä valitsemalla tuotteita, joissa on
                      mahdollisimman vähän pakkausmateriaaleja, ja jotka voidaan
                      käyttää tehokkaasti hyödyksi ja sitten kierrättää.
                    </li>
                  </ul>
                  <p>Käytä uudelleen</p>
                  <ul>
                    <li>
                      Käytä säilytyslaatikot, pakkausmateriaalit ja jätteet
                      uudelleen aina kun mahdollista.
                    </li>
                  </ul>
                  <p>Kierrätä</p>{" "}
                  <ul>
                    <li>
                      Kierrätä jätteet hyötykäyttöön tai uusiksi tuotteiksi aina
                      kun mahdollista.
                    </li>
                  </ul>
                  <p>
                    Päivittäisessä työssämme voimme tehdä pieniä mutta tärkeitä
                    tekoja vähentääksemme ympäristönkuormitusta.
                  </p>
                  <p>
                    <strong>Energiankulutus</strong>
                  </p>
                  <p>
                    Paras tapa vähentää energiankulutusta on sammuttaa valot ja
                    laitteet, silloin kuin niitä ei käytetä. Esimerkiksi
                    työvalojen käyttö esitysvalojen sijaan vähentää
                    energiankulutuksen puoleen.
                  </p>
                  <p>
                    <strong>Kulutustavaroiden ja materiaalien käyttö</strong>
                  </p>
                  <p>
                    Käytämme paljon kulutustavaroita. Joillekin voi löytää
                    vaihtoehtoja ja loput voi kierrättää.
                  </p>
                  <ul>
                    <li>
                      <strong>Teipit</strong> voidaan korvata tarranauhoilla tai
                      vastaavilla uudelleen käytettävillä kiinnitystarvikkeilla.
                      Teipin säästämisen lisäksi ne pitävät myös johdot
                      puhtaina.{" "}
                    </li>
                    <li>
                      <strong>Kertakäyttöparistot</strong> voi korvata
                      ladattavilla akuilla tai akkuparistoilla
                    </li>
                    <li>
                      <strong>Värikalvot</strong> voi kierrättää, koska monet
                      yritykset ottavat ne pyydettäessä takaisin.
                    </li>
                    <li>
                      <strong>Paperin</strong> voi kierrättää tai paperityöt voi
                      tehdä sähköisesti.
                    </li>
                  </ul>
                  <p>
                    <strong>Jätteiden lajittelu</strong>
                  </p>
                  <p>
                    Jätteet voit lajitella huolellisesti. Näin perusmateriaalit
                    voidaan kierrättää turvallisesti ja vastuullisesti.
                    Paristot, maalit ja spray-purkit sekä vinyyliteipin voi
                    kierrättää, jos ne lajitellaan erikseen.
                  </p>
                  <p>
                    <strong>Liikkuminen</strong>
                  </p>
                  <p>
                    Liikkumisen järjesteleminen ja suunnitteleminen voivat
                    vähentää liikennettä. Yksinkertaiset järjestelyt kuten
                    kimppakyydit voivat puolittaa ajetut kilometrit.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isTurvallisuusChecked()}>
              <h3>2.4 Turvallisuuslainsäädäntö </h3>
              {turvallisuusChecked ? (
                <div class="chapterText">
                  <p>
                    Terveyteen, turvallisuuteen ja kestävään kehitykseen
                    liittyvistä asioista säädetään{" "}
                    <strong>
                      Euroopan unionin direktiiveissä, suosituksissa ja
                      standardeissa
                    </strong>
                    . EU-direktiivit asettavat meille sekä vähimmäisvaatimukset
                    ja perusperiaatteet, kuten ennaltaehkäisy ja
                    riskinarviointi, että määrittelevät työnantajien ja
                    työntekijöiden velvollisuudet.
                  </p>
                  <p>
                    Euroopan unionin suositukset pyrkivät helpottamaan{" "}
                    <strong>direktiivien</strong> toimeenpanoa ja
                    eurooppalaisten standardisointijärjestöjen omaksumien{" "}
                    <strong>standardien</strong>
                    noudattamista. Euroopan unionin{" "}
                    <strong>jäsenvaltiot</strong> integroivat direktiivit ja
                    standardit omaan lainsäädäntöönsä ja
                    standardointijärjestelmiinsä. Niillä on kuitenkin vapaus
                    noudattaa kansallisissa laeissaan myös EU:ta tiukempia
                    säännöksiä.
                  </p>
                  <p>
                    <strong>
                      Työturvallisuutta ja työterveyttä koskeva puitedirektiivi
                      (89/391/ETY)
                    </strong>
                  </p>
                  <p>
                    Kaikkein tärkein asiakirja meidän kannaltamme on
                    Työturvallisuutta ja työterveyttä koskeva puitedirektiivi
                    (89/391/ETY), jossa kuvataan yleiset periaatteet, joiden
                    mukaan työturvallisuus- ja terveysasioita käsitellään ja
                    alan ongelmia ehkäistään. Puitedirektiivi sisältää myös{" "}
                    <strong>
                      työnantajien ja työntekijöiden velvollisuudet
                    </strong>
                    .
                  </p>
                  <p>
                    Direktiivissä luetellut ennaltaehkäisyn yleiset periaatteet:
                  </p>
                  <ul>
                    <li>riskien välttäminen</li>
                    <li>riskien arvioiminen</li>
                    <li>riskien aiheuttajiin puuttuminen</li>
                    <li>työtehtävien mukauttaminen yksilöllisesti</li>
                    <li>mukautuminen tekniseen kehitykseen</li>
                    <li>
                      vaarallisten elementtien korvaaminen vaarattomilla tai
                      vähemmän vaarallisilla
                    </li>
                    <li>
                      yhtenäisen ennaltaehkäisevän toimintamallin kehittäminen
                    </li>
                    <li>
                      yleisten suojaamiskeinojen suosiminen (henkilökohtaisen
                      suojakeinojen sijaan)
                    </li>
                    <li>tarpeellisten ohjeiden antaminen työntekijöille</li>
                  </ul>
                  <p>Työnantajien ja työntekijöiden velvollisuudet: </p>
                  <p>
                    On työnantajan velvollisuus taata työntekijöiden
                    turvallisuus ja terveys kaikissa työhön liittyvissä
                    asioissa. Työnantaja ei saa velvoittaa työntekijää kattamaan
                    mitään turvallisuuteen ja terveyteen liittyviä kustannuksia.
                    Kun työnantaja sopii töiden suorittamisesta pätevän
                    ulkopuolisen palveluntarjoajan tai henkilön kanssa, tämä ei
                    vapauta työnantajaa työturvallisuuteen ja terveyteen
                    liittyvistä velvoitteista.
                  </p>
                  <p>
                    <strong>Muut direktiivit</strong>
                  </p>
                  <p>
                    Puitedirektiivistä johdetut direktiivit käsittelevät{" "}
                    <strong>yksittäisiä asioita</strong>. Nämä direktiivit
                    konkretisoivat puitedirektiivin sisältöjä tapauksissa,
                    joissa toiminnan yhtenäistäminen on tarpeen.
                  </p>
                  <p>Meidän alaamme eniten koskevat direktiivit: </p>
                  <p>Altistuminen fyysisille vaaroille: </p>
                  <ul>
                    <li>Direktiivi 2003/10/EY – melu</li>
                  </ul>
                  <p>Työpaikat, laitteet, kyltit, henkilönsuojaimet:</p>
                  <ul>
                    <li>Direktiivi 2009/104/EY – työvälineiden käyttö </li>
                    <li>
                      Direktiivi 92/58/ETY – turvallisuus- ja/tai terveysmerkit
                    </li>
                    <li>Direktiivi 89/656/ETY – henkilönsuojainten käyttö</li>
                    <li>Direktiivi 89/654/ETY – työpaikkojen vaatimukset</li>
                  </ul>
                  <p>
                    Taakkoja, ergonomiaa ja psykososiaalisia riskejä koskevat
                    säädökset:{" "}
                  </p>
                  <ul>
                    <li>Direktiivi 90/269/ETY – taakkojen käsittely käsin</li>
                  </ul>
                  <p>
                    <strong>Suositukset</strong>
                  </p>
                  <p>
                    Suositukset eivät ole sitovia, mutta ne auttavat
                    direktiivien noudattamisessa. Niihin on kerätty hyviä
                    käytänteitä ja konkreettisia esimerkkejä direktiivien
                    tulkinnasta.
                  </p>
                  <p>
                    <strong>Muut asiaan liittyvät dokumentit</strong>
                  </p>
                  <p>
                    EU:ssa on myös direktiivejä, jotka käsittelevät muita
                    terveyteen, turvallisuuteen ja kestävään kehitykseen suoraan
                    vaikuttavia asioita. Esimerkiksi direktiivit markkinoille
                    tuotavista laitteista määräävät, mitä vaatimuksia laitteiden
                    täytyy täyttää, kuinka tuotteen valmistajan täytyy
                    dokumentoida tuotteen käyttö jne.
                  </p>
                  <p>
                    Seuraavilla direktiiveillä on suora vaikutus meidän alaamme:{" "}
                  </p>
                  <ul>
                    <li>Direktiivi 2001/95 EY - tuoteturvallisuus</li>
                    <li>Direktiivi 2006/95/EY - sähkölaitteet</li>
                    <li>
                      Direktiivi 2006/42/EY - uusi direktiivi, joka koskee mm.
                      koneita, laitteita ja apuvälineitä
                    </li>
                    <li>Direktiivi 89/686/ETY – henkilönsuojaimet</li>
                  </ul>
                  <p>
                    <strong>Standardit</strong>
                  </p>
                  <p>
                    Yhtenäistetyt standardit konkretisoivat direktiivejä
                    tietyllä alalla tai tietyntyyppisissä laitteissa. Standardit
                    auttavat valmistajia rakentamaan laitteita, jotka vastaavat
                    direktiivien tuotteille asettamia vaatimuksia.
                  </p>
                  <p>
                    Standardit eivät kuulu lainsäädännön piiriin, joten jokainen
                    valmistaja joko noudattaa niitä tai on noudattamatta. Jos
                    valmistajat eivät kuitenkaan noudata kyseisiä standardeja,
                    niiden pitää todistaa, että tuotteet eivät ole ristiriidassa
                    EU:n lainsäädännön kanssa.
                  </p>
                  <p>
                    <strong>Paikalliset lait ja säännöt</strong>
                  </p>
                  <p>
                    Kansallisten ja EU-lainsäädännön lisäksi{" "}
                    <strong>paikallinen hallinto</strong>, pelastuslaitos tai
                    vakuutusyhtiö voi määrätä tiukempia sääntöjä. Useimmissa
                    esitystiloissa on talon säännöt ja tavat.
                  </p>
                  <p>
                    <strong>Turvallisuus ja vastuuvelvollisuus</strong>
                  </p>
                  <p>
                    Työnantajat ja turvallisuusvastaavat korostavat
                    <strong> turvallisuusasioiden dokumentoinnin</strong>{" "}
                    tärkeyttä, koska ne haluavat suojata itsensä ja edustamansa
                    organisaation tapaturmien varalta. Kun jotain tapahtuu,
                    tutkitaan, kuka asiassa on{" "}
                    <strong>vastuuvelvollinen</strong>.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isVaroitusChecked()}>
              <h3>2.5 Varoitusmerkit </h3>
              {varoitusChecked ? (
                <div class="chapterText">
                  <p>
                    Varoitusmerkit varoittavat vaarallisista aineista ja
                    tilanteista. Niitä sijoitetaan oviin, työpisteille,
                    laitteisiin ja tuotepakkauksiin.{" "}
                  </p>
                  <p>
                    Merkit ovat{" "}
                    <strong>
                      keltaisia kolmioita, joissa on musta reunus ja musta kuvio
                    </strong>
                    .{" "}
                  </p>

                  <img src={sign1} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Yleinen varoitusmerkki</strong>
                  </p>

                  <img src={sign2} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Vaarallinen jännite</strong>
                  </p>

                  <img src={sign3} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Riippuvia taakkoja</strong>
                  </p>

                  <img src={sign4} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Liikkuvia ajoneuvoja</strong>
                  </p>

                  <img src={sign5} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Lasersäteilyä</strong>
                  </p>

                  <img src={sign6} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Optista säteilyä</strong>
                  </p>

                  <img src={sign7} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Myrkyllistä ainetta</strong>
                  </p>

                  <img src={sign8} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Syövyttävää ainetta</strong>
                  </p>

                  <img src={sign9} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Tulenarkaa ainetta</strong>
                  </p>

                  <img src={sign10} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Hapettavia aineita</strong>
                  </p>

                  <img src={sign11} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Räjähtävää ainetta</strong>
                  </p>

                  <p>
                    <strong>Merkinnät</strong>
                  </p>
                  <p>
                    Varoitusmerkkiten lisäksi mustakeltaista teippiä käytetään
                    joskus merkitsemään kulkuväyliä, jotka täytyy pitää vapaina,
                    tai kiinnittämään huomio portaisiin. Tilanteissa, joissa
                    valaistus on alhainen, portaat voidaan merkitä myös
                    fosforiteipillä, joka hohtaa pimeässä.
                  </p>

                  <img src={sign12} alt="varoitusmerkki"></img>

                  <p>
                    Kun halutaan estää pääsy tietylle alueelle, käytetään usein
                    punavalkoista nauhaa.
                  </p>

                  <img src={sign13} alt="varoitusmerkki"></img>

                  <p> </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isKieltoChecked()}>
              <h3>2.6 Kieltomerkit </h3>
              {kieltoChecked ? (
                <div class="chapterText">
                  <p>
                    Kieltomerkit osoittavat, minkälainen käytös aiheuttaa
                    todennäköisesti terveys- tai turvallisuusriskin. Ne
                    näyttävät ainoastaan mitä tai ketä kielto koskee. Merkit
                    sijoitetaan oviin, työpisteille, välineisiin ja laitteisiin
                    tai tuotepakkauksiin. Pyöreissä merkeissä on{" "}
                    <strong>
                      punainen reunus ja viistottainen viiva valkoista taustaa
                      vasten
                    </strong>
                    . Musta merkki ympyrän sisällä osoittaa kielletyn toiminnan.
                  </p>

                  <img src={sign14} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Yleinen kieltomerkki</strong>
                  </p>

                  <img src={sign15} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Tupakointi kielletty</strong>
                  </p>

                  <img src={sign16} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Avotulen teko kielletty</strong>
                  </p>

                  <img src={sign17} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Vedellä sammuttaminen kielletty</strong>
                  </p>

                  <img src={sign18} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Älä käytä hissiä tulipalon sattuessa</strong>
                  </p>

                  <img src={sign19} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Älä lastaa raskaita kuormia</strong>
                  </p>

                  <img src={sign20} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Ajoneuvoilla ajo kielletty</strong>
                  </p>

                  <img src={sign21} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Tavaranjättö kielletty</strong>
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsSecondPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                2 Luo turvallinen ja ympäristöystävällinen työpaikka
              </h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}

      {thirdpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>3 Työskentele ergonomisesti</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isThirdPartShown()}
                >
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
                Ergonominen työskentely edellyttää, että noudatat ergonomian
                periaatteita työjärjestelyissä sekä välineiden ja materiaalien
                käsin tapahtuvassa käsittelyssä.{" "}
              </p>
            </div>
            <div class="chapterBox" onClick={() => isNostotChecked()}>
              <h3>
                3.1 Käsin tehtäviin nostoihin ja siirtoihin liittyvät riskit{" "}
              </h3>
              {nostotChecked ? (
                <div class="chapterText">
                  <p>
                    On tärkeää ymmärtää, että taakkojen <strong>painon</strong>{" "}
                    ja <strong>käsittelytavan </strong>
                    lisäksi myös työtehtävän <strong>toistuvuus</strong> ja
                    yksipuolisuus voivat aiheuttaa vahinkoa. Satojen pienten
                    tavaroiden siirtely voi aiheuttaa yhtä paljon vahinkoa kuin
                    yksi raskas taakka.
                  </p>
                  <p>
                    Tavaroiden käsittely työympäristössä voi aiheuttaa
                    erityyppisiä vaurioita ihmiskeholle. Esittelemme alla kolme
                    päätyyppiä: lyhytkestoiset vaivat, krooniset vaivat ja
                    stressiin liittyvät vaivat.
                  </p>
                  <p>
                    <strong>Lyhytkestoinen vaiva</strong>
                  </p>
                  <p>
                    Lyhytkestoisen vaivan{" "}
                    <strong>aiheuttaja on helppo tunnistaa</strong>. Vaiva voi
                    olla akuutti, kuten liukastumisesta tai putoamisesta johtuva
                    nilkan nyrjähdys. Vaiva voi ilmetä myös viiveellä, mutta
                    syyn ja seurauksen välillä on selvä yhteys: paikallinen
                    lihaksen väsyminen ja kivun tunne, yleinen väsymys tai
                    liikkeiden koordinaation huonontuminen ovat tyypillisiä
                    esimerkkejä.
                  </p>
                  <p>
                    <strong>Krooninen vaiva</strong>
                  </p>
                  <p>
                    Kroonisten vaivojen aiheuttajaa on{" "}
                    <strong>vaikeampi tunnistaa</strong>. Vaiva on yleensä
                    seurasta pitkäaikaisesta rasituksesta. Kyse on kehon
                    kulumisesta - vauriosta, joka aiheutuu samojen kehonosien
                    vuosia kestävästä (väärin)käytöstä ja ylikuormittamisesta.
                    Taakkojen painon ja käsittelytavan lisäksi merkityksellistä
                    on siis toiminnon toistuvuus.
                  </p>
                  <p>
                    Usein vauriota <strong>ei huomaa paikan päällä</strong>,
                    vaan myöhemmin, esimerkiksi kun keho on lepotilassa. Tämä on
                    tyypillinen esitysteknikon vapaa-ajantauti.
                  </p>
                  <p>
                    Kroonisia vaivoja voi aiheutua esimerkiksi polville,
                    lonkille tai olkapäille, mutta esitystekniikan alalla
                    työskentelevien yleisimmät ja vaikeimmat vaivat ovat selän
                    alueella. Näiden vaivojen ymmärtämiseksi täytyy tietää
                    <strong> perusasiat selkärangan rakenteesta</strong>.
                  </p>
                  <p>
                    Selkäranka muodostuu <strong>33 nikamasta</strong>, joita
                    erottavat toisistaan tyynymäiset välilevyt. Selkäranka
                    jaetaan neljään osaan. Levein näistä on lanneranka, joka
                    muodostuu viidestä nikamasta alaselän alueella. Sen täytyy
                    kannatella koko yläkehon paino ja samalla sen pitää olla
                    joustava ja kestää suurta rasitusta.
                  </p>
                  <p>
                    Selkärangan luuosia eli nikamia erottavat{" "}
                    <strong>välilevyt</strong>, joilla on kaksi päätehtävää:
                    vaimentaa selkään kohdistuvia kuormituksia ja mahdollistaa
                    selkärangan liike. Välilevyjen ansiosta selkäranka pääsee
                    joustamaan ja liikkumaan. Välilevyssä on kaksi osaa.
                    Ulompana on kiinteä sidekudossyinen rengas ja sisällä
                    hyytelömäinen ydin.
                  </p>
                  <p>
                    Normaalitilanteessa, esimerkiksi kun seisomme,{" "}
                    <strong>nikamat ovat kohtisuorassa</strong> toisiinsa
                    nähden. Välilevyt kannattelevat rankaan ja nikamiin
                    kohdistuvaa kuormitusta tasaisesti.
                  </p>
                  <p>
                    Kun taas kannamme <strong>raskaita taakkoja</strong>,
                    välilevyihin kohdistuva kuormitus kasvaa. Välilevyt painuvat
                    kasaan, neste puristuu ulos ja välilevy kovenee. Niin kauan
                    kuin välilevyt ovat kohtisuorassa nikamien kanssa, paine ei
                    kasva liian suureksi, vaan välilevyt kannattelevat nikamia
                    ja vaimentavat niihin kohdistuvan kuormituksen. Kun
                    kannettava taakka lasketaan alas, välilevyt palaavat
                    alkuasentoonsa.
                  </p>
                  <p>
                    Kun <strong>kumarrumme</strong> eteenpäin, selkäranka
                    taipuu. Tällöin välilevy puristuu kasaan etupuolelta ja
                    nikamiin kohdistuu epätasainen paine. Epätasainen kuorma
                    rajoittaa välilevyjen iskunvaimennuskykyä, mikä voi
                    nopeuttaa välilevyn rappeutumista.
                  </p>
                  <p>
                    Välilevyyn kohdistuvan väännön ja epätasaisesti jakautuvan
                    suuren paineen yhdistelmää pidetään kaikkeen pahimpana selän
                    terveyttä uhkaavana riskinä.
                  </p>
                  <p>
                    Välilevyt <strong>rappeutuvat</strong> ihan tavallisissakin
                    olosuhteissa iän myötä. Suuri kuormitus, väärät
                    toimintatavat ja joissain tapauksissa yksittäiset tapaturmat
                    nopeuttavat tätä prosessia. Oikeat tekniikat ja menetelmät
                    viivästyttävät rappeutumisen vaikutuksia.
                  </p>
                  <p>
                    <strong>Stressi</strong>
                  </p>
                  <p>
                    Fyysisten syiden lisäksi psykologiset tekijät voivat
                    aiheuttaa työperäisiä selkäongelmia. Stressitekijöitä on
                    kahta tyyppiä:{" "}
                  </p>
                  <ul>
                    <li>
                      Työn mielekkyyteen liittyvät tekijät, kuten{" "}
                      <strong>yksitoikkoisuus</strong> ja
                      <strong> tyytymättömyys</strong> työtilanteeseen,
                      esimerkiksi jos työskentelee varastossa, jossa ei koskaan
                      pääse näkemään työnsä tuloksia.
                    </li>
                    <li>
                      Työympäristöön suoraan liittyvät stressitekijät, jotka
                      ovat joko aisteihin liittyviä tai ulkoisia
                    </li>
                  </ul>
                  <p>
                    <strong>Aististressin </strong>
                    aiheuttaa prosessoitavan tiedon määrä. Kun lyhyessä ajassa
                    pitää prosessoida liikaa informaatiota ja työssä on tiukkoja
                    aikatauluja, työntekijän henkilökohtaiset rajat tulevat
                    vastaan. Tästä voi seurata näkökyvyn alentumista, työnteon
                    ja reagoinnin hidastumista sekä epäjärjestelmällistä
                    toimintaa.
                  </p>
                  <p>
                    <strong>Ulkoiset tekijät</strong> kuten melu ja savu voivat
                    voimistaa stressiä.
                  </p>
                  <p>
                    Stressin vaikutuksia on vaikea mitata ja ne ovat
                    yksilöllisiä, mutta tiedon ylikuormituksen vähentäminen,
                    tarkkaamon työrauhan takaaminen ja ulkoisen stressin
                    vähentäminen parantavat työterveyttä ja -hyvinvointia joka
                    tapauksessa.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isErgonomisetChecked()}>
              <h3>3.2 Ergonomiset työtavat </h3>
              {ergonomisetChecked ? (
                <div class="chapterText">
                  <p>
                    <strong>Ergonomiset tekniikat</strong> ohjeistavat, miten
                    laitteita ja muita taakkoja voi nostaa, siirtää, työntää tai
                    vetää aiheuttamatta akuutteja tai kroonisia vammoja keholle.
                    Tekniikat ovat osa suurempaa, ergonomisen työympäristön
                    kokonaisuutta. Kokonaisuus sisältää työjärjestelyt, fyysisen
                    työympäristön ja laitteiden ja muiden taakkojen siirtämiseen
                    käytettävät apuvälineet.
                  </p>
                  <p>
                    Myös harmittomalta vaikuttava toiminta voi aiheuttaa
                    terveyshaittoja, jos työympäristö ei ole sille otollinen.
                    Istuminen ahtaassa tilassa ohjauspöydän ääressä,
                    käytettävien laitteiden sijainti ja korkeuserot, selkärangan
                    kiertyminen näyttämön tapahtumia tarkkailtaessa sekä pitkään
                    jatkuvat toistuvat liikkeet hiirtä käytettäessä voivat
                    aiheuttaa selkä-, nivel- ja lihasvaivoja.
                  </p>
                  <p>
                    Samanlaisia vaaroja piilee{" "}
                    <strong>henkilönsuojainten</strong> väärinkäytössä tai
                    käyttämättä jättämisessä. Oikeanlaiset kengät vaimentavat
                    kehoon kohdistuvat iskut, oikeanlaiset käsineet varmistavat
                    paremman otteen jne.{" "}
                  </p>
                  <p>
                    <strong>Ennakoi ja valmistaudu</strong>
                  </p>
                  <p>
                    On parempi ennakoida mahdolliset ongelmat, kun taakka on
                    vielä vakaasti paikoillaan kuin havaita ongelma noston
                    puolivälissä, kun kuormaa kannatellaan hankalassa asennossa.
                  </p>
                  <p>
                    Ennen kuin aloitat, <strong>tarkista</strong> reitti. Mieti{" "}
                    <strong>miten</strong> kuorma on parasta nostaa ja siirtää.{" "}
                  </p>
                  <p>
                    <strong>Vältä nostamista</strong>
                  </p>
                  <p>
                    Kaikki, minkä voi siirtää nostamatta, vetämättä tai
                    työntämättä parantaa turvallisuutta. Tämä voidaan tehdä
                    käyttämällä oikeita apuvälineitä tai kallistamistekniikoita.{" "}
                    <strong>Kallistettaessa </strong>
                    taakan paino jätetään maahan ja taakkaa käännetään
                    luonnollista reittiä.
                  </p>
                  <p>
                    Tyypillinen esimerkki on kuljetuslaatikon kallistaminen.
                    Laatikko nostetaan kyljelleen, mutta paino pysyy pääasiassa
                    maassa.
                  </p>
                  <p>
                    Kallistamista voidaan käyttää myös taakan nostamiseksi
                    korkeammalle tasolle. Silloin tavara tuodaan lähelle
                    korkeampaa tasoa kuten kuljetusauton lastauslavaa tai
                    koroketta. Tavara kallistetaan kohti tason reunaa ja
                    nostetaan niin, että se pysyy koko ajan kiinni tason
                    reunassa. Lopuksi taakka liu’utetaan perille.
                  </p>
                  <p>
                    <strong>Ergonomiset työtavat</strong>
                  </p>
                  <p>
                    Tässä luvussa esitellään erilaisia periaatteita, työtapoja
                    ja vinkkejä pystysuuntaiseen liikkeeseen (nostaminen ja
                    kantaminen) sekä vaakasuuntaiseen liikkeeseen (vetäminen ja
                    työntäminen). Usein kuorman siirtämiseen ergonomisesti
                    tarvitaan näiden menetelmien yhdistelmää.
                  </p>
                  <p>
                    <strong>Pidä taakka lähellä kehoasi</strong>
                  </p>
                  <p>
                    Taakan painon lisäksi selkärangan kuormitukseen vaikuttaa
                    kuorman painopisteen ja kantajan selkärangan välinen
                    etäisyys vyötärön korkeudella. Pidä kuorman raskain puoli
                    kehoasi vasten. Jos kuormaa ei ole mahdollista saada lähelle
                    kehoa, yritä kuitenkin liu’uttaa se kohti kehoasi ennen
                    nostoa.
                  </p>
                  <p>
                    <strong>Jaa taakka molemmille käsille</strong>
                  </p>
                  <p>
                    Molempien käsien käyttäminen nostamiseen, vetämiseen ja
                    työntämiseen jakaa kuormituksen tasaisesti selkärangalle ja
                    hartioille. Me teemme tämän automaattisesti raskaiden
                    taakkojen kanssa, mutta on yhtä tärkeää tehdä se pienempien
                    painojen kanssa.
                  </p>
                  <p>
                    <strong>Seiso vakaasti</strong>
                  </p>
                  <p>
                    Ennen kuin nostat taakan, varmista että seisoma-asentosi on
                    vakaa. Pidä jalat hieman erillään (korkeintaan hartioiden
                    leveydellä), toinen jalka hieman toisen edessä, jotta
                    tasapaino on helpompi pitää (jalkaterä kuorman laitojen
                    suuntaisesti, jos kuorma on maassa). Varaudu jalkojen
                    siirtämiseen noston aikana vakaan asennon säilyttämiseksi.
                    Varmista, että ainakin toinen jalka on koko ajan tukevasti
                    lattialla. Kun asetat jalkaterät kuorman ympärille, kuorman
                    painopiste pysyy aina jalkojen välisellä tukialueella. Näin
                    seisoma-asento on aina vakaa.
                  </p>
                  <p>
                    <strong>Käytä jalkoja</strong>
                  </p>
                  <p>
                    Pidä alaselkä normaalilla S-kaarella ja käytä jalkojasi
                    nostamiseen. Noston alussa on parempi taivuttaa vähän
                    selkää, lanteita ja polvia kuin taittaa pelkkä selkä
                    (kumartua) tai taittaa lonkista ja polvista täysin
                    (kyykistyä). Älä laske selkää noston aikana yhtään alemmas.
                  </p>
                  <p>
                    Säilytä selän kaari myös silloin, kun lasket kuorman alas.
                    Selän voi loukata yhtä helposti taakkaa laskiessa kuin sitä
                    nostaessa. Jos taakka täytyy sijoittaa tarkasti tiettyyn
                    asentoon maassa, laske se ensin maahan ja liu’uta sen
                    jälkeen haluttuun paikkaan. Kun vedät tai työnnät kuormia,
                    voima otetaan lattiasta aina jalkojen kautta.
                  </p>
                  <p>
                    <strong>Käytä ylimääräistä tukipistettä</strong>
                  </p>
                  <p>
                    Ylimääräisen tukipisteen käyttö esimerkiksi silloin, kun
                    nostat jotain yhdellä kädellä, minimoi selkärangan
                    kuormituksen. Se kasvattaa myös tukipinta-alaa ja tekee
                    nostoasennosta vakaamman.
                  </p>
                  <p>
                    <strong>Pidä selkä suorana ja pää pystyssä</strong>
                  </p>
                  <p>
                    Selässä on luonnostaan kolme kaarta: sisäkaari alaselässä,
                    ulkokaari lapaluiden välissä sekä sisäkaari niskassa. Tässä
                    asennossa selkä pystyy parhaiten kannattelemaan taakkaa ja
                    välilevyt kuormittuvat vähiten. Paras tapa säästää selkää on
                    pyrkiä säilyttämään selän luonnollinen kaari koko päivän,
                    myös nostettaessa.
                  </p>
                  <p>
                    Pidä myös pää pystyssä, kun nostat tai kannat. Kun olet
                    saanut kuormasta hyvän otteen, katso eteenpäin, älä alas
                    kuormaan. Tämä pitää selkärangan oikeassa asennossa.
                  </p>
                  <p>
                    <strong>Vältä kiertoa ja vääntöä</strong>
                  </p>
                  <p>
                    Vältä selän kiertymistä ja nojaamista sivulle, erityisesti
                    silloin kun olet kumartunut alas. Hartiat tulee pitää
                    samalla tasolla ja samaan suuntaan kuin lanteet. Kun olet
                    nostamassa jotakin, on parempi kääntyä liikuttamalla jalkoja
                    kuin kiertämällä selkää. Koska jalkojen liike on
                    suositeltavampaa, kuorman kantomatkaa voi ihan hyvin vähän
                    kasvattaa.
                  </p>
                  <p>
                    <strong>Vältä tai vähennä dynaamista voimaa</strong>
                  </p>
                  <p>
                    Jos otat kiinni metrin korkeudelta putoavan kilon painoisen
                    esineen, vaikutus kehoon voi olla yli 15 kiloa.
                    Kiinniotettaessa putoavan esineen liikesuunnan myötäily ja
                    liikkeen hidastaminen vähitellen pienentävät liikevoimaa.
                    Käänteisesti tämä tarkoittaa myös sitä, että yhtäkkiset
                    liikkeelle lähdöt ja pysähdykset kasvattavat kehoon
                    kohdistuvaa terveysriskiä huomattavasti.
                  </p>
                  <p>
                    Kun vedät tai työnnät kuormaa, saata kuorma liikkeelle ja
                    pysäytä se rauhallisesti. Nopea kiihdytys ja hidastus
                    moninkertaistavat tarvittavat liikevoimat. Toinen hitaan
                    alun etu on se, että omaa painoa voi käyttää kuorman
                    saamiseksi liikkeelle.
                  </p>
                  <p>
                    <strong>Pyydä apua</strong>
                  </p>
                  <p>
                    Nosta ja siirrä tavaroita yksin ainoastaan, jos pystyt
                    tekemään sen helposti. Jos kuorma on liian raskas tai muuten
                    hankala nostettavaksi yksin, pyydä apua. Paikalliset säännöt
                    ja riskiarvio auttavat määrittämään turvallisen noston
                    rajat.{" "}
                  </p>
                  <p>
                    Kun siirrät jotakin yhdessä toisen henkilön kanssa, on
                    erittäin tärkeää nostaa ja laskea kuorma{" "}
                    <strong>yhtä aikaa</strong>. Muuten toimitte toisianne
                    vastaan ja toinen teistä päätyy kannattelemaan koko kuormaa
                    yksin. Siksi on suositeltavaa, että nostajat ovat
                    suunnilleen samanpituisia tai käyttävät apuna esimerkiksi
                    nostovöitä, jotka varmistavat taakan tasaisen jakaantumisen.
                    Tässä on selvää, että hyvä viestintä on ratkaisevan tärkeää.
                  </p>
                  <p>
                    <strong>Työntäminen voittaa vetämisen</strong>
                  </p>
                  <p>
                    Yleisesti ottaen on parempi työntää kuin vetää. Kehon painoa
                    voi käyttää tehokkaammin ja hartiat kuormittuvat vähemmän.
                    Selän säästämiseksi hyvä alkuasento on erittäin tärkeä. Kun
                    jalat ovat vähän harallaan ja toinen jalka on hieman toista
                    edellä, alkuasento on vakaa vetämistä tai työntämistä
                    varten. Jos jalat ovat liian lähellä toisiaan, nostaja voi
                    helposti kaatua eikä pysty käyttämään voimaa.
                  </p>
                  <h3 style={{ paddingLeft: 0 }}>
                    Erityishaasteita ja -tilanteita
                  </h3>
                  <p>
                    Yleisten ergonomisten toimintatapojen jälkeen esittelemme
                    esitystekniikan erityisiä haasteita.
                  </p>
                  <p>
                    <strong>Yhdellä kädellä nostaminen</strong>
                  </p>
                  <p>
                    Jos sinun pitää nostaa tai vetää jotain sivulla olevaa, on
                    parasta irrottaa toinen käsi ja näin välttää kehon
                    kiertyminen.
                  </p>
                  <p>
                    <strong>Korkeat ja litteät kuormat</strong>
                  </p>
                  <p>
                    Lavastetta on helpointa nostaa tarttumalla päätyihin.
                    Varmista, että sinun ja työkaverisi nosto-ote on peilikuvana
                    samanlainen. Nosta yhdellä kädellä ja työnnä lavastetta
                    hieman poispäin vartalostasi niin, että lavasteesta ja
                    käsivarsistasi syntyy kolmio. Näin pystyt kävelemään
                    vapaasti ja pitämään lavasteen tasapainossa.
                  </p>
                  <p>
                    <strong>Tekstiilien käsittely</strong>
                  </p>
                  <p>
                    Taustakankaat ja muut kookkaat tekstiilit ovat raskaita.
                    Suurin ongelma on kuitenkin se, että ne ovat pehmeitä eikä
                    niillä ole pysyvää muotoa. Jos siirtomatka on lyhyt, on
                    parasta vetää tekstiilit lattiaa pitkin. Jos siirtomatka
                    taas on pitkä, tekstiilit pitää rullata tai taitella
                    tiukasti, jotta siirto sujuu mahdollisimman helposti.
                  </p>
                  <p>
                    <strong>Tavaran nostaminen laatikosta tai häkistä</strong>
                  </p>
                  <p>
                    Nosto on vaikeaa, koska polvia ei voi koukistaa ja nosto on
                    tehtävä selällä. Yritä seisoa mahdollisimman lähellä
                    nostettavaa taakkaa ja nojata laatikkoon. Näin saat pidettyä
                    taakan mahdollisimman lähellä vartaloasi ja minimoit
                    selkärankaan kohdistuvan kuormituksen.
                  </p>
                  <p>
                    <strong>Vastapainojen kiinnittäminen</strong>
                  </p>
                  <p>
                    Teatteripaino pitää nostaa poispäin kehosta ja kiertää
                    kelkan kuormatanko. Yritä välttää kiertoliikettä, kun tuo
                    painot kuormatangon luo. Seiso köysistön edessä ja tuo paino
                    kuormalaatalle kaksin käsin. Säädä köysistön kuorman
                    korkeutta, jos pinosta on tulossa liian korkea.
                  </p>
                  <p>
                    <strong>
                      Kuljetuslaatikoiden kuljettaminen ramppia pitkin
                    </strong>
                  </p>
                  <p>
                    Pyörien päällä oleva kuljetuslaatikko rampilla on
                    lähtökohtaisesti epävakaa asetelma. Tilannetta auttaa, jos
                    kuljetuslaatikkoa siirretään tasaisella nopeudella.
                    Varmista, että kulkureitillä ei ole esteitä ja
                    kuljetusautossa tai rampin alla on tilaa, jotta et joudu
                    pysähtymään kaltevalla pinnalla. Käytä työntämiseen kehon
                    painoa ja pidä selkä suorana, kuten aikaisemmin on
                    ohjeistettu.
                  </p>
                  <p>
                    Kuljetuslaatikon siirtäminen ramppia pitkin alas tarkoittaa
                    käytännössä sen nopeuden hidastamista, koska muuten se
                    rullaisi alas itsestään. Varmista, että reitti takanasi on
                    vapaa ja työnnä laatikkoa kevyesti, ikään kuin olisit
                    työntämässä sitä ylöspäin.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isValineetChecked()}>
              <h3>3.3 Nosto-, kanto- ja siirtovälineet </h3>
              {valineetChecked ? (
                <div class="chapterText">
                  <p>
                    On olemassa satoja erilaisia nosto-, kanto- ja
                    siirtovälineitä, joita käytetään esitystekniseen
                    työskentelyyn.
                  </p>
                  <p>
                    <strong>Yleiskäyttöön sopivat laitteet ja välineet</strong>
                  </p>
                  <p>
                    Markkinoilla on paljon erilaisia standardisoituja nosto-,
                    kanto- ja siirtolaitteita ja välineitä, jotka sopivat
                    tavallisimpiin tilanteisiin. Useimmiten niistä voi olla
                    paljon apua myös esitys- ja tapahtumatuotannoissa.
                  </p>
                  <img src={sign22} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Kuljetusalusta eli ”dolly” tai ”paukkari”</strong>
                  </p>
                  <p>
                    Kuljetusalusta on pieni puinen tai muovinen levy, jonka alle
                    on kiinnitetty neljä pyörää. Joissain kuljetusalustoissa on
                    kaksi kiinteää ja kaksi kääntyvää pyörää. Kaikissa
                    alustoissa ei ole jarruja. Alustan päälle voi laittaa
                    laatikoita tai muita tavaroita ja siirtää paikasta toiseen.
                    Kuljetusalustan levyn materiaali synnyttää tarpeeksi kitkaa,
                    niin että kuormaa ja alustaa voidaan työntää yhtenä
                    pakettina. Tarvittaessa kuorma voidaan kiinnittää alustaan
                    hihnoilla.
                  </p>
                  <img src={sign23} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Nokkakärry</strong>
                  </p>
                  <p>
                    Nokkakärry on L-kirjaimen muotoinen työntökärry, jossa on
                    pieni metallinen lastitaso ja työntökahvat tai -aisa.
                    Joissakin kärryissä on molemmilla puolilla kolme pyörää
                    portaissa kulkemista varten. Jotkut kärryt voi helposti
                    taittaa kasaan niin, että niitä on helppo kantaa ja
                    kuljettaa. Nokkakärryillä siirretään raskaita laatikkomaisia
                    kuormia, jotka voidaan pinota päällekkäin. Kun lastitaso on
                    työnnetty kuorman alle, kärryä kallistetaan pyörien varassa,
                    kunnes painopiste on täsmälleen pyörienkohdalla. Näin
                    kuorman siirtämisessä tarvitaan voimaa ainoastaan
                    vaakasuunnassa tapahtuvaan liikkeeseen.
                  </p>
                  <img src={sign24} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Lavavaunu</strong>
                  </p>
                  <p>
                    Lavavaunussa on metallirunko, yleensä puusta tehty lava,
                    jossa on neljä pyörää sekä aisa vaunun työntämistä tai
                    vetämistä varten. Useimmissa vaunuissa on kaksi kiinteää ja
                    kaksi kääntyvää pyörää sekä mahdollisesti jarrut. Lavavaunu
                    on helppokäyttöinen ja vakaa apuväline useiden erimuotoisten
                    ja -tyyppisten tavaroiden siirtämiseen. Jarrut pitää laittaa
                    päälle, kun lavavaunuun lastataan kuormaa.
                  </p>
                  <img src={sign25} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Pöytävaunu</strong>
                  </p>
                  <p>
                    Pöytävaunussa on kaksi yleensä puusta tehtyä tasoa
                    nelipyöräisessä metallirungossa. Useimmissa vaunuissa on
                    kaksi kiinteää ja kaksi kääntyvää pyörää. Useimmissa
                    pöytävaunuissa on jarrut. Pöytävaunua on helppo käyttää muun
                    muassa tietokoneiden, ohjauspöytien ja rekvisiitan
                    siirtämiseen. Pöytävaunun etuna on se, että tavaroita
                    siirretään <strong>pöydän korkeudella</strong>.
                  </p>
                  <img src={sign26} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Levyvaunu eli ”kulissivaunu”</strong>
                  </p>
                  <p>
                    Levyvaunu on kuljetusväline, jossa on pitkä puinen lava ja
                    korkea metallinen kaide sekä työntöaisa. Levyvaunulla
                    kuljetetaan <strong>suuria levyjä </strong>
                    pystyasennossa. Pyörien sijoittelun ansiosta vaunun
                    kääntäminen suurten levyjen kanssa on helppoa. Levyvaunussa
                    on yleensä kaksi kiinteää pyörää keskellä ja molemmissa
                    päissä yksi kääntyvä pyörä. Etu- ja takapyörät ovat hieman
                    toisia pyöriä korkeammalla, jotta pienet esteet on helppo
                    ylittää. Levyvaunu on suunniteltu erityisesti suurten
                    liitteiden levyjen ja lavasteiden sekä pitkien palkkien
                    kuljettamiseen. Lastitaso ja kaide ovat kaltevassa kulmassa
                    niin, että levyt pysyvät paikoillaan. Kun vaunu lastataan,
                    levyt voi kääntää vaaka-asentoon.
                  </p>
                  <img src={sign27} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Haarukkavaunu</strong>
                  </p>
                  <p>
                    Haarukkavaunu on metallinen kuljetusväline, jonka
                    haarukkaosassa on pienet pyörät. Vaunua ohjaillaan
                    työntöaisalla, jossa on käsipumppumekanismi ja isommat
                    ohjauspyörät. Pumppumekanismilla haarukkaosa nostetaan irti
                    maasta. Haarukkavaunulla nostetaan esimerkiksi{" "}
                    <strong>kuormalavoja</strong>, joissa on (raskaita) kuormia
                    tai muita taakkoja, jotka ovat valmiita nostettavaksi maasta
                    ja kuljetettavaksi jonnekin. Vaunun haarukat rullataan
                    kuormalavan alle ja lava nostetaan pumppaamalla kahvasta ja
                    lasketaan vapauttamalla paine. Kun kuormalava on irti
                    maasta, sitä voidaan liikuttaa paikasta toiseen.
                  </p>
                  <img src={sign28} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Silmukkanostovyöt</strong>
                  </p>
                  <p>
                    Joustavissa silmukkanostovöissä on molemmissa päissä lenkit,
                    joita käytetään, kun tarvitaan parempi ote nostettaessa
                    raskaita tai hankalanmallisia tavaroita. Vyöt auttavat
                    saamaan hyvän otteen kuormasta ja tuomaan kuorman painon
                    lähemmäs kehoa.{" "}
                  </p>
                  <h3>Esitystekniikan erityisvälineet</h3>{" "}
                  <p>
                    Esitys- ja tapahtuma-alan ihmiset ovat luovasti kehittäneet
                    olemassa olevia apuvälineitä niin, että niitä pystyy käyttää
                    ergonomisemmin
                  </p>
                  <img src={sign29} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Flyygelin tai pianon siirtopyörät</strong>
                  </p>
                  <p>
                    Flyygelin siirtopyörä on pieni vaunu, jonka kolme pyörää
                    jakavat flyygelin jalkojen painon niin, että soitinta on
                    helpompi kuljettaa. Koska flyygelin omat pyörät voivat
                    vahingoittaa lattioita, siirtopyöriä käytetään soittimen
                    siirtämiseen näyttämöllä. Siirtopyörät asetetaan{" "}
                    <strong>flyygelin omien pienten pyörien alle </strong>
                    ja varmistetaan, että soitin kulkee tasaisesti.
                  </p>
                  <img src={sign30} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Ohjauspöydän käännin</strong>
                  </p>
                  <p>
                    Ohjauspöydän kääntimessä on metallirunko, jonka kaarevan
                    sivun avulla pöytä voidaan kääntää suoraan oikeaan asentoon.
                    Tätä apuvälinettä käytetään lähinnä isojen{" "}
                    <strong>analogisten äänipöytien kuljettamiseen</strong>.
                    Siirtoasennossa pöytä on pitkällä kyljellään. Käyttöä varten
                    se pitää kääntää ja nostaa pöydälle käyttöä varten. Kuljetin
                    kiinnitetään pöydän alle, kun se on pystyasennossa. Sitten
                    runko kallistetaan kaarevan kyljen kautta kuljetusasentoon.
                  </p>
                  <p>
                    <strong>Vastapainopöytä</strong>
                  </p>
                  <p>
                    Vastapainopöydät ovat vankkoja pöytiä, joissa on puinen
                    lastitaso, kestävä teräsrunko ja raskaita kuormia varten
                    suunnitellut pyörät. Vastapainopöydällä painot ovat samalla
                    tasolla kuin vastapainoalustat. Näin pystytään paremmin
                    välttämään selän kumartuminen ja kiertyminen yhtä aikaa.
                    Pöytä sijoitetaan tarpeeksi kauas vastapainoalustasta niin,
                    että selän kiertämisen sijaan liikutetaan jalkoja.
                  </p>
                  <p>
                    <strong>
                      Kuljetuslaatikko eli ”case”, ”keissi” tai ”noppa”
                    </strong>
                  </p>
                  <p>
                    Kuljetuslaatikko on tukeva laatikko, jonka puiset seinät on
                    liitetty toisiinsa alumiinilistoilla. Useimmissa
                    kuljetuslaatikoissa on{" "}
                    <strong>
                      kaksi kiinteää ja kaksi kääntyvää pyörää sekä kantokahvat
                    </strong>
                    . Joskus pyörissä on myös jarrut. Laatikot on suunniteltu
                    erityisesti esitystekniikan laitteiston turvallista
                    säilyttämistä ja kuljettamista varten. Joskus laatikot
                    tehdään tiettyä laitetta kuten ohjauspöytää tai
                    ketjunostinta varten.
                  </p>
                  <p>
                    <strong>Osastoitu kuljetuslaatikko</strong>
                  </p>{" "}
                  <p>
                    Osastoiduissa kuljetuslaatikoissa on puiset irrotettavat
                    välilevyt. Osastointi tehostaa työtä. Tavaroiden käsittelyn
                    ja nostelun vähentäminen estää selän ylikuormittumisen.{" "}
                  </p>
                  <p>
                    <strong>Sähkönostimen kuljetuslaatikko</strong>
                  </p>
                  <p>
                    Näissä laatikoissa on tarkasti suunniteltu osa, johon nostin
                    sopii täydellisesti ja toinen osa, jossa on tilaa ketjulle.
                    Pystytyksessä ensin kiinnitetään ketju ja sitten nostin
                    nostaa itsensä ylös kuljetuslaatikosta. Purussa sama tehdään
                    toisinpäin. Nostin laskee itsensä suoraan alapuolelle
                    sijoitettuun kuljetuslaatikkoon. Normaalikäytössä nostinta
                    ei tarvitse lainkaan nostella käsin.
                  </p>
                  <p>
                    <strong>Kuljetuslaatikosta työpisteeksi</strong>
                  </p>
                  <p>
                    Kuljetuslaatikko voidaan muuttaa työpisteeksi pöytätason
                    avulla. Kaikki työkalut on lajiteltu omiin
                    vetolaatikkoihinsa ja kuljetuslaatikon kannesta tulee
                    pöytätaso. Pöydän avulla saat mukavan, oikeankorkuisen
                    työasennon. Työkalut ovat järjestyksessä, joten niitä ei
                    tarvitse juurikaan nostella ja käsitellä.{" "}
                    <p>
                      <strong>Kaapelilaatikot</strong>
                    </p>
                    <p>
                      Kaapelilaatikot voidaan laittaa trussin tai nostinputken
                      alle niin, että kaapeleita ei tarvitse purkaa laatikosta.
                      Kun kaapelit on kiinnitetty nostojärjestelmään, ne
                      purkautuvat kun trussi tai putki nousee ylös ja kiertyvät
                      takaisin laatikkoon, kun nostinputki lasketaan alas.
                      Raskaita monijohdinkaapeleita ei siis tarvitse käsin
                      nostella.
                    </p>
                    <p>
                      <strong>Korokkeiden kuljetusvaunu</strong>
                    </p>
                    <p>
                      Ergonomisemmissa kuljetusvaunuissa lavat kuljetetaan
                      vaunuilla pystyasennossa lievästi kallistettuina. Nämä
                      vaunut on tehty niin, että lavojen jalat voidaan asentaa,
                      kun lava on vaunun kyydissä. Lava kallistetaan jaloilleen
                      eikä nostelua ja kantelua tarvita. Vaunu lastataan
                      päinvastaisessa järjestyksessä. Lava kallistetaan vaunun
                      päälle ja jalat irrotetaan.
                    </p>
                    <p>
                      <strong>Valojen kuljetusteline eli ”meat rack”</strong>
                    </p>
                    <p>
                      Valonheitinten varastointia ja kuljetusta varten on
                      olemassa oma metallinen teline, jossa on pyörät alla.
                      Telineeseen voi ripustaa valonheittimiä, joissa on
                      kiinnitin. Joissain telineissä on pysyvät mutta
                      säädettävissä olevat tangot heitinten ripustamista varten.
                      Jotkut telineet on suunniteltu neljän tai kuuden
                      valonheittimen tangolle. Joskus telineen lattialle voi
                      lastata lisävaruste- tai kaapelilaatikoita.
                    </p>
                    <p>
                      <strong>Tanssimattojen kuljetusvaunu</strong>
                    </p>
                    <p>
                      Tanssimattojen kuljetusvaunuissa on metallirunko ja neljä
                      pyörää. Ne on suunniteltu raskaiden tanssimattorullien
                      varastoimiseen ja kuljettamiseen. Useimmissa vaunuissa on
                      kääntyvät pyörät. Joissain malleissa on myös toiminto,
                      joka helpottaa mattojen käärimistä ja avaamista.
                    </p>
                    <p>
                      <strong>Tekstiilien kuljetusvaunu</strong>
                    </p>
                    <p>
                      Näyttämöllä käytettävien verhojen ja muiden pehmeiden
                      tavaroiden kuljetukseen on olemassa oma vaununsa, jossa on
                      metallirunko ja kankainen koriosa. Näiden vaunujen avulla
                      kankaat ja verhot voiottaa alas ja siirtää ilman että ne
                      koskettavat maata.
                    </p>
                    <p>
                      <strong>Rampit</strong>
                    </p>
                    <p>
                      Ramppi on metallinen kannettava ja kalteva levy, jonka
                      nostetut laidat estävät kuljetusvaunuja putoamasta.
                      Ramppeja käytetään, kun kuljetusreitillä on aukkoja tai
                      tasoeroja. Näin pyörillä kulkevia kuormia ei tarvitse
                      kantaa esteiden yli. Rampin pintamateriaali on liukumista
                      estävää niin, että jaloilla saa hyvän otteen, kun kuormia
                      työnnetään ylöspäin. Yleensä kaltevuus ei saa ylittää 30 %
                      (30 cm per metri).{" "}
                    </p>
                    <p>
                      <strong>Kiinteät ergonomiset apuvälineet</strong>
                    </p>
                    <p>
                      Väliaikaisessa käytössä olevien, liikuteltavien laitteiden
                      siirtelemiseen on olemassa paljon ergonomisia
                      apuvälineitä. Niiden lisäksi on olemassa rakennukseen
                      kiinteästi asennettuja ratkaisuja, kuten:
                    </p>{" "}
                    <ul>
                      <li>
                        Katsomoalueen yläpuolella oleva ketjunostin, jolla
                        raskaan miksauspöydän voi siirtää toiseen
                        miksauspaikkaan.
                      </li>
                      <li>Nostin valonheitinten nostamiseksi valosillalle.</li>
                      <li>
                        Tiivistetyt kuormaussillat, joiden nosto- ja
                        siltapöytien asentoa voi säätää.
                      </li>
                    </ul>{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
              maxHeight: "6em",
            }}
            onClick={() => setIsThirdPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>3 Työskentele ergonomisesti</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  marginBottom: "0.3em",
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}
      {fourthpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>4 Käytä henkilösuojaimia</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isFourthPartShown()}
                >
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa myöhemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
              maxHeight: "6em",
            }}
            onClick={() => setIsFourthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>4 Käytä henkilösuojaimia</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  marginBottom: "0.3em",
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}
      {fifthpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>
                  5 Varmista paloturvallisuus esitysympäristössä
                </h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isFifthPartShown()}
                >
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa myöhemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsFifthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                5 Varmista paloturvallisuus esitysympäristössä
              </h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}
      {sixthpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>
                  6 Työskentele korkealla turvallisesti
                </h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isSixthPartShown()}
                >
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa myöhemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsSixthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                6 Työskentele korkealla turvallisesti
              </h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}
      {seventhpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>
                  7 Käytä esitystekniikan tilapäissähköä turvallisesti
                </h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isSeventhPartShown()}
                >
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa myöhemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsSeventhPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                7 Käytä esitystekniikan tilapäissähköä turvallisesti
              </h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}
      {eightpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>
                  8 Käytä työkaluja turvallisesti
                </h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isEightPartShown()}
                >
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa myöhemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
              maxHeight: "6em",
            }}
            onClick={() => setIsEightPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                8 Käytä työkaluja turvallisesti
              </h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  marginBottom: "0.3em",
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}
      {ninthpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>
                  9 Työskentele turvallisesti kemikaalien kanssa
                </h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isNinthPartShown()}
                >
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa myöhemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsNinthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                9 Työskentele turvallisesti kemikaalien kanssa
              </h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}
      {tenthpartShown ? (
        <div>
          <div class="materialBox" style={{ marginBottom: "60px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>
                  10 Pystytä ja ripusta esitystekniikka turvallisesti
                </h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isTenthPartShown()}
                >
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa myöhemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              marginBottom: "6em",
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsTenthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                10 Pystytä ja ripusta esitystekniikka turvallisesti
              </h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ETTEmaterial;
