import React from 'react';
import BubblePage from '../components/BubblePage';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders with no errors', () => {
    render(<BubblePage />)
})