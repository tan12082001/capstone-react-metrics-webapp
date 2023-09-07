import { useSelector } from 'react-redux';
import { useState } from 'react';
import EachItem from './EachItem';

const EarthQuakesList = () => {
  const [search, setSearch] = useState('');
  const items = useSelector((state) => state.items.items);
  const isLoading = useSelector((state) => state.items.isLoading);
  const error = useSelector((state) => state.items.error);

  const it = items.filter((item) => {
    const magnitude = item.properties.mag.toString();
    return magnitude.includes(search);
  });

  if (isLoading) {
    return <span>Loading EarthQuakes data...</span>;
  }

  if (error) {
    return <span>Something went wrong!</span>;
  }

  return (
    <>
      <div className="search-mag">
        <input
          className="search-input"
          type="number"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Magnitude"
          value={search}
        />
      </div>
      <div className="list-heading">
        EarthQuakes fetched:
        {' '}
        {items.length}
      </div>
      <div className="list-outer">
        {it.map((item) => (
          <EachItem key={item.id} item={item.properties} id={item.id} />
        ))}
      </div>
    </>
  );
};

export default EarthQuakesList;
