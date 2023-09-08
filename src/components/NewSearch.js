import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetIcon } from './Icons';
import { fetchEarthquakesData, setMinMagnitude } from '../redux/items/itemsSlice';
import '../styles/Search.css';

const NewSearch = () => {
  const [minMag, setMinMag] = useState(8);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setMinMagnitude(minMag));
    dispatch(fetchEarthquakesData());
  };
  return (
    <div className="search-outer">
      <div className="search-info">
        <h3>
          Get
          <i> Major </i>
          {' '}
          and
          <i> Strong </i>
          {' '}
          Earthquakes happened between
          <i> 2001-01-01 </i>
          {' '}
          to
          <i> 2023-01-01 </i>
        </h3>
        <span>Major EarthQuakes: 7.0 - 7.9</span>
        <span>Great EarthQuakes: 8.0 - higher</span>
      </div>
      <div className="search-drop">
        <select className="mag-select" value={minMag} onChange={(e) => setMinMag(e.target.value)}>
          <option value={7.0}>7.0 (5 points)</option>
          <option value={7.1}>7.1 (6 points)</option>
          <option value={7.2}>7.2 (7 points)</option>
          <option value={7.3}>7.3 (8 points)</option>
          <option value={7.4}>7.4 (9 points)</option>
          <option value={7.5}>7.5 (10 points)</option>
          <option value={7.6}>7.6 (11 points)</option>
          <option value={7.7}>7.7 (12 points)</option>
          <option value={7.8}>7.8 (13 points)</option>
          <option value={7.9}>7.9 (14 points)</option>
          <option value={8.0}>8.0 or higher (15 points)</option>
          <option value={9.0}>9.0 (higher)</option>
        </select>
        <button type="button" className="search-button" onClick={handleSearch}>
          <GetIcon />
        </button>
      </div>
    </div>
  );
};

export default NewSearch;
