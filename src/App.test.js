import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import Episodes from './components/Episodes'
import {fetchShow as mockFetchShow} from './api/fetchShow'

test('renders app without errors', () => {
    render((<App/>).toContainHTML)
});

jest.mock('./api/fetchShow')

test('renders tv shows', async () => {
    mockFetchShow()
    expect(mockFetchShow).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(<Episodes/>).toBeVisible)
});