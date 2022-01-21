import axios from 'axios';
import ResultCard from 'components/ResultCard';
import Search from 'pages/Search';
import { useEffect, useState } from 'react';
import { on } from 'stream';
import './styles.css';

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {    
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setAddress(response.data);
        response.status.valueOf() ? <Find /> : <Search />;
      });
  }, [formData.user]);
  
    return (
      <>
        <Search />

        <div className="container find-container">
          <div className="container find-container-img">
            {address && (
              <ResultCard title={address.name} description={address.avatar_url} />
            )}
          </div>

          <div className="container find-container-data">
            <h4>Informações</h4>
            {address && (
              <>
                <ResultCard title={address.url} description={address.url} />
                <ResultCard
                  title={address.followers_url}
                  description={address.followers_url}
                />
                <ResultCard
                  title={address.location}
                  description={address.location}
                />
                <ResultCard title={address.name} description={address.name} />
              </>
            )}
          </div>
        </div>
      </>
    );
};

export default Find;
