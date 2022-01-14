import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-container-desafio">Desafio Github API</h2>
      <h6 className="home-container-bootcamp">Bootcamp Spring React - DevSuperior</h6>
      <Link to="/search">
        <button className="btn btn-primary btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
