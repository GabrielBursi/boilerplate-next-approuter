import { css, styled } from "styled-components";
import media from "styled-media-query";
import { MediaMatchProps, breakpoints } from "./types";

const mediaMatchModifiers = {
        lessThan: (size: breakpoints) => css`
        ${media.lessThan(size)` display: block `}
    `,

        greaterThan: (size: breakpoints) => css`
        ${media.greaterThan(size)` display: block `}
    `
}

export const MediaMatch = styled.div<MediaMatchProps>`
    ${({ lessThan, greaterThan }) => css`
        display: none;

        ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
        ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
    `}
`