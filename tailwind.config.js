/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      googleFont: "'Merienda', cursive",
    },
    backgroundImage: {
      coffeeHouseHeader: "url(/public/img/desk-791178_1920.jpg)",
      coffeeHouseSection: "url(/public/img/paper-1074131_1920.jpg)",
      ourCoffeeHeader: "url(/public/img/ourCoffeeHeader.jpg)",
      ourCoffeeMean: "url(/public/img/girlCoffee.jpg)",
      forYourPleasureHeader: "url(/public/img/coffee-2179009_1920.jpg)",
      forYourPleasureMean: "url(/public/img/coffee-839233_1920.jpg)",
      aboutCoffeeHeader: "url(/public/img/aboutCoffeeHeader.jpg)",
    },
  },
  plugins: [],
};
