//import GameStatsStyle from './gamestats.css';
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormNext } from "react-icons/io";
import { useHistory } from "react-router";
import Firesafety from "../images/firesafety.jpg";
import QuizzComponent from "./QuizzComponent";
import "../styles/quizzes.css";

const quizzdata = [
  {
    id: 1,
    name: "Kysymys 1",
    description: "Mikä on vikana kuvassa?",
    image:
      "https://media.istockphoto.com/photos/safety-first-sign-isolated-on-white-background-picture-id913179886?k=20&m=913179886&s=612x612&w=0&h=ju5rh_2SBvKKfemXTGuug3g0EGu5A_5wy9KvOnqpvZo=",
    answers: [
      {
        answer1: "Ei mikään",
        isCorrect: 0,
      },
      {
        answer2: "Osa asioista",
        partText: 0,
      },
      {
        answer3: "Ihan kaikki",
        partText: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Kysymys 2",
    description:
      "Kuinka monta järjestyksenvalvojaa tarvitaan 100 hengen suuruisiin yleisötapahtumiin?",
    image:
      "https://media.istockphoto.com/photos/road-sign-3d-rendering-picture-id1060912048?b=1&k=20&m=1060912048&s=170667a&w=0&h=mXf0YDNfZjOGmVnsLFPcXjxZRklQ8AauXwa1voG8tl0=",
    answers: [
      {
        answer1: "First chapter",
        isCorrect: 1,
      },
      {
        answer2: "Second chapter",
        isCorrect: 0,
      },
      {
        answer3: "Third chapter",
        isCorrect: 0,
      },
    ],
  },
];

function QuizzExample({ navigation, quizz }) {
  var isQuizzSelected = false;
  const history = useHistory();
  var quizzWeGot = quizz;
  console.log(quizzWeGot, "jsjoasd");
  const [isQuizzStarted, setIsQuizzStarted] = useState(false);
  const [weGoWithThisQuizz, setWeGoWithThisQuizz] = useState({});

  const updateNewQuizz = () => {
    setWeGoWithThisQuizz(quizzWeGot);
    console.log(quizzWeGot, "yes ok");
  };

  useEffect(() => {
    updateNewQuizz();
  }, []);

  return (
    <div>
      {isQuizzStarted ? (
        <div></div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "#f7ece1",
            opacity: "1",
          }}
        >
          <div class="quizzStartBox">
            <h3 style={{ textAlign: "center" }}>{quizz.name}</h3>{" "}
            <p style={{ textAlign: "center" }}>
              Kun olet valmis aloittamaan testin klikkaa allaolevaa painiketta
              aloittaaksesi. Onnea!
            </p>
            <div class="buttonContainer">
              <button
                class="backButton"
                onClick={() => history.push("./quizzes")}
              >
                Peruuta
              </button>
              <button
                class="startButton"
                onClick={() => setIsQuizzStarted(true)}
              >
                Aloita testi
              </button>
            </div>
          </div>
        </div>
      )}
      <div class="quizzHeader">
        <h2>{quizz.name} </h2>
        <button
          onClick={() => history.push("/quizzes")}
          style={{
            margin: 10,
            borderWidth: 3,
            borderColor: "#cac4ce",
            borderRadius: 15,
            fontSize: 20,
            boxShadow: 0,
          }}
        >
          Poistu
        </button>
      </div>
      <div
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          height: 550,
          margin: 0,
          borderRadius: 10,
          borderColor: "#f7ece1",
        }}
      >
        <QuizzComponent quizzdata={quizzWeGot} navigation={navigation} />
      </div>
    </div>
  );
}
export default QuizzExample;
