/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/preline/preline.js',
    ],
    theme: {
        // colors: {
        //     'biru': '#4B49AC',
        //     'blue-soft': '#98BDFF',
        // },
        extend: {},
    },
    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
        require('daisyui'),
    ],
    daisyui: {
        themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "light", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
}