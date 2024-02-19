import {render, fireEvent} from "@testing-library/react";
import { store } from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import Login from './Login';
import { handleInitialData } from "../actions/shared"

describe('Login', () => {
    it('renders component correctly', () => {
        const component = render(
        <Provider store={store}>
            <Router>
              <Login />
            </Router>
        </Provider>
        )
        expect(component).toMatchSnapshot();
    });

    it('select employee', async() => {
        await store.dispatch(handleInitialData())

        const component = render(
        <Provider store={store}>
            <Router>
              <Login />
            </Router>
        </Provider>
        );
        var selectElement = component.getByTestId('select')
        expect(selectElement).toBeInTheDocument();

        fireEvent.change(selectElement, { target: { value:"johndoe" } })
        var options = component.getAllByTestId('select-option');

        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();

        var btnSubmit = component.getByTestId("btnSubmit")
        expect(btnSubmit).toBeInTheDocument();
        
        // fireEvent.click(btnSubmit)

        // expect(store.getState().authedUser).not.toBe(null);
    })
} )
