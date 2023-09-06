import { useSelector } from 'react-redux';
import EachItem from './EachItem';

const EarthQuakesList = () => {
  const items = useSelector((state) => state.items.items);
  const isLoading = useSelector((state) => state.items.isLoading);
  const error = useSelector((state) => state.items.error);

  if (isLoading) {
    return <span>Loading EarthQuakes data...</span>;
  }

  if (error) {
    return <span>Something went wrong!</span>;
  }

  return (
    <>
      <div className="list-outer">
        {items.map((item) => (
          <EachItem key={item.id} item={item.properties} id={item.id} />
        ))}
      </div>
    </>
  );
};

export default EarthQuakesList;
