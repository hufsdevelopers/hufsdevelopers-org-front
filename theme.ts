import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts: {
    heading:
      '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    mono: 'JetBrains Mono, SFMono-Regular, Pretendard, Menlo, Consolas, PT Mono, Liberation Mono, Courier, monospace',
  },
  colors: {
    dark: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontSize: '2xl',
        fontWeight: 'black',
      },
    },
    Text: {
      baseStyle: {
        color: 'dark.600',
        fontFamily: 'body',
        lineHeight: '1.75',
        transition: 'all 0.3s ease-in-out',
        '.chakra-ui-dark &': {
          color: 'dark.200',
        },
      },
      variants: {
        navigation: {
          color: 'dark.900',
          fontSize: '0.95rem',
          fontWeight: 'extrabold',
          opacity: '1',
          userSelect: 'none',
          transition: 'opacity 0.15s ease-in-out',
          ':hover': {
            opacity: '0.75',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'dark.800',
        fontFamily: 'body',
        textDecoration: 'none',
        transition: 'all 0.3s ease-in-out',
        _hover: {
          textDecoration: 'none',
        },
        '.chakra-ui-dark &': {
          color: 'whiteAlpha.800',
        },
      },
      variants: {},
    },
  },
  layerStyles: {
    cover: {
      alignItems: 'center',
      bg: 'blackAlpha.50',
      '.chakra-ui-dark &': {
        bg: 'whiteAlpha.50',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
      },
      '.chakra-ui-dark': {
        bg: 'dark.900',
      },
      '*::selection': {
        background: 'blackAlpha.200',
        '.chakra-ui-dark &': {
          background: 'whiteAlpha.300',
        },
      },
    },
  },
  shadows: { outline: '0 0 0 2px var(--chakra-colors-blackAlpha-500)' },
});

export default customTheme;
