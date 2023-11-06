import { render } from '../../utils'
import { Container } from '.'
import { theme } from '../../styles'

describe('<Container/>', () => {
    it('should render the container', () => {
        const { container } = render(
            <Container>
                <span>Won Games</span>
            </Container>
        )

        expect(container.firstChild).toHaveStyleRule(
            'max-width',
            theme.grid.container
        )
    })
})
