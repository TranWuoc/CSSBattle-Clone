import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                ibm: ['"IBM Plex Sans"', 'sans-serif'],
                // Bạn có thể thêm nhiều font khác nếu muốn:
                clash: ['"Clash Grotesk"', 'sans-serif'],
            },
            colors: {
                // Tùy chọn nếu bạn muốn định nghĩa màu riêng
                sidebar: '#1d232b',
            },
            animation: {
                rays: 'rays 60s linear infinite',
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
            },
        },
    },
    plugins: [],
};

export default config;
