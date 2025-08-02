import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                ibm: ['"IBM Plex Sans"', 'sans-serif'],
                clash: ['"Clash Grotesk"', 'sans-serif'],
            },
            colors: {
                sidebar: '#1d232b',
            },
            animation: {
                rays: 'rays 60s linear infinite',
                'border-rotation': 'border-rotation 6s linear infinite',
                'border-x': 'border-x 6s linear infinite',
                'spin-border': 'spin-border 3s linear infinite',
            },
            screens: {
                xs: { max: '600px' },
            },
            keyframes: {
                rays: {
                    to: {
                        transform: 'translateX(-50%) translateY(-50%) rotate(360deg)',
                    },
                },
                'spin-border': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'border-x': {
                    '0%': { '--border-x': '0px' },
                    '100%': { '--border-x': '100%' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
