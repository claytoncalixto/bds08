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

const ResultCard = ({ title, description, url, location, avatar_url }: Props) => {
  return (
    
    <div className="result-container">
      <div className="img-container">
        <img src={avatar_url} alt=''/>
           
        <h3 className="result-tile">{title}</h3>   
        <p className="result-description">{description}</p>   
      </div>
    </div>
  );
};

export default ResultCard;
