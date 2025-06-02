/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./templates/**/*.{html.php}",
        "./admin/**/*.{html.php}",
        "./includes/**/*.{html.php}",
        "./assets/**/*.{js}",
        "./public/**/*.{html.php}",
        "/public/includes/header.html"
    ],
    theme: {
        extend: {
            fontFamily : {
                inter: ["Inter", "sans-serif"],
                "times-new-roman" : ['Times New Roman']
            },
            colors : {
                Ungu : "#342545",
                Biru : "#342535",
                oren : "#C74D1E"
            }
        },
    },
    plugins: [],
}