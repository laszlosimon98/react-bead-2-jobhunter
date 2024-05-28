/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        pagetitle: "clamp(1.5rem, 5vw, 2rem)",
        price: "clamp(1rem, 2vw, 1.2rem)",
        jobtitle: "clamp(1.1rem, 1.5vw, 2rem)",
      },
      width: {
        table: "clamp(300px, 75vw, 1500px)",
        advertisement: "clamp(20rem, 90vw, 60rem)",
        text: "clamp(18rem, 85vw, 24rem)",
        number: "clamp(8rem, 85vw, 16rem)",
        filter: "clamp(20rem, 90vw, 60rem)",
        jobModal: "clamp(350px, 80vw, 1550px)",
      },
    },
  },
  plugins: [],
};
