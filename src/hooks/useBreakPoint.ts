import { useMediaQuery, useTheme } from '@mui/material';

type Breakpoints = keyof typeof useTheme;

export default function useBreakpoint() {
  const { breakpoints } = useTheme();
  const keys = Object.keys(breakpoints).reverse() as Breakpoints[];
  const valueWidth = keys.reduce((output, key) => {
    const matches = useMediaQuery(breakpoints.up(key));
    return !output && matches ? key : output;
  }, 'xs');
  const replaceQuery = (mediaFunc: string | null) => mediaFunc?.replace(/^@media( ?)/m, '') ?? false;

  return {
    between: (start: Breakpoints, end: Breakpoints) =>
      window.matchMedia(replaceQuery(breakpoints.between(start, end))).matches,
    down: (start: Breakpoints) => window.matchMedia(replaceQuery(breakpoints.down(start))).matches,
    up: (start: Breakpoints) => window.matchMedia(replaceQuery(breakpoints.up(start))).matches,
    only: (start: Breakpoints) => window.matchMedia(replaceQuery(breakpoints.only(start))).matches,
    valueWidth,
  };
}
