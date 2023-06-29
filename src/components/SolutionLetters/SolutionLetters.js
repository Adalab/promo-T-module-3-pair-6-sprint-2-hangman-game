import "../../styles/Letters.scss";
import PropTypes from "prop-types";
function SolutionLetters({ word, userLetters }) {
  const renderSolutionLetters = () => {
    const wordLetters = word.split("");
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className="letter">
          {exists ? letter : ""}
        </li>
      );
    });
  };
  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
}
SolutionLetters.propTypes = {
  word: PropTypes.string,
  userLetters: PropTypes.array,
};
export default SolutionLetters;
