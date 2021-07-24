import { render, screen } from '@testing-library/react'
import App from './App'

test('renders app name and coming soon text', () => {
  render(<App />)
  const appName = screen.getByText((content, element) => element.textContent === 'SÖRCSAPP')
  expect(appName).toBeInTheDocument()
  const comingSoon = screen.getByText((content, element) => element.textContent === 'Hamarosan...')
  expect(comingSoon).toBeInTheDocument()
})
