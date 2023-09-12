
import {useState, useEffect} from "react";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import "./App.css";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Form from "./views/Form.jsx"
import ErrorPage from "./views/ErrorPage.jsx"
import Favorites from "./views/Favorites.jsx";



function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation()
  const navigate = useNavigate();
  const [access, setAccess] = useState(false)
  const EMAIL = "afradenbur@gmail.com"
  const PASSWORD = "123456a"

  function logOut (){
    navigate('/')
    logoutHandler()
  }

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }
 
function logoutHandler() {
  setAccess(false);
}

useEffect(() => {
  !access && navigate('/');
     //eslint-disable-next-line
}, [access]);

   function searchHandler(id) {
    axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    ).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }     
    })
  }

  function closeHandler(id) {
    // nos llega un string
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];
    let randomId = (Math.random() * 826).toFixed();
    randomId = Number(randomId);
    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }
 
  return (
    
    <div className="App">    
    {location.pathname !== "/" && (<Nav 
    onSearch={searchHandler} 
    randomize={randomHandler} 
    logout={logoutHandler}
    logOut={logOut}
    isActiveButtons={true}
    />
    )} 
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
      <Route 
      path="/home" 
      element={<Cards characters={characters} onClose={closeHandler} isActiveButtons={true} />} /> 
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
       <Route parth="*" element={<ErrorPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
