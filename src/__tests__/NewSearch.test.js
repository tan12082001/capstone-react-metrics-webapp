import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NewSearch from '../components/NewSearch';

jest.mock('../components/Icons', () => ({
  GetIcon: () => <button type="button">Mocked GetIcon</button>,
}));

test('NewSearch component render', () => {
  const tree = render(<Provider store={store}><NewSearch /></Provider>);
  expect(tree).toMatchSnapshot();
  expect(tree.getByText('Major EarthQuakes: 7.0 - 7.9')).toBeVisible();
  expect(tree.getByText('7.0 (5 points)')).toBeVisible();
});
