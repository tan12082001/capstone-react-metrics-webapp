import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ItemDetails from '../components/ItemDetail';

// Mock your Icons component
jest.mock('../components/Icons', () => ({
  PinIcon: () => <span>Mocked PinIcon</span>,
  WarningIcon: () => <span>Mocked WarningIcon</span>,
}));

const mockStore = configureMockStore();

const sampleItem = {
  id: '1',
  properties: {
    title: 'Earthquake 1',
    alert: 'Alert Message',
    mag: 1.1,
    type: 'earthquake',
    place: 'San Francisco',
    tsunami: 0,
    url: 'https://example.com',
    time: 1631116800,
  },
};

const initialState = {
  items: {
    items: [sampleItem],
    isLoading: false,
    error: null,
    filter: {
      minmagnitude: 8,
    },
  },
};

describe('ItemDetails testing', () => {
  test('renders ItemDetails with provided itemInfo', () => {
    const itemInfo = {
      title: 'Earthquake 1',
      alert: 'Alert Message',
      mag: 5.0,
      type: 'earthquake',
      place: 'San Francisco',
      tsunami: 0,
      url: 'https://example.com',
      time: 1631116800, // Assuming this is a valid timestamp
    };

    render(<ItemDetails itemInfo={itemInfo} />);

    expect(screen.getByText('Earthquake 1')).toBeInTheDocument();
    expect(screen.getByText('Earthquake')).toBeInTheDocument();
    expect(screen.getByText('Alert Message')).toBeInTheDocument();
    expect(screen.getByText('San Francisco')).toBeInTheDocument();
    expect(screen.getByText('20/1/1970, 2:35:16 am')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('More Info:')).toBeInTheDocument();
    expect(screen.getByText('USGS Event Link')).toBeInTheDocument();
    expect(screen.getByText('USGS Event Link')).toHaveAttribute('href', 'https://example.com');
  });
  test('Test for mock store', () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ItemDetails itemInfo={sampleItem.properties} />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('Earthquake 1')).toBeVisible();
  });
});
