import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Hello from './Hello'

test('renders app name and beta text', () => {
  render(
    <BrowserRouter>
      <Hello />
    </BrowserRouter>
  )
  const appName = screen.getByText((content, element) => element.textContent === 'SÖRCSAPP')
  expect(appName).toBeInTheDocument()
  const beta = screen.getByText((content, element) => element.textContent === 'Béta')
  expect(beta).toBeInTheDocument()
})
