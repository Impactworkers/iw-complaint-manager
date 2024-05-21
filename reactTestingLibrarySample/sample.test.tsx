import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import assert from 'assert'
import SampleComponent from './sample'

test('renders hello world', () => {
  render(<SampleComponent />)
  const linkElement = screen.getByText(/Hello, World/i)
  assert.ok(linkElement)
})
