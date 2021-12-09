//import GameStatsStyle from './gamestats.css';
import {
  FaSearch,
  FaBookmark,
  FaBook,
} from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import "../styles/quizzes.css"
import SearchComponent from "./SearchComponent";
import Stageimage from "../images/stageimage.jpg";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
//import firebase from 'firebase';
import { db } from "../firebaseConfig";

const data = [
  {
    name: "Category1",
    id: 1,
    description: "Course about light basics",
  },
  {
    name: "Category2",
    id: 2,
    description: "Course about stage basics",
  },
];

function QuizzesListning() {
  const [quizzess, setQuizzess] = useState([]);

  var isQuizzSelected = false;

  const history = useHistory();

  const fetchQuizzes = async () => {
    const response = db.collection("quizzes");
    const data = await response.get().then((querySnapshot) => {
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach((element) => {
        var data = element.data();
        setQuizzess((arr) => [...arr, data]);
      });
    });

    console.log("fetched quizzes", quizzess);
    // data.docs.forEach(item=>{
    //  setQuizzess([...quizzess,item.data()])
  };

  useEffect(() => {
    setQuizzess([]);
    fetchQuizzes();
  }, []);

  return (
    <div>
      {quizzess.map((item) => {
        return (
          <div class="quizzBox"
            onClick={() =>
              history.push({ pathname: "/quizzstart", state: item })
            }
          >
            <div style={{ flex: 5 }}>
              <h3 style={{marginBottom: 0}}>{item.name}</h3>
              <p style={{ marginLeft: 20, marginTop: "0.2em" }}>{item.description}</p>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "40%",
                  fontSize: 40,
                  zIndex: 2,
                  marginTop: 20,
                  marginLeft: 0,
                  marginBottom: 0,
                  color: "#6603fc",
                }}
              >
                <GrFormNext
                  onClick={() =>
                    history.push({ pathname: "/quizzstart", state: item })
                  }
                />
              </p>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
export default QuizzesListning;
