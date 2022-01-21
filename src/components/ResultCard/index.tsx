import './styles.css';

type Props = {
  avatar_url?: string;
  title?: string;
  description?: string;
  followers?: string;
  name?: string;
  url?: string;
};

const ResultCard = ({ title, description, url, followers, name, avatar_url }: Props) => {
  return (
    <div className="result-container">
      <div className="img-container">
        <img src="{avatar_url}" alt="title" />
      </div>
      <div>
        <h2 className="result-info">Informações</h2>
        <p className="result-perfil">Perfil: </p><p className="result-url">{url}</p>
        <h3 className="result-followers">{followers}</h3> 
        <p className="result-description">{description}</p>
        <h3 className="result-title">{title}</h3>      
      </div>
    </div>
  );
};

export default ResultCard;
