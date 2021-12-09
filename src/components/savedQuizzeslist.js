//import GameStatsStyle from './gamestats.css';
import { GrFormNext, FaSearch } from "react-icons/fa";
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

function SavedQuizzesListning() {
  const [quizzess, setQuizzess] = useState([]);
  const [usersQuizzess, setUsersQuizzess] = useState([]);
  var addingList = [];

  var isQuizzSelected = false;

  const history = useHistory();

  const fetchQuizzes = async () => {
    const response = db.collection("usersSavedQuizzes");
    const data = await response.get().then((querySnapshot) => {
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach((element) => {
        var data = element.data();
        setQuizzess((arr) => [...arr, data]);
        for (var i = 0; i++; i -= quizzess.length) {
          if (quizzess[i].username === "testuser") {
            addingList.push(quizzess[i]);
          }
          setUsersQuizzess(addingList);
          console.log("adding list ", addingList);
        }
      });
    });

    console.log("fetched quizzes", quizzess, addingList);
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
              height: 110,
            }}
            onClick={() =>
              history.push({ pathname: "/quizzstart", state: item })
            }
          >
            <div style={{ flex: 5 }}>
              <h3 style={{ marginLeft: 20 }}>{item.quizzName}</h3>
              <p style={{ marginLeft: 20, float: "left" }}>{item.username}</p>
              <p style={{ marginLeft: 20, float: "left" }}>{item.date}</p>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "40%",
                  fontSize: 30,
                  zIndex: 2,
                  marginTop: 30,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                {item.correctAnswers}/10
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SavedQuizzesListning;
