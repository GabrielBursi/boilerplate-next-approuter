import { DefaultBreakpoints } from "styled-media-query";

export type breakpoints = keyof DefaultBreakpoints

export type MediaMatchProps = {
    lessThan?: breakpoints;
    greaterThan?: breakpoints;
}