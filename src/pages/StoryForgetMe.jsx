import {
  ContainerButton,
  ButtonMain,
  ContainerSub,
  ContainerMain,
} from "../App.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Sticker from "../assets/img/sticker/sticker1.gif";
import blind from "../assets/img/blind/blind1.gif";
import daughter1 from "../assets/img/daughter/daughter1.gif";
import daughter2 from "../assets/img/daughter/daughter2.gif";
import daughter3 from "../assets/img/daughter/daughter3.gif";
import daughter4 from "../assets/img/daughter/daughter4.gif";
import daughter5 from "../assets/img/daughter/daughter5.gif";
import daughter6 from "../assets/img/daughter/daughter6.gif";
import daughter7 from "../assets/img/daughter/daughter7.gif";
import daughter8 from "../assets/img/daughter/daughter8.gif";
import daughter9 from "../assets/img/daughter/daughter9.gif";
import daughter10 from "../assets/img/daughter/daughter10.gif";
import daughter11 from "../assets/img/daughter/daughter11.gif";
import daughter12 from "../assets/img/daughter/daughter12.gif";
import logo from "../assets/img/logo/colored.webp";

const daughters = [
  "The Blind Man",
  "Olivia",
  "Emma",
  "Charm",
  "Amelia",
  "Sophie",
  "Cassi",
  "Ava",
  "Mia",
  "Evelyn",
  "Luna",
  "Alice",
  "Isla",
];

