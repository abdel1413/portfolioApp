
import calculator from "../assets/projects/calculator.png";
import dragDrop from "../assets/projects/drag_drop.jpeg";
import enrollment from "../assets/projects/enroll3.jpeg";
import giphy from "../assets/projects/giphy.jpeg";
import tic_toc_toe from "../assets/projects/tictoctoe.png";
import robot from "../assets/projects/robot3.jpeg";
import e_commerce from "../assets/projects/e-commerce.jpeg";
import weatherLogo from "../assets/projects/weatherLogo.png";
import songLogo from "../assets/projects/songLogo.png";
import wikipediaSearch from "../assets/projects/wikipedia.jpeg";
import fruitSearch from "../assets/projects/fruitSearch.jpeg";
import cashRegister from "../assets/projects/cashRegister.jpeg";


export const ProjectList = () => {
return [
  {
  id: 1,
  title: "eCommerce Store",
  image: e_commerce,
  description:
    "A modern eCommerce application featuring product browsing, shopping cart functionality, and responsive design powered by API-driven product data.",
  github: "https://github.com/abdel1413/E-commerce.git",
  demo: "https://e-commerce-7juj.vercel.app/",
  tech: ["React", "Tailwind CSS", "API"],
},

{
  id: 2,
  title: "Wikipedia Search",
  image: wikipediaSearch,
  description:
    "A Wikipedia search application that allows users to quickly find and explore articles using the Wikipedia API.",
  github: "https://github.com/abdel1413/wikipediaSearch.git",
  demo: "https://abdel1413.github.io/wikipediaSearch/",
  tech: ["React", "REST API", "CSS"],
},

{
  id: 3,
  title: "Weather App",
  image: weatherLogo,
  description:
    "A weather forecasting application that provides real-time weather conditions and location-based forecasts using a weather API.",
  github: "https://github.com/abdel1413/weatherApp",
  demo: "https://abdel1413.github.io/weatherApp/",
  tech: ["React", "CSS", "API"],
},

{
  id: 4,
  title: "Song Player",
  image: songLogo,
  description:
    "A music player application with playback controls, song selection, and a clean user interface for an enjoyable listening experience.",
  github: "https://github.com/abdel1413/songPlayer",
  demo: "https://song-player-mu.vercel.app/",
  tech: ["React", "CSS", "API"],
},

{
  id: 5,
  title: "Calculator App",
  image: calculator,
  description:
    "A responsive calculator built with HTML, CSS, and JavaScript that performs basic arithmetic operations with a clean and intuitive interface.",
  github: "https://github.com/abdel1413/javascript-calculator.git",
  demo: "https://main.dwznmfxatm989.amplifyapp.com/",
  tech: ["HTML", "JavaScript", "CSS"],
},

{
  id: 6,
  title: "Cash Register",
  image: cashRegister,
  description:
    "A cash register application that calculates totals, change due, and transaction details based on user input.",
  github: "https://github.com/abdel1413/cashRegister.git",
  demo: "https://abdel1413.github.io/cashRegister/",
  tech: ["JavaScript", "HTML5", "CSS"],
},

{
  id: 7,
  title: "Drag & Drop Board",
  image: dragDrop,
  description:
    "An interactive drag-and-drop board that allows users to move and organize items visually using intuitive drag-and-drop functionality.",
  github: "https://github.com/abdel1413/drag_and_drop.git",
  demo: "https://drag-and-drop-five-gilt.vercel.app/",
  tech: ["React", "HTML5", "CSS"],
},

{
  id: 8,
  title: "Enrollment System",
  image: enrollment,
  description:
    "A full-stack student enrollment management system featuring registration forms, validation, and database-driven record management.",
  github: "https://github.com/yourusername/enrollment",
  demo: "https://your-demo-link.com",
  tech: ["React", "CSS", "API", "Node.js", "Express", "MySQL"],
},

{
  id: 9,
  title: "Giphy Search",
  image: giphy,
  description:
    "A GIF search application that fetches and displays trending and searchable GIFs using the Giphy API.",
  github: "https://github.com/abdel1413/giphyApi.git",
  demo: "https://main.d1slcfk1gpnlvx.amplifyapp.com/",
  tech: ["React", "API", "CSS"],
},

{
  id: 10,
  title: "Tic Tac Toe",
  image: tic_toc_toe,
  description:
    "A classic Tic-Tac-Toe game with win detection, draw handling, score tracking, and game reset functionality.",
  github: "https://github.com/abdel1413/react-tictactoe",
  demo: "https://react-tictactoe-blush.vercel.app/",
  tech: ["React","tailwindcss", "CSS"],
},

{
  id: 11,
  title: "Fruit Search App",
  image: fruitSearch,
  description:
    "A searchable fruit directory that allows users to quickly filter and find fruits through a fast and responsive search interface.",
  github: "https://github.com/abdel1413/fruitSeachApp",
  demo: "https://fruit-search-app-drab.vercel.app/",
  tech: ["React", "tailwindcss", "CSS"],
},

{
  id: 12,
  title: "Robot Friends",
  image: robot,
  description:
    "A React application that fetches robot profiles from an API and provides real-time search functionality for filtering robots.",
  github: "https://github.com/abdel1413/myrobotfriendslifecycle.git",
  demo: "https://main.d1ub7dkredtt4g.amplifyapp.com/",
  tech: ["React", "REST API"],
},
]

  
};