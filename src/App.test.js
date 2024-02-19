import { render} from '@testing-library/react';
import { store } from "./store";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';

describe('App', () => {
  it('renders component correctly', () => {
      const component = render(
      <Provider store={store}>
          <Router>
            <App />
          </Router>
      </Provider>
      )
      expect(component).toMatchSnapshot();
  });
} )
