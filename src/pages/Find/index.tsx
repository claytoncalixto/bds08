import axios from 'axios';
import ResultCard from 'components/ResultCard';
import Search from 'pages/Search';
import { useEffect, useState } from 'react';
import './styles.css'

type FormData = {
  user: string;
};

type Address = {
  avatar_url: string;
  url: string;
  followers_url: string;
  location: string;
  name: string;
};

const Find = () => {

  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    user: ''
  });

  useEffect(() => {
     axios.get(`https://api.github.com/users/${formData.user}`)
    .then(response => {
      setAddress(response.data)
    });
  }, [formData.user]);

  return (
    <>
      <Search />

      <div className="container find-container">

        <div className="container find-container-img">
          {address && (
            <ResultCard title="Imagem" description={address.avatar_url} />
          )}
        </div>

        <div className="container find-container-data">
          <h4>Informações</h4>
          {address && (
            <>
              <ResultCard title="Perfil: " description={address.url} />
              <ResultCard
                title="Seguidores: "
                description={address.followers_url}
              />
              <ResultCard title="Localidade: " description={address.location} />
              <ResultCard title="Nome: " description={address.name} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Find;
