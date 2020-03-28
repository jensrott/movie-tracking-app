import React from 'react'
import ReactDOM from 'react-dom'
import Favorites from '../Favorites'

import { cleanup } from '@testing-library/react';

afterEach(cleanup)

describe('Favorites', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Favorites />, div)
    })
})