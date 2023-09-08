import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import EachItem from '../components/EachItem';
import store from '../redux/store';

jest.mock('../components/Icons', () => ({
  SirenIcon: () => <img src="valid-icon-path.png" alt="forward" />,
  ForwardIcon: () => <img src="valid-icon-path.png" alt="siren" />,
}));

describe('EachItem testing', () => {
  test('Case 1', () => {
    const items = {
      features: [
        { id: '1', properties: { title: 'Earthquake 1', mag: 1.1 } },
      ],
    };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <EachItem item={items.features[0].properties} id={items.features[0].id} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText('Earthquake 1')).toBeVisible();
    expect(screen.getByText(1.1)).toBeVisible();
  });
});
