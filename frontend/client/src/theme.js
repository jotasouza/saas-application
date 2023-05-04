export const colorTokens = {
    grey: {
        0: '#ffffff',
        10: '#f9fafb',
        50: '#9fa6b2',
        100: '#6c757d',
        200: '#343a40',
        300: '#212529',
        400: '#16181b',
        500: '#0b0c0d',
        600: '#000000',
    },
    primary: {
        50: '#83d18d',
        100: '#7ece89',
        200: '#6ec77f',
        300: '#5fc075',
        400: '#4fb96b',
        500: '#3fb161',
        600: '#3aab5b',
        700: '#32a150',
        800: '#2a8c46',
        900: '#23863f',
    },
};

export const themeSettings = (mode) => {
    return {
        palette: {
            primary: {
                dark: colorTokens.primary[900],
                main: colorTokens.primary[500],
                light: colorTokens.primary[100],
            },
            neutral: {
                dark: colorTokens.grey[600],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[100],
            },
            background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
            },
        },
        typography: {
            fontSize: 12,
            fontFamily: 'Roboto, sans-serif',
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            h1: {
                fontSize: '2.5rem',
                fontWeight: 700,
            },
            h2: {
                fontSize: '2rem',
                fontWeight: 700,
            },
            h3: {
                fontSize: '1.75rem',
                fontWeight: 700,
            },
            h4: {
                fontSize: '1.5rem',
                fontWeight: 700,
            },
            h5: {
                fontSize: '1.25rem',
                fontWeight: 700,
            },
            h6: {
                fontSize: '1rem',
                fontWeight: 700,
            },
            subtitle1: {
                fontSize: '1rem',
                fontWeight: 400,
            },
            subtitle2: {
                fontSize: '0.875rem',
                fontWeight: 400,
            },
            body1: {
                fontSize: '1rem',
                fontWeight: 400,
            },
            body2: {
                fontSize: '0.875rem',
                fontWeight: 400,
            },
            button: {
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'none',
            },
            caption: {
                fontSize: '0.75rem',
                fontWeight: 400,
            },
            overline: {
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'none',
            },
        },
        shape: {
            borderRadius: 4,
        },
        spacing: 8,
        shadows: [
            'none',
            '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
            '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)', 
        ],
    };
};
