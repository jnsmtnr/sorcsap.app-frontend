import { render, screen } from '@testing-library/react'
import Hello from './Hello'

test('renders app name and beta text', () => {
  render(<Hello />)
  const appName = screen.getByText((content, element) => element.textContent === 'SÖRCSAPP')
  expect(appName).toBeInTheDocument()
  const beta = screen.getByText((content, element) => element.textContent === 'Béta')
  expect(beta).toBeInTheDocument()
})
