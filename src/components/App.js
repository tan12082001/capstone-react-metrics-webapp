import '../styles/App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import { fetchEarthquakesData } from '../redux/items/itemsSlice';
import Home from './Homepage';
import Details from './DetailsPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEarthquakesData());
  }, [dispatch]);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
