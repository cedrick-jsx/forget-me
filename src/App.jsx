import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import StartForgetMe from "./pages/StartForgetMe";
import StoryForgetMe from "./pages/StoryForgetMe";
import CategoryForgetMe from "./pages/CategoryForgetMe";
import LevelForgetMe from "./pages/LevelForgetMe";
import PlayForgetMe from "./pages/PlayForgetMe";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartForgetMe />} />
      <Route path="/Story" element={<StoryForgetMe />} />
      <Route path="/Category" element={<CategoryForgetMe />} />
      <Route path="Level" element={<LevelForgetMe />} />
      <Route path="/Play" element={<PlayForgetMe />} />
    </Routes>
  );
}

const ContainerMain = (props) => {
  return (
    <section
      className="container-main"
      style={{
        height: props.value !== "level" && "90vh",
        placeItems: props.value !== "story" && "center",
      }}
    >
      {props.children}
    </section>
  );
};

const ContainerSub = (props) => {
  return (
    <div
      style={{
        width: props.value === "story" ? "1000px" : "500px",
      }}
    >
      {props.children}
    </div>
  );
};

const ContainerHeader = (props) => {
  return <header className="container-header">{props.children}</header>;
};

const ContainerButton = (props) => {
  return <section className="container-button">{props.children}</section>;
};

const ContainerHeader2 = (props) => {
  return <header className="container-header2">{props.children}</header>;
};

const ContainerGame = (props) => {
  return <section className="container-game">{props.children}</section>;
};

const ContainerGame2 = (props) => {
  return <section className="container-game2">{props.children}</section>;
};

const ContainerButton2 = (props) => {
  return <section className="container-button2">{props.children}</section>;
};

const ContainerNextLevel = (props) => {
  return <section className="container-nextLevel">{props.children}</section>;
};

const ButtonMain = (props) => {
  const navigate = useNavigate();

  const navigatePage = () => {
    switch (props.buttonName) {
      case "start": {
        navigate("/Category", { replace: true });
        break;
      }
      case "story": {
        navigate("/Story", { replace: true });
        break;
      }
      case "chill": {
        if (!localStorage.chillCurrentLevel)
          localStorage.setItem("chillCurrentLevel", 1);
        localStorage.setItem("sanity", "chill");
        navigate("/Level", { replace: true });
        break;
      }
      case "crazy": {
        if (!localStorage.crazyCurrentLevel)
          localStorage.setItem("crazyCurrentLevel", 1);
        localStorage.setItem("sanity", "crazy");
        navigate("/Level", { replace: true });
        break;
      }
      default: {
        navigate("/", { replace: true });
        break;
      }
    }
  };

  return (
    <button
      disabled={
        props.buttonName === "crazy" &&
        (Number(localStorage.chillCurrentLevel < 13) ||
          !localStorage.chillCurrentLevel) &&
        true
      }
      className="button-main"
      onClick={navigatePage}
    >
      <div
        disabled={
          props.buttonName === "crazy" &&
          (Number(localStorage.chillCurrentLevel < 13) ||
            !localStorage.chillCurrentLevel) &&
          true
        }
        style={{
          pointerEvents:
            props.buttonName === "crazy" &&
            (Number(localStorage.chillCurrentLevel < 13) ||
              !localStorage.chillCurrentLevel) &&
            "none",
        }}
        className="container-buttonChildren"
      >
        {props.children}
      </div>
    </button>
  );
};

export {
  ContainerMain,
  ContainerSub,
  ContainerHeader,
  ContainerButton,
  ButtonMain,
  ContainerHeader2,
  ContainerGame,
  ContainerGame2,
  ContainerButton2,
  ContainerNextLevel,
};
