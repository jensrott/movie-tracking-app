import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../Home'

import { cleanup } from '@testing-library/react';

afterEach(cleanup)

describe('Home', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div)
    })
})