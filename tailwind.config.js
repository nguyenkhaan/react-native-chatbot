/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,ts,tsx}", "./src/**/*.{js,ts,tsx}"], //change the components to src -> nativewind css

    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: [],
};

//Doi khi reload lai cai file nay thi naivewind
