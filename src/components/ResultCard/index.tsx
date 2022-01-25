import './styles.css';

type Props = {
  avatar_url?: string;
  location?: string;
  description?: string;
  followers?: string;
  name?: string;
  title?: string;
  url?: string;
};

const ResultCard = ({ title, description, url, location, avatar_url, name, followers }: Props) => {
  return (
    
    <div className="result-container">
      <div className="img-container">
        <img src={avatar_url} alt={name}/>
      </div>

      <div className="info-container">
        <h3>Informações</h3>
        <h6>Perfil: {url}</h6>
        <h6>Seguidores: {followers}</h6>      
        <h6>Localização: {description} </h6>
        <h6>Nome: {title}</h6>             
      </div>
    </div>
  );
};

export default ResultCard;
