import React from 'react'
import ReactDOM from 'react-dom'
import Movie from '../Movie'

import { cleanup } from '@testing-library/react';

afterEach(cleanup)

describe('Movie', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Movie />, div)
    })
})