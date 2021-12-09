//import GameStatsStyle from './gamestats.css';
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormNext } from "react-icons/io";
import { useHistory } from "react-router";
import Firesafety from "../images/firesafety.jpg";
import QuizzExample from "./QuizzExample";
//import firebase from 'firebase';
import { db } from "../firebaseConfig";
import firebase from "firebase";

function QuizzComponent({ quizzdata, navigation }) {
  const quizzdatanew = quizzdata;
  var [currentQuestion, setCurrentquestion] = useState(0);
  console.log("current question is now", currentQuestion);
  var showingQuestionArray = [quizzdata[currentQuestion]];
  const [showing, setShowing] = useState(quizzdata[0]);
  const [isReady, setisReady] = useState(false);
  const [isInfoSelected, setIsInfoSelected] = useState(false);
  var [imageurl, setimageurl] = useState(quizzdata.questions[0].image);
  var [qdescr, setQdescr] = useState(quizzdata.questions[0].description);
  var [currentCorrect, setCurrentCorrect] = useState(
    quizzdata.questions[0].correctAnswer
  );
  var [currentusersAnswer, setCurrentUsersAnswer] = useState(0);
  var [currentAnswers, setCurrentanswers] = useState(
    quizzdata.questions[0].answers
  );
  const [totalCorrect, setTotalcorrect] = useState(0);
  const [bgcolorf, setbgcolorf] = useState("#f7ece1");
  const [bgcolors, setbgcolors] = useState("#f7ece1");
  const [bgcolort, setbgcolort] = useState("#f7ece1");
  var correctAnswers = totalCorrect;
  const currentDate = Date();
  const history = useHistory();
  const [currentMultipleSelection, setCurrentMultipleSelection] = useState(1);
  console.log("ojfjpo9fdsjo", quizzdata);
  var questionlist = quizzdata.questions;
  console.log(questionlist);
  console.log("answers", quizzdata.questions[0].answers);
  const [emailInfo, setEmailInfo] = useState('');

  var quizzResultObject = {
    user: "testuser",
    quizzId: quizzdata.id,
    usersCorrectAnswers: totalCorrect,
    date: currentDate,
  };

  const login = () => {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const currentUser = localStorage.getItem('user');
        var uid = user.uid;
        console.log(user)
        setEmailInfo(user.email)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };

  const updateQuestion = () => {
    setbgcolorf("#f7ece1");
    setbgcolors("#f7ece1");
    setbgcolort("#f7ece1");
    console.log("we updating");
    if (currentCorrect === currentusersAnswer) {
      correctAnswers = correctAnswers + 1;
      setTotalcorrect(correctAnswers);
      console.log("user answered correct. total points ", correctAnswers);
    } else {
      console.log("user selected wrong answer");
    }

    setCurrentquestion(currentQuestion + 1);
    console.log("and now", currentQuestion);

    //this is still test code.
    //in reality when all questions are looped quizzResultObject is pushed to firebase
    //and user is redirected to quizzfinish page where result is shown and user can continue using the app otherwise
    if (currentQuestion === quizzdata.questions.length - 1) {

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const currentUser = localStorage.getItem('user');
          var uid = user.uid;
          console.log(user)
          setEmailInfo(user.email)
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      
      setisReady(true);
      setShowing(quizzdata[0]);
      setimageurl(quizzdatanew.questions[0].image);
      setQdescr(quizzdata.questions[0].description);
      setCurrentCorrect(quizzdata.questions[0].correctAnswer);

      db.collection("userResults").add({
        userEmail: emailInfo,
        correctAnswers: currentCorrect+1,
        date: currentDate,
        username: emailInfo,
        quizzName: quizzdata.name
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

      //createquizzresultobject
    } else {
      setShowing(quizzdata[currentQuestion + 1]);
      setimageurl(quizzdatanew.questions[currentQuestion + 1].image);
      setQdescr(quizzdata.questions[currentQuestion + 1].description);
      setCurrentCorrect(quizzdata.questions[currentQuestion + 1].correctAnswer);
      setCurrentanswers(quizzdata.questions[currentQuestion + 1].answers);

      // }
      // <img src={showing.image} alt="Logo" style={{marginLeft: '10%', height: '80%', width: '80%'}} />; tämä renderöintiin
    }
  };

  const onfirstupdate = () => {
    setShowing(quizzdata);
    setCurrentCorrect(quizzdata.questions[0].correctAnswer);
  };

  const selectFirst = () => {
    setCurrentUsersAnswer(1);
    setbgcolorf("#6603fc");
    setbgcolors("#f7ece1");
    setbgcolort("#f7ece1");
  };

  const selectSecond = () => {
    setCurrentUsersAnswer(2);
    setbgcolorf("#f7ece1");
    setbgcolors("#6603fc");
    setbgcolort("#f7ece1");
  };

  const selectThird = () => {
    setCurrentUsersAnswer(3);
    setbgcolorf("#f7ece1");
    setbgcolors("#f7ece1");
    setbgcolort("#6603fc");
  };

  const checkInfoStatus = () => {
    if (isInfoSelected === false) {
      setIsInfoSelected(true);
    } else {
      setIsInfoSelected(false);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    login();
    onfirstupdate();
  }, []);

  return (
    <div>
      {isReady ? (
        <div style={{ backgroundColor: "white", height: "100%" }}>
          <h2 style={{ textAlign: "center", marginTop: "20%" }}>
            Sait oikein {totalCorrect}/{quizzdata.questions.length}{" "}
            kysymyksestä!
          </h2>

          <button
            onClick={() => history.push("./quizzes")}
            style={{
              margin: 10,
              background: "white",
              borderWidth: 3,
              borderColor: "#5638D4",
              borderRadius: 10,
              height: 50,
              fontSize: 20,
              width: "25%",
              marginLeft: "40%",
              marginTop: 60,
            }}
          >
            Valmis
          </button>
        </div>
      ) : (
        <div>
          <h2> {} </h2>
          <h3 style={{ textAlign: "center" }}> {qdescr} </h3>

          <img
            src={imageurl}
            alt="Logo"
            style={{ marginLeft: "10%", height: "80%", width: "80%" }}
          />

          <div class="answersContainer">
            <button
              onClick={() => selectFirst()}
              style={{
                margin: 10,
                backgroundColor: bgcolorf,
                borderWidth: 3,
                borderColor: "#cac4ce",
                borderRadius: 10,
                height: "auto",
                padding: "0.2em",
                boxShadow: "0px 0px 10px lightgray",
                fontSize: 18,
                width: "auto",
              }}
            >
              {currentAnswers[0]}
            </button>

            <button
              onClick={() => selectSecond()}
              style={{
                margin: 10,
                background: bgcolors,
                borderWidth: 3,
                borderColor: "#cac4ce",
                borderRadius: 10,
                height: "auto",
                boxShadow: "0px 0px 10px lightgray",
                fontSize: 18,
                width: "auto",
                padding: "0.2em"
              }}
            >
              {currentAnswers[1]}
            </button>

            <button
              onClick={() => selectThird()}
              style={{
                margin: 10,
                background: bgcolort,
                borderWidth: 3,
                borderColor: "#cac4ce",
                borderRadius: 10,
                height: "auto",
                padding: "0.2em",
                boxShadow: "0px 0px 10px lightgray",
                fontSize: 18,
                width: "auto",
              }}
            >
              {currentAnswers[2]}
            </button>
          </div>

          <div
            style={{
              flex: 1,
              position: "absolute",
              bottom: 50,
              width: "100%",
              paddingLeft: "15%",
            }}
          >
            {isInfoSelected ? (
              <div style={{}}>
                <p>Täällä voisi olla vinkki mutta me emme auta sinua :).</p>
              </div>
            ) : (
              <div></div>
            )}

            <button
              onClick={() => checkInfoStatus()}
              style={{
                margin: 10,
                background: "#f7ece1",
                borderWidth: 3,
                borderColor: "#cac4ce",
                borderRadius: 10,
                height: 50,
                boxShadow: "0px 0px 5px lightgray",
                fontSize: 20,
                width: "25%",
              }}
            >
              ?
            </button>

            <button
              onClick={() => updateQuestion()}
              style={{
                margin: 10,
                background: "#f7ece1",
                borderWidth: 3,
                borderColor: "#5638D4",
                borderRadius: 10,
                height: 50,
                boxShadow: "0px 0px 5px lightgray",
                fontSize: 20,
                width: "25%",
              }}
            >
              Seuraava
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default QuizzComponent;
