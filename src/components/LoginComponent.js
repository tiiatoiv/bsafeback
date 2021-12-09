//import GameStatsStyle from './gamestats.css';
import {  GrFormNext, FaSearch } from "react-icons/fa";
import SearchComponent from "./SearchComponent";
import Stageimage from '../images/stageimage.jpg'
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
//import firebase from 'firebase';
import { db } from "../firebaseConfig";



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


  
function LoginComponent() {

  const [userEmail, setUserEmail] = useState("");

    var isQuizzSelected = false

    const history = useHistory();

  /*  const fetchQuizzes = async () => {

      const response=db.collection('usersSavedQuizzes');
      const data=await response.get()
      .then((querySnapshot) => {
             
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data = element.data();
            setQuizzess(arr => [...arr , data]);
              
        });
    }) 

      console.log('fetched quizzes', quizzess)
     // data.docs.forEach(item=>{
    //  setQuizzess([...quizzess,item.data()])
    
    } */

    useEffect(() => {
  //    setQuizzess([]);
  //    fetchQuizzes();
    }, [])


    return (
      <div>
          <h2>Kirjaudu sisään</h2>
          <input value={userEmail} onChange={setUserEmail()}></input>
        </div>

        

    );
  }
  export default LoginComponent;