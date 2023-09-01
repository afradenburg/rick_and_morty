
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

  function login (userData){
    console.log(userData)
    if(userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home')
  } else{
    alert("incorrecto email o password")
  }
}
function logoutHandler() {
  setAccess(false);
}

useEffect(() => {
  !access && navigate('/');
     //eslint-disable-next-line
}, [access]);

  // nueva API
  //*https://rym2-production.up.railway.app/api/character/${id}?key=henrym-usuariodegithub

  function searchHandler(id) {
    axios(
      `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-afradenburg`
    ).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
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
    />
    )} 
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
      <Route 
      path="/home" 
      element={<Cards characters={characters} onClose={closeHandler} />} /> 
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
       <Route parth="*" element={<ErrorPage/>}></Route>
    </Routes>
      

      
    
    </div>
  );
}

export default App;
