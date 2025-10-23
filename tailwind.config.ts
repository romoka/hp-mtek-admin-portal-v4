import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,ts}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
        },
        'on-primary': {
          DEFAULT: 'rgb(var(--color-on-primary) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
        },
        'on-secondary': {
          DEFAULT: 'rgb(var(--color-on-secondary) / <alpha-value>)',
        },
        info: {
          DEFAULT: 'rgb(var(--color-info) / <alpha-value>)',
        },
        'on-info': {
          DEFAULT: 'rgb(var(--color-on-info) / <alpha-value>)',
        },
        warning: {
          DEFAULT: 'rgb(var(--color-warning) / <alpha-value>)',
        },
        'on-warning': {
          DEFAULT: 'rgb(var(--color-on-warning) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
        },
        'on-success': {
          DEFAULT: 'rgb(var(--color-on-success) / <alpha-value>)',
        },
        danger: {
          DEFAULT: 'rgb(var(--color-danger) / <alpha-value>)',
        },
        'on-danger': {
          DEFAULT: 'rgb(var(--color-on-danger) / <alpha-value>)',
        },
        royal: {
          DEFAULT: 'rgb(var(--color-royal) / <alpha-value>)',
        },
        'on-royal': {
          DEFAULT: 'rgb(var(--color-on-royal) / <alpha-value>)',
        },
        gray: {
          DEFAULT: 'rgb(var(--color-gray) / <alpha-value>)',
        },
        'on-gray': {
          DEFAULT: 'rgb(var(--color-on-gray) / <alpha-value>)',
        },
      },
      fontFamily: {
        gilroy: [
          'Gilroy',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;