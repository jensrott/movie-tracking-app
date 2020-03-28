import React from 'react'
import ReactDOM from 'react-dom'
import MovieDetail from '../MovieDetail'

import { cleanup } from '@testing-library/react';

afterEach(cleanup)

describe('MovieDetail', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MovieDetail />, div)
    })
})