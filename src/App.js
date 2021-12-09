import logo from "./logo.svg";
import "./App.css";
import "./styles/app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomepageCategories from "./components/HomepageCategories";
import QuizzesListning from "./components/QuizzesListning";
import {
  FaSearch,
  FaHome,
  FaBook,
  FaQuestion,
  FaPuzzlePiece,
  FaUser,
  FaCheckCircle,
  FaBookmark,
  FaHeart,
} from "react-icons/fa";
import { GrFormNext, GrRotateLeft } from "react-icons/gr";
import { MdMenuBook } from "react-icons/md";
import { useHistory, useLocation, withRouter } from "react-router";
import QuizzExample from "./components/QuizzExample";
import SavedQuizzesListning from "./components/savedQuizzeslist";
import LoginComponent from "./components/LoginComponent";
import { useState, useEffect } from "react/cjs/react.development";
import { auth } from "./firebaseConfig";
import "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import ETTEmaterial from "./ETTEmaterial";
import SavedMaterialList from "./components/MaterialList";
import firebase from "firebase";

function App() {
  const [isLoggedIn, setIsLoggenIn] = useState(false);
  const [value, setValue] = useState("Email");
  const [token, setToken] = useState();
  const [checked, setChecked] = useState(true);
  const [showError, setShowError] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const emaill = "";

  const updateUserEmail = (value) => {
    // setUserEmail(value)
  };

  const checkLogin = () => {
    const currentUser = localStorage.getItem("user");
    if (currentUser === null) {
      setIsLoggenIn(false);
    } else {
      setIsLoggenIn(true);
    }
  };

  const logOut = () => {
    setIsLoggenIn(false);
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    localStorage.removeItem("user");
    window.location.refresh(true);
  };

  const register = () => {
    setIsLoggenIn(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(formState.username, formState.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        localStorage.setItem("user", user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };

  const login = () => {
    console.log("logging in");
    firebase
      .auth()
      .signInWithEmailAndPassword(formState.username, formState.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        localStorage.setItem("user", user);
        setIsLoggenIn(true);
        //  CurrentUserProvider.setCurrentUser(user)

        // ...

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            console.log(user);
            setEmail(user.email);
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const [formState, setFormState] = useState({
    login: true,
    username: "",
    password: "",
  });

  const history = useHistory();

  return (
    <Router>
      {isLoggedIn ? (
        <div>
          <nav style={{ marginLeft: 0, paddingLeft: 0 }}>
            <ul
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 10px gray",
              }}
            >
              <li>
                <Link to="/">
                  <FaHome />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <FaBook />
                </Link>
              </li>
              <li>
                <Link to="/quizzes">
                  <FaPuzzlePiece />
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <FaUser />
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/quizzes">
              <Quizzes />
            </Route>
            <Route path="/quizzstart">
              <QuizzStartpage />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      ) : (
        <div>
          {registered ? (
            <div>
              <div class="header">
                <h1 class="bigHeader">BSafe</h1>
              </div>
              <div class="homeContainer">
                <h2 class="smallHeader" style={{ textAlign: "center", marginTop: "1.6em" }}>
                  Register
                </h2>
                <div
                  style={{
                    height: "7em",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <h5>Email</h5>
                  <input
                    style={{ width: "70%", marginLeft: "15%" }}
                    value={formState.username}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        username: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Your email"
                  />
                  <h5>Password</h5>
                  <input
                    style={{ width: "70%", marginLeft: "15%" }}
                    value={formState.password}
                    type="password"
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        password: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Your password"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    style={{ marginLeft: "15%", marginTop: 30 }}
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                  />

                  <p style={{ 
                      fontSize: 14,
                      marginTop: 30,
                      marginLeft: "0.2em",
                      width: "70%",}}>
                    Olen hyväksynyt tietosuojaevästeet tms. mitä ikinä tähän
                    laitetaankaan.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <button class="firstButton" onClick={() => register()}>
                    Rekisteröidy
                  </button>
                  <button
                    class="secondButton"
                    onClick={() => setRegistered(false)}
                  >
                    Löytyykö jo käyttäjä? Kirjaudu sisään
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div class="header">
                <h1 class="bigHeader">BSafe</h1>
              </div>
              <div
                class="homeContainer"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h2 class="smallHeader" style={{ textAlign: "center" }}>
                  Login
                </h2>
                <div
                  style={{
                    height: "7em",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <h5>Email</h5>
                  <input
                    style={{ width: "70%", marginLeft: "15%" }}
                    value={formState.username}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        username: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Your email"
                  />
                  <h5>Password</h5>
                  <input
                    style={{ width: "70%", marginLeft: "15%" }}
                    value={formState.password}
                    type="password"
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        password: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Your password"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    style={{ marginLeft: "15%", marginTop: 30 }}
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                  />

                  <p
                    style={{
                      fontSize: 14,
                      marginTop: 30,
                      marginLeft: "0.2em",
                      width: "70%",
                    }}
                  >
                    Olen hyväksynyt tietosuojaevästeet tms. mitä ikinä tähän
                    laitetaankaan.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <button class="firstButton" onClick={() => login()}>
                    Kirjaudu
                  </button>
                  <button
                    class="secondButton"
                    onClick={() => setRegistered(true)}
                  >
                    Ei vielä käyttäjää? Rekisteröidy
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Router>
  );
}

function Home() {

  const history = useHistory();
  return (
    <div>
      <div class="header">
        <h1 class="bigHeader">BSafe</h1>
      </div>
      <div class="homeContainer">
        <div style={{ width: "100%" }}>
          <h3 class="smallHeader" style={{ marginTop: "2em" }}>
            Tervetuloa! Aloita tästä
          </h3>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#5638D4",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => history.push("/about")}
          >
            <div style={{ flex: 3 }}>
              <h2
                class="bigHeader"
                style={{ marginLeft: 20, color: "white", left: 0, bottom: 0 }}
              >
                ETTE-materiaali kätevästi taskussasi
              </h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "60%",
                  fontSize: 70,
                  marginRight: 15,
                  color: "white",
                  transform: "rotate(20deg)",
                }}
              >
                <MdMenuBook />
              </p>
            </div>
          </div>

          <h3 class="smallHeader">Testaa tietosi</h3>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#588B8B",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => history.push("/quizzes")}
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "45%",
                  fontSize: 70,
                  marginLeft: 30,
                  color: "white",
                  transform: "rotate(-20deg)",
                }}
              >
                <FaPuzzlePiece />
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "85%",
                  fontSize: 50,
                  marginLeft: 7,
                  color: "white",
                  transform: "rotate(10deg)",
                }}
              >
                <FaCheckCircle />
              </p>
            </div>
            <div style={{ flex: 3 }}>
              <h2
                class="bigHeader"
                style={{ marginRight: 10, color: "white", textAlign: "right" }}
              >
                Testaa tietosi nopeilla testeillä eri osioista
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <div class="header">
        <h1 class="bigHeader">Pocket ETTE</h1>
      </div>
      <div class="homeContainer">
        <ETTEmaterial />
      </div>
    </div>
  );
}

function Quizzes() {
  return (
    <div>
      <div class="header">
        <h1 class="bigHeader">Quizzes</h1>
      </div>
      <div class="homeContainer">
        <QuizzesListning />
      </div>
    </div>
  );
}

function QuizzStartpage() {
  const history = useHistory();
  const location = useLocation();
  var quizzz = location.state;
  console.log("we got this item", location.state);
  return (
    <div class="homeContainer">
      <QuizzExample quizz={quizzz} />
    </div>
  );
}

function Saved() {
  return (
    <div>
      <div class="header">
        <h1 class="bigHeader">Bookmarks</h1>
      </div>
      <div class="homeContainer">
        <h3 class="smallHeader">Tallennetut Quizzit</h3>
        <p>
          Lista firebasesta kirjautuneen kÃ¤yttÃ¤jÃ¤n tallennetuista quizzeista.
        </p>
        <SavedQuizzesListning />

        <h3 class="smallHeader">Tallennetut kurssit</h3>
        <p>
          Lista firebasesta kirjautuneen kÃ¤yttÃ¤jÃ¤n tallennetuista kursseista.
        </p>
      </div>
    </div>
  );
  <SavedMaterialList />;
}

function Profile() {
  const [email, setEmail] = useState("");
  const currentUser = localStorage.getItem("user");
  console.log("is", currentUser);

  const login = () => {
    /* console.log('logging in')
    firebase.auth().signInWithEmailAndPassword(formState.username, formState.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem('user', user);
    setIsLoggenIn(true);
    CurrentUserProvider.setCurrentUser(user)
    
    // ...
*/
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log(user);
        setEmail(user.email);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    // })
    // .catch((error) => {
    //  var errorCode = error.code;
    //  var errorMessage = error.message;
    //  console.log(errorMessage)
    // });
  };

  useEffect(() => {
    login();
  }, []);
  
  const logOut = () => {
    //setIsLoggenIn(false)
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div>
      <div class="header">
        <h1 class="bigHeader">Profile</h1>
        <button class="logoutButton"
          onClick={() => logOut()}
        >
          Kirjaudu ulos
        </button>
      </div>
      <div class="homeContainer">
        <h3 class="smallHeader">Info</h3>
        <h4 style={{ paddingLeft: "0.7em" }}>Tervetuloa, {email}</h4>
        <h4 style={{ paddingLeft: "0.7em" }}>Trainee</h4>
        <h4 style={{ paddingLeft: "0.7em" }}>Other info</h4>

        <h3 class="smallHeader">Suoritetut testit</h3>
        <SavedMaterialList />
      </div>
    </div>
  );
}

function Login() {
  return (
    <div>
      <LoginComponent />
      <p>
        Olen hyvÃ¤ksynyt tietosuojaevÃ¤steet tms. mitÃ¤ ikinÃ¤ tÃ¤hÃ¤n
        laitetaankaan.
      </p>
    </div>
  );
}

export default App;
