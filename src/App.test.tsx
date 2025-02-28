import { render, screen } from '@testing-library/react'
import App from './App.tsx'
import '@testing-library/jest-dom'

describe('App', () => {
  it('render hello vitest', () => {
    render(<App />)
    expect(screen.getByText('Hello Vitest')).toBeInTheDocument()
  })
})
