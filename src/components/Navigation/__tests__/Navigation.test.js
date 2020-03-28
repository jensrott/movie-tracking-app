import React from 'react'
import Navigation from '../Navigation'
import ReactDOM from 'react-dom'

import { cleanup } from '@testing-library/react';

afterEach(cleanup)

describe('Navigation', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Navigation />, div)
    })
})