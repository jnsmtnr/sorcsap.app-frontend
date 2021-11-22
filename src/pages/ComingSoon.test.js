import { render, screen } from '@testing-library/react'
import ComingSoon from './ComingSoon'

test('renders app name and coming soon text', () => {
  render(<ComingSoon />)
  const appName = screen.getByText((content, element) => element.textContent === 'SÖRCSAPP')
  expect(appName).toBeInTheDocument()
  const comingSoon = screen.getByText((content, element) => element.textContent === 'Hamarosan...')
  expect(comingSoon).toBeInTheDocument()
})
