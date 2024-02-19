import {render, fireEvent} from "@testing-library/react";
import { store } from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import NewQuestion from './NewQuestion';

describe('NewQuestion', () => {
    it('renders component correctly', () => {
        var component = render(
        <Provider store={store}>
            <Router>
              <NewQuestion />
            </Router>
        </Provider>
        )
        expect(component).toMatchSnapshot();
    });

    it('change input', () => {
        var component = render(
        <Provider store={store}>
            <Router>
              <NewQuestion />
            </Router>
        </Provider>
        );
        var headingElement = component.getByTestId("heading"); 
        var optionOneElement = component.getByTestId("optionOne");
        var optionTwoElement = component.getByTestId("optionTwo");  
        var btnSubmitElement = component.getByTestId("btnSubmit"); 

        expect(headingElement).toBeInTheDocument();
        expect(optionOneElement).toBeInTheDocument();
        expect(optionTwoElement).toBeInTheDocument();
        expect(btnSubmitElement).toBeInTheDocument();

        fireEvent.change(optionOneElement, {target: {value: "Option One"}});
        fireEvent.change(optionTwoElement, {target: {value: "Option Two"}});
        expect(optionOneElement.value).toBe("Option One");
        expect(optionTwoElement.value).toBe("Option Two");
    })
} )