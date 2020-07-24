import React from 'react';
import App from '../App';
import BubblePage from '../components/BubblePage';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {getLogin as mockLogin} from '../utils/localStorage'

jest.mock('../utils/localStorage')

const tokenData = {payload: 'ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98'};

test('App renders without errors', () => {
    render(<App />)

    const title = screen.getByText(/welcome to the bubble app/i);
    expect(title).toBeInTheDocument();

    //checks for form being rendered 
    const username = screen.getByLabelText(/username/i);
    expect(username).toBeInTheDocument();

    const password = screen.getByLabelText(/password/i);
    expect(password).toBeInTheDocument();

    const loginBtn = screen.getByText(/login/i);
    expect(loginBtn).toBeInTheDocument();
})

test('Can log into App', async() => {
    render(<App />)

    const username = screen.getByLabelText(/username/i);
    const password = screen.getByLabelText(/password/i);
    const loginBtn = screen.getByText(/login/i);

    userEvent.type(username, 'username');
    expect(username).toHaveValue('username');

    userEvent.type(password, 'i<3Lambd4');
    expect(password).toHaveValue('i<3Lambd4');

    userEvent.click(loginBtn);

    await (() => {
         mockLogin.mockResolvedValueOnce(tokenData);
         expect(mockLogin).toHaveBeenCalledTimes(1);
    })

    localStorage.setItem('token', tokenData.payload);

    const token = localStorage.getItem('token');

    expect(token).toBe("ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98");
    
    
})