export default function StoryForgetMe() {
  const StoryContainer = (props) => {
    return (
      <section
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          placeContent: "center",
          placeItems: "center",
          width: props.name === "main" ? "100%" : "50%",
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
    <ContainerMain value="story">
      <ContainerSub value="story">
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
            The blind man was diagnosed with cancer, which caused his poor sight
            and eventually led him to go blind. The blind man was devastated
            after hearing it. The blind man remembers all the terrible things
            that happened in his life. One of his many regrets is having an
            unhealthy relationship with his twelve (12) children. Back then, the
            blind man was devastated by his condition, which is why he became an
            alcoholic and problematic; his life became miserable. The twelve
            (12) children decided to leave the blind man because of his
            behavior. Now the blind man is having trouble recognizing his twelve
            (12) children. The blind man needs help finding his twelve (12)
            children, from eldest to youngest. But there is more: before you
            find a clue about his twelve (12) children, you will face different
            challenges according to the personality of each child. Help him
            solve the problem and find all twelve (12) children for him to
            reconnect with his family and resolve his greatest regrets in life
            before he goes to his eternal slumber.
            <Stickers name="ghost-left" />
            <Stickers name="ghost-right" />
          </p>

          <StoryContainer name="header">
            <h1 className="header-h1">Game Gallery</h1>
          </StoryContainer>

          <div
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              width: "100%",
              marginBottom: "100px",
            }}
          >
            {daughters.map(
              (girls, id) =>
                id <= Number(localStorage.chillCurrentLevel) && (
                  <div
                    key={id}
                    style={{
                      display: "inherit",
                      width: "100%",
                      background: id !== 0 ? "#2D033B" : "#2C061F",
                      boxShadow:
                        id !== 0
                          ? "0px 0px 0px 2px #810CA8," +
                            "0px 0px 0px 5px #2D033B," +
                            "0px 0px 5px 9px #22042c"
                          : "0px 0px 0px 2px #86135c," +
                            "0px 0px 0px 5px #2C061F," +
                            "0px 0px 5px 9px #250018",
                      marginTop: "10px",
                    }}
                  >
                    <div
                      style={{
                        display:
                          id >= Number(localStorage.chillCurrentLevel) &&
                          "flex",
                        placeContent:
                          id >= Number(localStorage.chillCurrentLevel) &&
                          "space-evenly",
                        width:
                          id >= Number(localStorage.chillCurrentLevel) &&
                          "100%",
                        order:
                          id < Number(localStorage.chillCurrentLevel) &&
                          id % 2 === 1 &&
                          "2",
                      }}
                    >
                      <img
                        src={
                          id === 0
                            ? blind
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 1
                            ? daughter1
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 2
                            ? daughter2
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 3
                            ? daughter3
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 4
                            ? daughter4
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 5
                            ? daughter5
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 6
                            ? daughter6
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 7
                            ? daughter7
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 8
                            ? daughter8
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 9
                            ? daughter9
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 10
                            ? daughter10
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 11
                            ? daughter11
                            : id < Number(localStorage.chillCurrentLevel) &&
                              id === 12
                            ? daughter12
                            : logo
                        }
                        alt={
                          id < Number(localStorage.chillCurrentLevel)
                            ? girls
                            : "???"
                        }
                        style={{
                          width: "400px",
                          height: "100%",
                          borderRight:
                            id < Number(localStorage.chillCurrentLevel) &&
                            id === 0
                              ? "3px solid #86135c"
                              : id < Number(localStorage.chillCurrentLevel) &&
                                id % 2 === 0 &&
                                id !== 0 &&
                                "3px solid #810CA8",
                          borderLeft:
                            id < Number(localStorage.chillCurrentLevel) &&
                            id % 2 === 1 &&
                            id !== 0 &&
                            "3px solid #810CA8",
                        }}
                      />
                    </div>
                    {id < Number(localStorage.chillCurrentLevel) && (
                      <div
                        style={{
                          padding: "5px 10px",
                        }}
                      >
                        <p
                          className="game2Children-p"
                          style={{
                            fontSize: "2rem",
                            color: id === 0 ? "#86135c" : "#810CA8",
                            width: "100%",
                            textAlign: "center",
                          }}
                        >
                          {girls}
                        </p>
                        <p
                          className="game2Children-p"
                          style={{
                            fontSize: "1.3rem",
                            width: "100%",
                            marginTop: "10px",
                            color: id === 0 ? "#86135c" : "#810CA8",
                            textAlign: "justify",
                            wordBreak: "break-word",
                            wordSpacing: "-0.5rem",
                            whiteSpace: "wrap",
                          }}
                        >
                          {id === 0
                            ? "In a small town, there lived a blind man who, despite being blind, had always found his way around confidently. He was known for his resilience and positive outlook on life."
                            : id === 1
                            ? `The eldest daughter, ${girls}, is a natural leader. With a strong sense of responsibility, she often takes charge of family matters and sets an example for her younger siblings.`
                            : id === 2
                            ? `Following closely behind, ${girls} is known for her intelligence and curiosity. Always with a book in hand, she has a keen interest in learning and exploring new ideas.`
                            : id === 3
                            ? `The third sister, ${girls}, is an artist at heart. She expresses herself through various forms of creativity, whether it's painting, writing, or playing a musical instrument.`
                            : id === 4
                            ? `${girls} is the athletic one of the bunch. Her energy is contagious, and she excels in sports, inspiring her sisters to stay active and healthy.`
                            : id === 5
                            ? `With a calm and collected demeanor, ${girls} is often the peacemaker among her siblings. She has a natural ability to mediate conflicts and bring harmony to the family.`
                            : id === 6
                            ? `${girls} is the social butterfly of the family. She has a wide circle of friends and is always eager to meet new people. Her outgoing nature adds a vibrant energy to family gatherings.`
                            : id === 7
                            ? `True to her name, ${girls} is known for her elegance and poise. She possesses a natural gracefulness in her movements and has a sophisticated taste that influences the family's style.`
                            : id === 8
                            ? `${girls} has a love for animals and nature. Whether it's caring for pets or spending time outdoors, she has a deep connection with the environment and encourages her sisters to appreciate the world around them.`
                            : id === 9
                            ? `${girls} is the adventurous spirit. Always seeking excitement, she enjoys trying new things and taking risks. Her daring nature brings an element of unpredictability to family activities.`
                            : id === 10
                            ? `${girls} is the nurturing sister, often taking care of others. Her compassion and empathy make her a reliable source of support for her siblings during both good times and challenging moments.`
                            : id === 11
                            ? `${girls} is the tech-savvy sister, with a passion for gadgets and innovation. Her interest in the digital world often leads the family into exploring the latest technologies together.`
                            : id === 12 &&
                              `The youngest of the sisters, ${girls}, brings a sense of innocence and joy to the family. Her playful spirit and wide-eyed wonder remind everyone to appreciate the simple joys of life.`}
                        </p>
                      </div>
                    )}
                  </div>
                )
            )}
          </div>

          <ContainerButton>
            <ButtonMain buttonName="leave">
              <FontAwesomeIcon icon={faRightToBracket} />
              <p className="buttonChildren-p">Leave</p>
            </ButtonMain>
          </ContainerButton>
        </StoryContainer>
      </ContainerSub>
    </ContainerMain>
  );
}
