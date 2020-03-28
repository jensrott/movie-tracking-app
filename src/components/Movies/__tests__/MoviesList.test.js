import React from 'react'
import ReactDOM from 'react-dom'
import Movieslist from '../MoviesList'

import { cleanup } from '@testing-library/react';

afterEach(cleanup)

describe('MoviesList', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Movieslist />, div)
    })
})