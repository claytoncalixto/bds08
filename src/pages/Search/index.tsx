import './styles.css';
import { useState } from 'react';
import axios from 'axios';
import ResultCard from 'components/ResultCard';

type FormData = {
  user: string;
};

type Address = {
  avatar_url: string;
  url: string;
  followers_url: string;
  location: string;
  following: string;
  name: string;
};

const Search = () => {
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
      .get(`https://api.github.com/users/${formData.user}`)
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
    <div className="container search-container">
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h1 className="text-primary">Encontre um perfil Github</h1>
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
      {address && <ResultCard
                   url={address.url}
                   followers={address.following}
                   description={address.location}
                   title={address.name}                   
                   />
      }
    </div>
  );
};

export default Search;
