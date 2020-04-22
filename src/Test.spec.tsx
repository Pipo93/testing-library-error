import React from 'react'
import { render } from '@testing-library/react'
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

describe('Test styling of div component', (): void => {
  it('renders Grid with margin', (): void => {
    const { getByTestId } = render(
        <div data-testid="div-node" style={{ margin: '20px' }}>
          hallo
        </div>
    )

    expect(getByTestId('div-node')).toHaveStyle('margin: 20px;')
  })
})
