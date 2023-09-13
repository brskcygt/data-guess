import { useMediaQuery, useTheme } from '@mui/material';

// Material-UI'nin breakpoints türünü kullanarak bir tür tanımı oluşturun
type Breakpoints = keyof typeof useTheme()['breakpoints'];

export default function useBreakpoint() {
  const { breakpoints } = useTheme();

  // Breakpoint anahtarlarını ters sırayla alın
  const keys = Object.keys(breakpoints).reverse() as Breakpoints[];

  // Varsayılan genişlik 'xs' olsun
  const valueWidth = keys.reduce((output, key) => {
    const matches = useMediaQuery(breakpoints.up(key));
    return !output && matches ? key : output;
  }, 'xs'); // Düzeltme: null yerine 'xs' kullanın

  // Medya sorgusu ifadesini düzenlemek için bir işlev tanımlayın
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
