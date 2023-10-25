import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { Home } from '.'

describe('<Home/>', () => {
    it('should render', () => {
        render(<Home/>)

        expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument()
    })
})
