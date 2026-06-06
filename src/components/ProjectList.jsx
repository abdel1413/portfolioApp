
import calculator from "../assets/projects/calculator.png";
import dragDrop from "../assets/projects/drag_drop.jpeg";
import enrollment from "../assets/projects/enroll3.jpeg";
import giphy from "../assets/projects/giphy.jpeg";
import tictoctoe from "../assets/projects/tictoctoe.png";
import robot from "../assets/projects/robot3.jpeg";

export const ProjectList = () => {
return [
    {
      id: 1,
      title: "Calculator App",
      image: calculator,
      description:
        "A responsive calculator built with React and JavaScript supporting basic arithmetic operations.",
      github: "https://github.com/yourusername/calculator",
      demo: "https://your-demo-link.com",
      tech: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      title: "Drag & Drop Board",
      image: dragDrop,
      description:
        "A drag-and-drop task manager that allows users to organize tasks visually.",
      github: "https://github.com/yourusername/drag-drop",
      demo: "https://your-demo-link.com",
      tech: ["React", "HTML5", "CSS"],
    },
    {
      id: 3,
      title: "Enrollment System",
      image: enrollment,
      description:
        "Student enrollment application with forms, validation, and data management.",
      github: "https://github.com/yourusername/enrollment",
      demo: "https://your-demo-link.com",
      tech: ["React", "JavaScript"],
    },
    {
      id: 4,
      title: "Giphy Search",
      image: giphy,
      description:
        "Search and display GIFs using the Giphy API with a clean responsive UI.",
      github: "https://github.com/yourusername/giphy",
      demo: "https://your-demo-link.com",
      tech: ["React", "API", "JavaScript"],
    },
    {
      id: 5,
      title: "Tic Tac Toe",
      image: tictoctoe,
      description:
        "Classic Tic-Tac-Toe game featuring win detection and game reset functionality.",
      github: "https://github.com/yourusername/tictactoe",
      demo: "https://your-demo-link.com",
      tech: ["React", "JavaScript"],
    },
    {
      id: 6,
      title: "Robot Friends",
      image: robot,
      description:
        "A searchable robot directory built with React and API data fetching.",
      github: "https://github.com/yourusername/robot-friends",
      demo: "https://your-demo-link.com",
      tech: ["React", "REST API"],
    },
  ];

  
};