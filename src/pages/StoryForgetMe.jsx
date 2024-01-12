import { ContainerButton, ButtonMain } from "../App.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Sticker from "../assets/img/sticker/sticker1.gif";

export default function StoryForgetMe() {
  const StoryContainer = (props) => {
    return (
      <section
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          placeContent: "center",
          placeItems: "center",
          width: props.name === "main" ? "1000px" : "50%",
          animation: props.name === "main" && "fade-entrance 1000ms",
          position: props.name === "main" && "relative",
          margin: props.name !== "main" && "50px 0 30px 0",
        }}
      >
        {props.children}
      </section>
    );
  };

  const Stickers = (props) => {
    return (
      <img
        src={Sticker}
        alt={props.name === "ghost-left" ? "ghost-left" : "ghost-right"}
        style={{
          position: "absolute",
          bottom: "-30px",
          left: props.name === "ghost-left" && "-190px",
          right: props.name === "ghost-right" && "-170px",
          width: "300px",
        }}
      />
    );
  };

  return (
    <StoryContainer name="main">
      <StoryContainer name="header">
        <h1 className="header-h1">Game Story</h1>
      </StoryContainer>

      <p
        className="game2Children-p"
        style={{
          position: "relative",
          textAlign: "justify",
          wordBreak: "break-word",
          whiteSpace: "wrap",
          marginBottom: "50px",
          padding: "5px 10px",
          color: "#372f85",
          background: "#02001d",
          boxShadow:
            "0px 0px 0px 2px #372f85," +
            "0px 0px 0px 5px #02001d," +
            "0px 0px 5px 9px #090a24",
          overflow: "hidden",
        }}
      >
        The blind man was diagnosed with cancer, which caused his poor sight and
        eventually led him to go blind. The blind man was devastated after
        hearing it. The blind man remembers all the terrible things that
        happened in his life. One of his many regrets is having an unhealthy
        relationship with his twelve (12) children. Back then, the blind man was
        devastated by his condition, which is why he became an alcoholic and
        problematic; his life became miserable. The twelve (12) children decided
        to leave the blind man because of his behavior. Now the blind man is
        having trouble recognizing his twelve (12) children. The blind man needs
        help finding his twelve (12) children, from eldest to youngest. But
        there is more: before you find a clue about his twelve (12) children,
        you will face different challenges according to the personality of each
        child. Help him solve the problem and find all twelve (12) children for
        him to reconnect with his family and resolve his greatest regrets in
        life before he goes to his eternal slumber.
        <Stickers name="ghost-left" />
        <Stickers name="ghost-right" />
      </p>

      <ContainerButton>
        <ButtonMain buttonName="leave">
          <FontAwesomeIcon icon={faRightToBracket} />
          <p className="buttonChildren-p">Leave</p>
        </ButtonMain>
      </ContainerButton>
    </StoryContainer>
  );
}
