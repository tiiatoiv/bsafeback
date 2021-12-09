//import GameStatsStyle from './gamestats.css';
import {  GrFormNext, FaSearch } from "react-icons/fa";
import "../styles/app.css";

const data =  [
    {
    name: 'Category1',
    id: 1,
    description: 'Course about light basics'
    },
    {
        name: 'Category2',
        id: 2,
        description: 'Course about stage basics'
        }
    ]

    var isQuizzSelected = false

function SearchComponent() {
  
  return (
      <div class="quizzTopNav">
        <div class="header">
          <h1 class="bigHeader">Quizzes</h1>
        </div>
      </div>
    );

  /*poistin hakupalkin väliaikasesti
    return (
      <div class="quizzTopNav">
        <div class="header">
          <h1 class="bigHeader">Quizzes</h1>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: "20px 0px 0px 0px",
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              width: "40%",
              height: 35,
              marginRight: "50%",
              marginRight: 10,
              marginBottom: 20,
            }}
          >
            <div style={{ flex: 4 }}>
              <p style={{ marginLeft: 20, marginTop: 5 }}>Search...</p>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ marginTop: "20%", fontSize: 20 }}>
                <FaSearch />
              </p>
            </div>
          </div>
        </div>
      </div>
    );*/
  }

  export default SearchComponent;