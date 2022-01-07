import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  user: string;
};

type Address = {
  avatar_url: string;
  perfil: string;
  seguidores: string; 
  localidade: string;
  nome: string;
};

const StartSearch = () => {
  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.user}/json/`)
      .then((response) => {
        setAddress(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setAddress(undefined);
        console.log(error);
      });
  };

  return (
    <div className="start-search-container">
      <div className="container search-container">
        <h1 className="text-primary">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="container find-container" >
        <div className="container find-container-img">
        {address && (
          <ResultCard title="Imagem" description={address.avatar_url} />
        )}
        </div>
        <div className="container find-container-data">
        <h4>Informações</h4>
        {address && (
          <>
            <ResultCard title="Perfil" description={address.perfil} />
            <ResultCard title="Seguidores" description={address.seguidores} />
            <ResultCard title="Localidade" description={address.localidade} />
            <ResultCard title="Nome" description={address.nome} />
          </>
        )}
        </div>
      </div>
    </div>
  );
};

export default StartSearch;
