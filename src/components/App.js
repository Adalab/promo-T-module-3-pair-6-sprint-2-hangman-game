import { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
//components
import Header from "./Header/Header";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";
import Dummy from "./Dummy/Dummy";
import SolutionLetters from "./SolutionLetters/SolutionLetters";
import ErrorLetters from "./ErrorLetters/ErrorLetters";
// api
import getWordFromApi from "../services/api";
// styles
import "../styles/App.scss";
import "../styles/Dummy.scss";
import "../styles/Letters.scss";
import "../styles/Form.scss";
import "../styles/Header.scss";
import "../styles/Footer.scss";
import "../styles/Instructions.scss";
import "../styles/Loading.scss";
//images
import "../images/blackboard.jpg";

function App() {
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState("");
  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);
    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters userLetters={userLetters} word={word} />
          <Form lastLetter={lastLetter} handleLastLetter={handleLastLetter} />
        </section>
        <Dummy numberOfErrors={getNumberOfErrors()} />
      </main>
      <Footer NavLink={NavLink} />
    </div>
  );
}
export default App;
