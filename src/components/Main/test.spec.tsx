import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main/>', () => {
    it('should render', () => {
        render(<Main/>)

		expect(screen.getByRole('heading', { name: /Main/i })).toBeInTheDocument()
    })
})
