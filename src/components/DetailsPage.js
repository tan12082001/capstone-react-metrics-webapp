import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemDetails from './ItemDetail';
import '../styles/Details.css';

const Details = () => {
  const items = useSelector((state) => state.items.items);
  const { id } = useParams();
  const itemInfo = items.find((item) => item.id === id);
  return (
    <div className="details-page">
      <ItemDetails itemInfo={itemInfo.properties} />
      <footer className="details-footer">
        <p>
          Credit to :
          <a className="footer-link" href="https://www.usgs.gov/programs/earthquake-hazards" target="_blank" rel="noopener noreferrer">USGS</a>
        </p>
      </footer>
    </div>
  );
};

export default Details;
