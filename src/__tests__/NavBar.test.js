import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import BrowserRouter for routing context
import NavBar from '../components/NavBar';

jest.mock('../components/Icons', () => ({
  LogoIcon: () => <img src="valid-icon-path.png" alt="Logo" />,
  MicIcon: () => <img src="valid-icon-path.png" alt="Mic" />,
  SettingIcon: () => <img src="valid-icon-path.png" alt="Setting" />,
  BackwardIcon: () => <img src="valid-icon-path.png" alt="Backward" />,
}));

test('renders NavBar on home page', () => {
  const check = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );

  expect(check.getByText('EarthQuakes')).toBeInTheDocument();
});
