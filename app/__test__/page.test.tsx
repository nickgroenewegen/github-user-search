import { useFormState } from 'react-dom'
import { render, screen } from '@testing-library/react'
import Page from '../page'

jest.mock('react-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-dom'),
  useFormState: jest.fn(() => []),
}))

test('Correctly renders the home and should be stable', () => {
  const { container } = render(<Page />)

  const heading = screen.getByRole('heading', { level: 1 })
  const paragraph = screen.getByRole('paragraph')
  const form = screen.getByRole('search')

  expect(heading).toBeInTheDocument()
  expect(paragraph).toBeInTheDocument()
  expect(form).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
