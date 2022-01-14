import ResultCard from 'components/ResultCard';
import Search from 'pages/Search';
import { useState } from 'react';
import './styles.css';

type Address = {
  avatar_url: string;
  url: string;
  followers_url: string;
  location: string;
  name: string;
};

const Find = () => {
  
  const [address] = useState<Address>();

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
