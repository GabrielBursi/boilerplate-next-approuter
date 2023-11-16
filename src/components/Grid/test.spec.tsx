import { screen } from '@testing-library/react'
import { Grid } from '.'
import { render } from '../../utils'

describe('<Grid/>', () => {
    it('should render', () => {
        render(<Grid/>)

        expect(screen.getByRole('heading', { name: /Grid/i })).toBeInTheDocument()
    })
})
