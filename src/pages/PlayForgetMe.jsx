import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerHeader2,
  ContainerGame,
  ContainerGame2,
  ContainerButton2,
  ContainerNextLevel,
  ContainerMain,
} from "../App.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faRightToBracket,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import Bg1 from "../assets/img/background/bg.jpg";
import Party from "../assets/img/emoji/party-popper.webp";
import Confetti from "../assets/img/emoji/confetti-ball.webp";
import GlowStar from "../assets/img/emoji/glowing-star.webp";
import DaughterGif1 from "../assets/img/daughter/daughter1.gif";
import DaughterGif2 from "../assets/img/daughter/daughter2.gif";
import DaughterGif3 from "../assets/img/daughter/daughter3.gif";
import DaughterGif4 from "../assets/img/daughter/daughter4.gif";
import DaughterGif5 from "../assets/img/daughter/daughter5.gif";
import DaughterGif6 from "../assets/img/daughter/daughter6.gif";
import DaughterGif7 from "../assets/img/daughter/daughter7.gif";
import DaughterGif8 from "../assets/img/daughter/daughter8.gif";
import DaughterGif9 from "../assets/img/daughter/daughter9.gif";
import DaughterGif10 from "../assets/img/daughter/daughter10.gif";
import DaughterGif11 from "../assets/img/daughter/daughter11.gif";
import DaughterGif12 from "../assets/img/daughter/daughter12.gif";
import DaughterJpg1 from "../assets/img/daughter/daughter1.jpg";
import DaughterJpg2 from "../assets/img/daughter/daughter2.jpg";
import DaughterJpg3 from "../assets/img/daughter/daughter3.jpg";
import DaughterJpg4 from "../assets/img/daughter/daughter4.jpg";
import DaughterJpg5 from "../assets/img/daughter/daughter5.jpg";
import DaughterJpg6 from "../assets/img/daughter/daughter6.jpg";
import DaughterJpg7 from "../assets/img/daughter/daughter7.jpg";
import DaughterJpg8 from "../assets/img/daughter/daughter8.jpg";
import DaughterJpg9 from "../assets/img/daughter/daughter9.jpg";
import DaughterJpg10 from "../assets/img/daughter/daughter10.jpg";
import DaughterJpg11 from "../assets/img/daughter/daughter11.jpg";
import DaughterJpg12 from "../assets/img/daughter/daughter12.jpg";
import BlindGif1 from "../assets/img/blind/blind1.gif";
import BlindGif2 from "../assets/img/blind/blind2.gif";
import Emoji1 from "../assets/img/emoji/daughter1.webp";
import Emoji2 from "../assets/img/emoji/daughter2.webp";
import Emoji3 from "../assets/img/emoji/daughter3.webp";
import Emoji4 from "../assets/img/emoji/daughter4.webp";
import Emoji5 from "../assets/img/emoji/daughter5.webp";
import Emoji6 from "../assets/img/emoji/daughter6.webp";
import Emoji7 from "../assets/img/emoji/daughter7.webp";
import Emoji8 from "../assets/img/emoji/daughter8.webp";
import Emoji9 from "../assets/img/emoji/daughter9.webp";
import Emoji10 from "../assets/img/emoji/daughter10.webp";
import Emoji11 from "../assets/img/emoji/daughter11.webp";
import Emoji12 from "../assets/img/emoji/daughter12.webp";
import Skull from "../assets/img/emoji/skull.webp";
import Heart from "../assets/img/emoji/red-heart.webp";
import useSound from "use-sound";
import soundError from "../assets/sound/click/error.mp3";
import soundTime from "../assets/sound/click/time.wav";
import soundButton from "../assets/sound/click/button.wav";
import soundOver from "../assets/sound/click/gameover.wav";
import soundHover from "../assets/sound/click/hover.wav";
import soundCorrect from "../assets/sound/click/correct.wav";
import soundWin from "../assets/sound/click/win.mp3";
import soundPills from "../assets/sound/click/pills.wav";
const daughters = {
  Name: [
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
  ],
};

const arrayGame = {
  chillNumber: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
  ],
  chillLetter: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
  ],
  chillEven: [
    "2",
    "4",
    "6",
    "8",
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "22",
    "24",
    "26",
    "28",
    "30",
    "32",
  ],
  chillConsonant: [
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
  ],
  chillOdd: [
    "1",
    "3",
    "5",
    "7",
    "9",
    "11",
    "13",
    "15",
    "17",
    "19",
    "21",
    "23",
    "25",
    "27",
    "29",
    "31",
  ],
  chillLetterZ: [
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  chillMixed: [
    "A16",
    "B15",
    "C14",
    "D13",
    "E12",
    "F11",
    "G10",
    "H9",
    "I8",
    "J7",
    "K6",
    "L5",
    "M4",
    "N3",
    "O2",
    "P1",
  ],
  chillMixed2: [
    "D4",
    "7G",
    "A1",
    "F6",
    "2K",
    "B9",
    "E5",
    "J10",
    "H8",
    "3C",
    "L12",
    "I11",
    "5E",
    "P16",
    "M13",
    "N14",
  ],
  chillMixed3: [
    "6P",
    "Z26",
    "T20",
    "1A",
    "D4",
    "C29",
    "H8",
    "X24",
    "O15",
    "N14",
    "G7",
    "E5",
    "Y25",
    "Q17",
    "F6",
    "K11",
  ],
  chillMixed4: [
    "7T",
    "A79",
    "8S",
    "B9",
    "G7",
    "P42",
    "F6",
    "M13",
    "3C",
    "D4",
    "X24",
    "E5",
    "H8",
    "N14",
    "J10",
    "K11",
  ],
  chillMixed5: [
    "D4",
    "B9",
    "9Q",
    "K11",
    "H8",
    "F6",
    "G7",
    "O15",
    "C29",
    "1A",
    "2K",
    "E5",
    "N14",
    "P42",
    "J10",
    "L12",
  ],
  chillMixed6: [
    "7G",
    "O15",
    "P42",
    "3C",
    "M13",
    "B9",
    "L12",
    "E5",
    "D4",
    "I9",
    "N14",
    "J10",
    "G7",
    "2K",
    "H8",
    "A27",
  ],
  crazyNumber: [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
  ],
  crazyLetter: [
    "BD",
    "CG",
    "JL",
    "MN",
    "OQ",
    "PR",
    "SZ",
    "VW",
    "ZS",
    "WV",
    "RP",
    "QO",
    "NM",
    "GC",
    "LJ",
    "DB",
  ],
  crazyMixed: [
    "He",
    "Li",
    "Be",
    "Ne",
    "Na",
    "Mg",
    "Al",
    "Si",
    "Cl",
    "Ar",
    "Ca",
    "Sc",
    "Ti",
    "Cr",
    "Mn",
    "Fe",
  ],
};

let contentChecker = [];

export default function PlayForgetMe() {
  const navigate = useNavigate();
  const temporaryArray = useRef([]);
  const correctIndex = useRef([]);
  const currentIndex = useRef([]);
  const randomNumber = useRef(null);
  const indexChecker = useRef(0);
  const indexCorrect = useRef(0);
  const countUp = useRef(0);
  const countDown = useRef(0);
  const [game, setGame] = useState(0);
  const [isRandomDone, setIsRandomDone] = useState(true);
  const [isTransparent, setIsTransparent] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [isNextLevel, setIsNextLevel] = useState(false);
  const [isShake, setIsShake] = useState(false);

  const [play] = useSound(soundError);

  const ResetGame = () => {
    new Audio(soundButton).play();
    contentChecker = [];
    temporaryArray.current = [];
    correctIndex.current = [];
    currentIndex.current = [];
    randomNumber.current = null;
    indexChecker.current = 0;
    indexCorrect.current = 0;
    countUp.current = 0;
    countDown.current = 0;
    setGame(() => 99);
    setGame(() => 0);
    setIsRandomDone(true);
    setIsTransparent(false);
    setIsFailed(false);
    setIsDisable(true);
    setIsNextLevel(false);
    setIsShake(false);
  };

  if (isRandomDone) {
    if (localStorage.sanity === "chill") {
      do {
        switch (Number(localStorage.chillLevel)) {
          case 1: {
            randomNumber.current =
              arrayGame.chillNumber[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillNumber];
            break;
          }
          case 2: {
            randomNumber.current =
              arrayGame.chillLetter[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillLetter];
            break;
          }
          case 3: {
            randomNumber.current =
              arrayGame.chillEven[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillEven];
            break;
          }
          case 4: {
            randomNumber.current =
              arrayGame.chillConsonant[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillConsonant];
            break;
          }
          case 5: {
            randomNumber.current =
              arrayGame.chillOdd[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillOdd];
            break;
          }
          case 6: {
            randomNumber.current =
              arrayGame.chillLetterZ[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillLetterZ];
            break;
          }
          case 7: {
            randomNumber.current =
              arrayGame.chillMixed[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillMixed];
            break;
          }
          case 8: {
            randomNumber.current =
              arrayGame.chillMixed2[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillMixed2];
            break;
          }
          case 9: {
            randomNumber.current =
              arrayGame.chillMixed3[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillMixed3];
            break;
          }
          case 10: {
            randomNumber.current =
              arrayGame.chillMixed4[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillMixed4];
            break;
          }
          case 11: {
            randomNumber.current =
              arrayGame.chillMixed5[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillMixed5];
            break;
          }
          default: {
            randomNumber.current =
              arrayGame.chillMixed6[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.chillMixed6];
            break;
          }
        }
        for (let counter = 0; counter < 16; counter++) {
          if (temporaryArray.current[counter] === randomNumber.current) {
            break;
          } else if (counter + 1 === 16) {
            temporaryArray.current[indexChecker.current] = randomNumber.current;
            indexChecker.current++;
          }
        }
      } while (indexChecker.current < 16);
    } else if (localStorage.sanity === "crazy") {
      do {
        switch (Number(localStorage.crazyLevel)) {
          case 1: {
            randomNumber.current =
              arrayGame.crazyNumber[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.crazyNumber];
            break;
          }
          case 2: {
            randomNumber.current =
              arrayGame.crazyLetter[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.crazyLetter];
            break;
          }
          default: {
            randomNumber.current =
              arrayGame.crazyMixed[Math.floor(Math.random() * 16)];
            if (contentChecker.length === 0)
              contentChecker = [...arrayGame.crazyMixed];
            break;
          }
        }
        for (let counter = 0; counter < 16; counter++) {
          if (temporaryArray.current[counter] === randomNumber.current) {
            break;
          } else if (counter + 1 === 16) {
            temporaryArray.current[indexChecker.current] = randomNumber.current;
            indexChecker.current++;
          }
        }
      } while (indexChecker.current < 16);
    }
    setIsRandomDone(false);
  }

  useEffect(() => {
    if (isShake) {
      const shakeReset = setTimeout(() => {
        setIsShake(false);
      }, 100);
      return () => clearTimeout(shakeReset);
    }
  }, [isShake]);

  useEffect(() => {
    const timerGame = setTimeout(() => {
      if (countUp.current < 16) {
        countUp.current += 1;
        new Audio(soundTime).play();
        setGame(() => countUp.current);
        if (countUp.current === 16) {
          countUp.current = 10000;
          countDown.current = 60;
          setIsTransparent(true);
          setIsDisable(false);
          setGame(() => countDown.current);
        }
      } else if (countDown.current > 0) {
        if (indexCorrect.current === 16) {
          localStorage.setItem("countDown", countDown.current);
          countDown.current = 0;
          setIsNextLevel(true);
          new Audio(soundWin).play();
        } else {
          countDown.current -= 1;
          new Audio(soundTime).play();
          setGame(() => countDown.current);
          if (countDown.current === 0) {
            countDown.current = 0;
            setIsTransparent(false);
            setIsFailed(true);
            setIsDisable(true);
            setGame(() => "Zero");
            new Audio(soundOver).play();
          }
        }
      }
    }, 1000);
    return () => clearTimeout(timerGame);
  }, [game]);

  return (
    <ContainerMain value="level">
      <section
        style={{
          width: "1200px",
          marginTop: "50px",
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <BlindManDaughter
            name="blind"
            isFailed={isFailed}
            indexCorrect={indexCorrect.current}
            temporaryArray={temporaryArray.current}
            correctIndex={correctIndex.current}
          />

          <BlindManDaughter
            name="daughter"
            isFailed={isFailed}
            indexCorrect={indexCorrect.current}
            temporaryArray={temporaryArray.current}
            correctIndex={correctIndex.current}
          />

          <ContainerGame>
            <ContainerHeader2>
              <h1 className="header2-h1">Sanity</h1>
              <h1 className="header2-h1">{localStorage.sanity}</h1>
              <h1 className="header2-h1">Session</h1>
              <h1 className="header2-h1">
                {localStorage.sanity === "crazy"
                  ? localStorage.crazyLevel
                  : localStorage.chillLevel}
              </h1>
              <h1 className="header2-h1">Stress</h1>
              <h1
                className="header2-h1"
                style={{
                  filter:
                    isShake &&
                    "drop-shadow(0px 0px 1px #ff0060) drop-shadow(0px 0px 1px #ff0060)" +
                      "drop-shadow(0px 0px 1px #ff0060) drop-shadow(0px 0px 1px #ff0060)" +
                      "drop-shadow(0px 0px 1px #ff0060) drop-shadow(0px 0px 1px #ff0060)",
                }}
              >
                {game === 99 ? 0 : game}
              </h1>
            </ContainerHeader2>

            {temporaryArray.current.map((array, id) => (
              <button
                key={id}
                className="button-main2"
                disabled={isDisable}
                style={{
                  backgroundColor:
                    game >= 0 &&
                    game <= 16 &&
                    countUp.current !== 10000 &&
                    contentChecker[game] === array
                      ? "#ee6c4d"
                      : correctIndex.current[id] !== id && isFailed
                      ? "#ee6c4d"
                      : correctIndex.current[id] !== id && isTransparent
                      ? "transparent"
                      : correctIndex.current[id] === id
                      ? "#98c1d9"
                      : countUp.current !== 10000 && "#98c1d9",
                  boxShadow:
                    game >= 0 &&
                    game <= 16 &&
                    countUp.current !== 10000 &&
                    contentChecker[game] === array
                      ? "0px 0px 5px 5px #000c1a"
                      : correctIndex.current[id] !== id && isFailed
                      ? "-3px 3px 0px 0px #000c1a," +
                        "0px 0px 2px 2px #000c1a," +
                        "-6px 6px 0px 0px #ee6c4d," +
                        "-3px 3px 2px 2px #000c1a," +
                        "-6px 6px 2px 2px #000c1a"
                      : correctIndex.current[id] === id
                      ? "-3px 3px 0px 0px #000c1a," +
                        "0px 0px 2px 2px #000c1a," +
                        "-6px 6px 0px 0px #98c1d9," +
                        "-3px 3px 2px 2px #000c1a," +
                        "-6px 6px 2px 2px #000c1a"
                      : countUp.current !== 10000
                      ? "-3px 3px 0px 0px #000c1a," +
                        "0px 0px 2px 2px #000c1a," +
                        "-6px 6px 0px 0px #98c1d9," +
                        "-3px 3px 2px 2px #000c1a," +
                        "-6px 6px 2px 2px #000c1a"
                      : correctIndex.current[id] !== id &&
                        isTransparent &&
                        "none",
                  transform:
                    game >= 0 &&
                    game <= 16 &&
                    countUp.current !== 10000 &&
                    contentChecker[game] === array &&
                    "scale(0.9)",
                  animation:
                    correctIndex.current[id] === id &&
                    indexCorrect.current !== 16 &&
                    !isFailed
                      ? "move-down 800ms"
                      : correctIndex.current[id] !== id &&
                        isFailed &&
                        "fa-bounce 1500ms ease infinite both alternate",
                  pointerEvents: correctIndex.current[id] === id && "none",
                  transition: countUp.current < 16 && "500ms",
                }}
                onMouseEnter={() => new Audio(soundPills).play()}
                onClick={() => {
                  if (contentChecker[indexCorrect.current] === array) {
                    correctIndex.current[id] = id;
                    currentIndex.current[indexCorrect.current] =
                      indexCorrect.current;
                    indexCorrect.current++;
                    new Audio(soundCorrect).play();
                  } else {
                    if (countDown.current <= 5) {
                      countDown.current = 1;
                    } else {
                      setIsShake(true);
                      play();
                      countDown.current -= 5;
                    }
                  }
                }}
              >
                <p className="buttonChildren2-p">
                  {isTransparent && correctIndex.current[id] !== id ? (
                    <span
                      className="pills-icon"
                      style={{
                        width: "100%",
                        fontSize: "2.5rem",
                        animation:
                          isShake &&
                          correctIndex.current[id] !== id &&
                          "fa-shake 100ms ease",
                        filter:
                          isShake &&
                          "drop-shadow(0px 0px 1px #ff0060) drop-shadow(0px 0px 1px #ff0060) drop-shadow(0px 0px 1px #ff0060) drop-shadow(0px 0px 1px #ff0060) drop-shadow(0px 0px 1px #ff0060) drop-shadow(0px 0px 1px #ff0060)",
                        transition: !isShake && "100ms",
                      }}
                    >
                      💊
                    </span>
                  ) : (
                    array
                  )}
                </p>
              </button>
            ))}

            <ContainerGame2>
              <div
                style={{
                  width: "100%",
                  boxShadow: "0px 0px 0px 1px inset #372f85",
                  overflow: "hidden",
                }}
              >
                <p
                  className="pills-order"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    animation:
                      countUp.current !== 10000 &&
                      "fa-fade 1000ms linear infinite",
                  }}
                >
                  {countUp.current !== 10000
                    ? "Memorize in Order"
                    : "Take Pills in Order"}
                </p>
              </div>
              <section
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                }}
              >
                {contentChecker.map((array, id) =>
                  CheckerContainer({
                    array,
                    id,
                    currentIndex,
                    indexCorrect,
                    countUp,
                    isFailed,
                    game,
                  })
                )}
              </section>
            </ContainerGame2>

            {!isNextLevel ? (
              <ContainerButton2>
                <button
                  className="button-main"
                  style={{
                    width: "185px",
                  }}
                  onMouseEnter={() => new Audio(soundHover).play()}
                  onClick={ResetGame}
                >
                  <div
                    className="container-buttonChildren"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "30% 30% 15%",
                      placeContent: "center",
                    }}
                  >
                    <FontAwesomeIcon icon={faRotate} />
                    <p
                      className="buttonChildren-p"
                      style={{
                        wordSpacing: "5px",
                        letterSpacing: "3px",
                      }}
                    >
                      Retry
                    </p>
                  </div>
                </button>

                <button
                  className="button-main"
                  style={{
                    width: "185px",
                  }}
                  onMouseEnter={() => new Audio(soundHover).play()}
                  onClick={() => {
                    ResetGame();
                    navigate("/Category", { replace: true });
                  }}
                >
                  <div
                    className="container-buttonChildren"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "40% 30% 20%",
                      placeContent: "center",
                    }}
                  >
                    <FontAwesomeIcon icon={faRightToBracket} />
                    <p
                      className="buttonChildren-p"
                      style={{
                        wordSpacing: "5px",
                        letterSpacing: "3px",
                      }}
                    >
                      Return
                    </p>
                  </div>
                </button>
              </ContainerButton2>
            ) : (
              <ContainerNextLevel>
                <button
                  className="button-main"
                  style={{
                    width: "100%",
                  }}
                  onMouseEnter={() => new Audio(soundHover).play()}
                  onClick={() => {
                    if (localStorage.sanity === "chill") {
                      if (
                        Number(localStorage.chillCurrentLevel) < 13 &&
                        Number(localStorage.chillLevel) ===
                          Number(localStorage.chillCurrentLevel)
                      )
                        localStorage.setItem(
                          "chillCurrentLevel",
                          Number(localStorage.chillCurrentLevel) + 1
                        );
                    } else if (localStorage.sanity === "crazy") {
                      if (
                        Number(localStorage.crazyCurrentLevel) < 13 &&
                        Number(localStorage.crazyLevel) ===
                          Number(localStorage.crazyCurrentLevel)
                      )
                        localStorage.setItem(
                          "crazyCurrentLevel",
                          Number(localStorage.crazyCurrentLevel) + 1
                        );
                    }
                    localStorage.removeItem("countDown");
                    ResetGame();
                    if (localStorage.sanity === "chill")
                      if (Number(localStorage.chillCurrentLevel) === 13)
                        navigate("/Story", { replace: true });
                      else navigate("/Level", { replace: true });
                    if (localStorage.sanity === "crazy")
                      if (Number(localStorage.crazyCurrentLevel) === 13)
                        navigate("/Story", { replace: true });
                      else navigate("/Level", { replace: true });
                  }}
                >
                  <div
                    className="container-buttonChildren"
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        localStorage.sanity === "chill"
                          ? localStorage.chillCurrentLevel < 12 && "38% 10% 10%"
                          : localStorage.sanity === "crazy" &&
                            localStorage.crazyCurrentLevel < 12 &&
                            "38% 10% 10%",
                      placeContent: "center",
                    }}
                  >
                    {(localStorage.sanity === "chill" &&
                      Number(localStorage.chillCurrentLevel) < 12) ||
                    (localStorage.sanity === "crazy" &&
                      Number(localStorage.crazyCurrentLevel) < 12) ? (
                      <>
                        <p className="buttonChildren-p">Next Session</p>
                        <FontAwesomeIcon
                          icon={faAngleDoubleRight}
                          style={{
                            fontSize: "1.8rem",
                            animation: "fa-beat-fade 1500ms linear infinite",
                          }}
                        />
                        <p
                          className="buttonChildren-p"
                          style={{
                            fontSize: "2rem",
                            fontWeight: "666",
                            background: "inherit",
                            backgroundClip: "inherit",
                            WebkitBackgroundClip: "inherit",
                            WebkitTextFillColor: "inherit",
                            animation:
                              "fa-shake 1500ms linear infinite both alternate",
                          }}
                        >
                          {localStorage.sanity === "chill" &&
                          Number(localStorage.chillCurrentLevel) -
                            Number(localStorage.chillLevel) ===
                            0
                            ? Number(localStorage.chillLevel) + 1
                            : localStorage.sanity === "chill" &&
                              Number(localStorage.chillCurrentLevel)}

                          {localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyCurrentLevel) -
                            Number(localStorage.crazyLevel) ===
                            0
                            ? Number(localStorage.crazyLevel) + 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyCurrentLevel)}
                        </p>
                      </>
                    ) : (
                      <p
                        className="buttonChildren-p"
                        style={{
                          background: "inherit",
                          backgroundClip: "inherit",
                          WebkitBackgroundClip: "inherit",
                          WebkitTextFillColor: "inherit",
                          letterSpacing: "5px",
                        }}
                      >
                        <img
                          src={Party}
                          alt="party"
                          style={{
                            width: "20px",
                            marginRight: "10px",
                          }}
                        />
                        Congratulations
                        <img
                          src={Confetti}
                          alt="confetti"
                          style={{
                            width: "20px",
                            marginLeft: "5px",
                          }}
                        />
                      </p>
                    )}
                  </div>
                </button>
              </ContainerNextLevel>
            )}
          </ContainerGame>
        </section>

        <section
          style={{
            display: "flex",
            flexFlow: "column wrap",
            margin: "30px 0",
            padding: "10px",
            background: "#02001d",
            boxShadow:
              "0px 0px 0px 2px #372f85," +
              "0px 0px 0px 5px #02001d," +
              "0px 0px 5px 9px #090a24",
          }}
        >
          <h1
            className="header2-h1"
            style={{
              fontSize: "2.5rem",
              border: "none",
              textAlign: "left",
            }}
          >
            Game Details
          </h1>
          <p
            className="game2Children-p"
            style={{
              color: "#372f85",
              wordBreak: "break-word",
              textAlign: "justify",
            }}
          >
            The blind man is in a predicament and needs your help. Every session
            has a corresponding challenge. The first fifteen(15) seconds will be
            your window to memorize the sequence based on the current challenge.
            The next sixty(60) seconds is your limit to solve the problem. The
            Pills Order will be your guideline to gain clues for his daughter.
            Failing to do so will lead to the death of the blind man.
          </p>
        </section>
      </section>
    </ContainerMain>
  );
}

const BlindManDaughter = (props) => {
  const Bond = () => {
    return (
      <img
        src={GlowStar}
        alt="Bond"
        style={{
          width: "45px",
          animation: props.indexCorrect === 16 && "fade-entrance 2000ms ease",
        }}
      />
    );
  };

  return (
    <section
      style={{
        width: "350px",
        order: props.name === "daughter" ? "3" : "1",
      }}
    >
      <div
        style={{
          background: props.name === "daughter" ? "#2D033B" : "#2C061F",
          boxShadow:
            props.name === "daughter"
              ? "0px 0px 0px 2px #810CA8," +
                "0px 0px 0px 5px #2D033B," +
                "0px 0px 5px 9px #22042c"
              : "0px 0px 0px 2px #86135c," +
                "0px 0px 0px 5px #2C061F," +
                "0px 0px 5px 9px #250018",
        }}
      >
        <h1
          className="header3-h1"
          style={{
            fontSize: "2.5rem",
            background: props.name === "daughter" ? "#810ca8" : "#86135c",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            animation:
              props.name === "daughter" &&
              props.indexCorrect === 16 &&
              "fade-entrance 2000ms ease",
          }}
        >
          {props.name === "daughter"
            ? props.indexCorrect === 16
              ? localStorage.sanity === "chill"
                ? daughters.Name[Number(localStorage.chillLevel) - 1]
                : localStorage.sanity === "crazy" &&
                  daughters.Name[Number(localStorage.crazyLevel) - 1]
              : "???"
            : "Blind Man"}
        </h1>
      </div>

      <section
        style={{
          display: "flex",
          placeContent: "center",
          placeItems: "center",
          flexFlow: props.name === "daughter" && "row wrap",
          position: "relative",
          width: "100%",
          height: "250px",
        }}
      >
        {props.name === "daughter" &&
          props.temporaryArray.map((array, id) => (
            <button
              key={id}
              style={{
                width: "71px",
                height: "49.5px",
                pointerEvents: "none",
                flex: "1 0 auto",
                color: "transparent",
                backgroundColor: "transparent",
                animation:
                  props.indexCorrect < 16 &&
                  props.correctIndex[id] === id &&
                  "background-change 800ms ease",
                backgroundImage: props.correctIndex[id] !== id && `url(${Bg1})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
              }}
            >
              {array}
            </button>
          ))}
        <img
          src={
            props.name === "daughter"
              ? props.indexCorrect === 16
                ? localStorage.sanity === "chill"
                  ? Number(localStorage.chillLevel) === 1
                    ? DaughterGif1
                    : Number(localStorage.chillLevel) === 2
                    ? DaughterGif2
                    : Number(localStorage.chillLevel) === 3
                    ? DaughterGif3
                    : Number(localStorage.chillLevel) === 4
                    ? DaughterGif4
                    : Number(localStorage.chillLevel) === 5
                    ? DaughterGif5
                    : Number(localStorage.chillLevel) === 6
                    ? DaughterGif6
                    : Number(localStorage.chillLevel) === 7
                    ? DaughterGif7
                    : Number(localStorage.chillLevel) === 8
                    ? DaughterGif8
                    : Number(localStorage.chillLevel) === 9
                    ? DaughterGif9
                    : Number(localStorage.chillLevel) === 10
                    ? DaughterGif10
                    : Number(localStorage.chillLevel) === 11
                    ? DaughterGif11
                    : Number(localStorage.chillLevel) === 12 && DaughterGif12
                  : localStorage.sanity === "crazy" &&
                    Number(localStorage.crazyLevel) === 1
                  ? DaughterGif1
                  : Number(localStorage.crazyLevel) === 2
                  ? DaughterGif2
                  : Number(localStorage.crazyLevel) === 3
                  ? DaughterGif3
                  : Number(localStorage.crazyLevel) === 4
                  ? DaughterGif4
                  : Number(localStorage.crazyLevel) === 5
                  ? DaughterGif5
                  : Number(localStorage.crazyLevel) === 6
                  ? DaughterGif6
                  : Number(localStorage.crazyLevel) === 7
                  ? DaughterGif7
                  : Number(localStorage.crazyLevel) === 8
                  ? DaughterGif8
                  : Number(localStorage.crazyLevel) === 9
                  ? DaughterGif9
                  : Number(localStorage.crazyLevel) === 10
                  ? DaughterGif10
                  : Number(localStorage.crazyLevel) === 11
                  ? DaughterGif11
                  : Number(localStorage.crazyLevel) === 12 && DaughterGif12
                : props.indexCorrect !== 16 && localStorage.sanity === "chill"
                ? Number(localStorage.chillLevel) === 1
                  ? DaughterJpg1
                  : Number(localStorage.chillLevel) === 2
                  ? DaughterJpg2
                  : Number(localStorage.chillLevel) === 3
                  ? DaughterJpg3
                  : Number(localStorage.chillLevel) === 4
                  ? DaughterJpg4
                  : Number(localStorage.chillLevel) === 5
                  ? DaughterJpg5
                  : Number(localStorage.chillLevel) === 6
                  ? DaughterJpg6
                  : Number(localStorage.chillLevel) === 7
                  ? DaughterJpg7
                  : Number(localStorage.chillLevel) === 8
                  ? DaughterJpg8
                  : Number(localStorage.chillLevel) === 9
                  ? DaughterJpg9
                  : Number(localStorage.chillLevel) === 10
                  ? DaughterJpg10
                  : Number(localStorage.chillLevel) === 11
                  ? DaughterJpg11
                  : Number(localStorage.chillLevel) === 12 && DaughterJpg12
                : localStorage.sanity === "crazy" &&
                  Number(localStorage.crazyLevel) === 1
                ? DaughterJpg1
                : Number(localStorage.crazyLevel) === 2
                ? DaughterJpg2
                : Number(localStorage.crazyLevel) === 3
                ? DaughterJpg3
                : Number(localStorage.crazyLevel) === 4
                ? DaughterJpg4
                : Number(localStorage.crazyLevel) === 5
                ? DaughterJpg5
                : Number(localStorage.crazyLevel) === 6
                ? DaughterJpg6
                : Number(localStorage.crazyLevel) === 7
                ? DaughterJpg7
                : Number(localStorage.crazyLevel) === 8
                ? DaughterJpg8
                : Number(localStorage.crazyLevel) === 9
                ? DaughterJpg9
                : Number(localStorage.crazyLevel) === 10
                ? DaughterJpg10
                : Number(localStorage.crazyLevel) === 11
                ? DaughterJpg11
                : Number(localStorage.crazyLevel) === 12 && DaughterJpg12
              : props.name !== "daughter" && props.isFailed
              ? BlindGif2
              : BlindGif1
          }
          alt={props.name === "daughter" ? "Daughter" : "Blind Man"}
          style={{
            width: "100%",
            zIndex: "-1",
            position: "absolute",
            top: "0",
            bottom: "0",
            margin: "auto 0",
            boxShadow:
              props.name === "daughter"
                ? "0px 0px 0px 2px #810CA8," +
                  "0px 0px 0px 5px #2D033B," +
                  "0px 0px 5px 9px #22042c"
                : "0px 0px 0px 2px #86135c," +
                  "0px 0px 0px 5px #2C061F," +
                  "0px 0px 5px 9px #250018",
          }}
        />
      </section>

      <section
        style={{
          display: "flex",
          flexFlow: "row wrap",
          height: "290px",
          placeContent:
            props.name === "daughter" && props.indexCorrect !== 16 && "center",
          placeItems:
            props.name === "daughter" && props.indexCorrect !== 16 && "center",
          background: props.name === "daughter" ? "#2D033B" : "#2C061F",
          boxShadow:
            props.name === "daughter"
              ? "0px 0px 0px 2px #810CA8," +
                "0px 0px 0px 5px #2D033B," +
                "0px 0px 5px 9px #22042c"
              : "0px 0px 0px 2px #86135c," +
                "0px 0px 0px 5px #2C061F," +
                "0px 0px 5px 9px #250018",
          overflow: "hidden",
        }}
      >
        {props.name === "daughter" && props.indexCorrect !== 16 ? (
          <h1
            className="header3-h1"
            style={{
              fontSize: "5rem",
              background: props.name === "daughter" ? "#810ca8" : "#86135c",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              letterSpacing: "10px",
            }}
          >
            ???
          </h1>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                placeContent: "space-evenly",
                placeItems: "center",
                height: "120px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  placeContent: "center",
                  placeItems: "center",
                  height: "100%",
                  width: "175px",
                  borderRight:
                    props.name === "daughter"
                      ? "2px solid #810CA8"
                      : "2px solid #86135c",
                }}
              >
                <h1
                  className="header3-h1"
                  style={{
                    fontSize: "1.5rem",
                    background:
                      props.name === "daughter" ? "#810ca8" : "#86135c",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    width: "95%",
                    padding: "10px 0px 0px 10px",
                    animation:
                      ((props.name === "daughter" &&
                        props.indexCorrect === 16) ||
                        (props.isFailed && props.name !== "daughter")) &&
                      "fade-entrance 2000ms ease",
                  }}
                >
                  {props.isFailed
                    ? "Dead"
                    : props.name === "daughter"
                    ? "Mood"
                    : "Healthy"}
                </h1>
                <div
                  style={{
                    display: "flex",
                    placeContent: "space-evenly",
                    placeItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      placeContent: "space-evenly",
                      placeItems: "center",
                      width: "100%",
                      height: "100%",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={
                        props.name === "daughter"
                          ? localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) === 1
                              ? Emoji1
                              : Number(localStorage.chillLevel) === 2
                              ? Emoji2
                              : Number(localStorage.chillLevel) === 3
                              ? Emoji3
                              : Number(localStorage.chillLevel) === 4
                              ? Emoji4
                              : Number(localStorage.chillLevel) === 5
                              ? Emoji5
                              : Number(localStorage.chillLevel) === 6
                              ? Emoji6
                              : Number(localStorage.chillLevel) === 7
                              ? Emoji7
                              : Number(localStorage.chillLevel) === 8
                              ? Emoji8
                              : Number(localStorage.chillLevel) === 9
                              ? Emoji9
                              : Number(localStorage.chillLevel) === 10
                              ? Emoji10
                              : Number(localStorage.chillLevel) === 11
                              ? Emoji11
                              : Number(localStorage.chillLevel) === 12 &&
                                Emoji12
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) === 1
                            ? Emoji1
                            : Number(localStorage.crazyLevel) === 2
                            ? Emoji2
                            : Number(localStorage.crazyLevel) === 3
                            ? Emoji3
                            : Number(localStorage.crazyLevel) === 4
                            ? Emoji4
                            : Number(localStorage.crazyLevel) === 5
                            ? Emoji5
                            : Number(localStorage.crazyLevel) === 6
                            ? Emoji6
                            : Number(localStorage.crazyLevel) === 7
                            ? Emoji7
                            : Number(localStorage.crazyLevel) === 8
                            ? Emoji8
                            : Number(localStorage.crazyLevel) === 9
                            ? Emoji9
                            : Number(localStorage.crazyLevel) === 10
                            ? Emoji10
                            : Number(localStorage.crazyLevel) === 11
                            ? Emoji11
                            : Number(localStorage.crazyLevel) === 12 && Emoji12
                          : props.name !== "daughter" && props.isFailed
                          ? Skull
                          : Heart
                      }
                      alt={props.name === "daughter" ? "Mood" : "Healthy"}
                      style={{
                        width: "45px",
                        animation:
                          ((props.name === "daughter" &&
                            props.indexCorrect === 16) ||
                            (props.isFailed && props.name !== "daughter")) &&
                          "fade-entrance 2000ms ease",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexFlow: props.indexCorrect === 16 && "column nowrap",
                  placeContent: "center",
                  placeItems: "center",
                  height: "100%",
                  width: "175px",
                  padding: props.indexCorrect === 16 && "0 5px",
                  fontSize: props.indexCorrect !== 16 && "2rem",
                }}
              >
                <h1
                  className="header3-h1"
                  style={{
                    fontSize: props.indexCorrect !== 16 ? "3rem" : "1.5rem",
                    background:
                      props.name === "daughter" ? "#810ca8" : "#86135c",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    padding: props.indexCorrect === 16 && "10px 0 0 10px",
                    textAlign: props.indexCorrect !== 16 && "center",
                    letterSpacing: props.indexCorrect !== 16 && "10px",
                    animation:
                      props.indexCorrect === 16 && "fade-entrance 2000ms ease",
                  }}
                >
                  {props.indexCorrect !== 16 ? "???" : "Bond"}
                </h1>
                {props.indexCorrect === 16 && (
                  <div
                    style={{
                      display: "flex",
                      placeContent: "space-evenly",
                      placeItems: "center",
                      width: "100%",
                      height: "100%",
                      marginBottom: "10px",
                    }}
                  >
                    {props.name === "daughter" ? (
                      <>
                        <Bond />
                        <Bond />
                      </>
                    ) : (
                      <>
                        <Bond />
                        <Bond />
                        <Bond />
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div
              style={{
                display: props.indexCorrect !== 16 && "flex",
                flex: "1 0 100%",
                placeContent: props.indexCorrect !== 16 && "center",
                placeItems: props.indexCorrect !== 16 && "center",
                fontSize: props.indexCorrect !== 16 && "3rem",
                height: "58%",
                borderTop:
                  props.name === "daughter"
                    ? "2px solid #810CA8"
                    : "2px solid #86135c",
              }}
            >
              {props.indexCorrect !== 16 ? (
                <h1
                  className="header3-h1"
                  style={{
                    fontSize: "4rem",
                    background:
                      props.name === "daughter" ? "#810ca8" : "#86135c",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center",
                    letterSpacing: "10px",
                  }}
                >
                  ???
                </h1>
              ) : (
                <p
                  className="game2Children-p"
                  style={{
                    color: props.name === "daughter" ? "#810ca8" : "#86135c",
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    textAlign: "justify",
                    wordBreak: "break-word",
                    wordSpacing: "-0.5rem",
                    whiteSpace: "wrap",
                    width: "97.5%",
                    padding: "5px",
                    animation:
                      props.indexCorrect === 16 && "fade-entrance 2000ms ease",
                  }}
                >
                  {props.name === "daughter" &&
                  ((localStorage.sanity === "chill" &&
                    Number(localStorage.chillLevel) === 1) ||
                    (localStorage.sanity === "crazy" &&
                      Number(localStorage.crazyLevel) === 1))
                    ? `The eldest daughter, ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }, is a natural leader. With a strong sense of responsibility, she often takes charge of family matters and sets an example for her younger siblings.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 2) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 2))
                    ? `Following closely behind, ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } is known for her intelligence and curiosity. Always with a book in hand, she has a keen interest in learning and exploring new ideas.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 3) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 3))
                    ? `The third sister, ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }, is an artist at heart. She expresses herself through various forms of creativity, whether it's painting, writing, or playing a musical instrument.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 4) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 4))
                    ? `${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } is the athletic one of the bunch. Her energy is contagious, and she excels in sports, inspiring her sisters to stay active and healthy.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 5) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 5))
                    ? `With a calm and collected demeanor, ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } is often the peacemaker among her siblings. She has a natural ability to mediate conflicts and bring harmony to the family.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 6) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 6))
                    ? `${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } is the social butterfly of the family. She has a wide circle of friends and is always eager to meet new people. Her outgoing nature adds a vibrant energy to family gatherings.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 7) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 7))
                    ? `True to her name, ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } is known for her elegance and poise. She possesses a natural gracefulness in her movements and has a sophisticated taste that influences the family's style.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 8) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 8))
                    ? `${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } has a love for animals and nature. Whether it's caring for pets or spending time outdoors, she has a deep connection with the environment and encourages her sisters to appreciate the world around them.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 9) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 9))
                    ? `${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } is the adventurous spirit. Always seeking excitement, she enjoys trying new things and taking risks. Her daring nature brings an element of unpredictability to family activities.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 10) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 10))
                    ? `${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } is the nurturing sister, often taking care of others. Her compassion and empathy make her a reliable source of support for her siblings during both good times and challenging moments.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 11) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 11))
                    ? `${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } is the tech-savvy sister, with a passion for gadgets and innovation. Her interest in the digital world often leads the family into exploring the latest technologies together.`
                    : props.name === "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 12) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 12))
                    ? `The youngest of the sisters, ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }, brings a sense of innocence and joy to the family. Her playful spirit and wide-eyed wonder remind everyone to appreciate the simple joys of life.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 1) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 1))
                    ? `The firstborn and natural leader, ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } holds a special place in the blind man's heart. He sees her as a responsible and reliable ally in raising and guiding her younger sisters. They share a bond of mutual respect and trust.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 2) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 2))
                    ? `The blind man admires ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }'s intellect and curiosity. He encourages her love for learning and values their deep conversations, relishing in the shared pursuit of knowledge.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 3) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 3))
                    ? `Recognizing ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }'s artistic talents, the blind man takes pride in her creativity. He supports her passion for the arts, providing encouragement and a nurturing environment for her to express herself.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 4) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 4))
                    ? `The athletic prowess of ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } brings joy to the blind man. He cheers her on at sports events, reveling in the energy and determination she brings to her pursuits.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 5) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 5))
                    ? `${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }, the peacemaker, is a source of comfort for the blind man. He appreciates her ability to mediate conflicts and values her calming influence on the family dynamics.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 6) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 6))
                    ? `The blind man enjoys ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }'s outgoing nature. Together, they attend social events and family gatherings, celebrating the connections she effortlessly builds with others.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 7) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 7))
                    ? `${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }'s elegance resonates with the blind man. They share refined tastes, attending cultural events together and fostering a mutual appreciation for beauty and sophistication.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 8) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 8))
                    ? `The blind man connects with ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } through their shared love for nature. They embark on outdoor adventures together, bonding over hikes, camping trips, and the joy of caring for animals.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 9) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 9))
                    ? `The blind man admires ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }'s adventurous spirit. He encourages her to explore new horizons, embracing her willingness to take risks and appreciating the excitement she brings to the family.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 10) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 10))
                    ? `${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }'s nurturing qualities are a source of comfort for the blind man. He relies on her compassionate nature to create a warm and supportive family environment.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 11) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 11))
                    ? `The blind man is intrigued by ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      }'s tech-savvy interests. They explore the world of technology together, bonding over a shared fascination with innovation and staying current with the latest advancements.`
                    : props.name !== "daughter" &&
                      ((localStorage.sanity === "chill" &&
                        Number(localStorage.chillLevel) === 12) ||
                        (localStorage.sanity === "crazy" &&
                          Number(localStorage.crazyLevel) === 12)) &&
                      `As the youngest, ${
                        daughters.Name[
                          localStorage.sanity === "chill"
                            ? Number(localStorage.chillLevel) - 1
                            : localStorage.sanity === "crazy" &&
                              Number(localStorage.crazyLevel) - 1
                        ]
                      } brings a special joy to the blind man's life. He cherishes the innocence and playfulness she adds to the family dynamic, relishing in the role of a loving and protective parent.`}
                </p>
              )}
            </div>
          </>
        )}
      </section>
    </section>
  );
};

const CheckerContainer = (props) => {
  return (
    <button
      key={props.id}
      style={{
        fontSize: "1rem",
        fontWeight: "bolder",
        width: "50px",
        pointerEvents: "none",
        flex: "1 0 auto",
        color:
          props.currentIndex.current[props.id] === props.id ||
          props.isFailed ||
          (props.game >= 0 &&
            props.game <= 16 &&
            props.countUp.current !== 10000)
            ? "#000c1a"
            : props.game !== 99 && "#e0fbfc",
        border: "1px solid #372f85",
        backgroundColor:
          props.currentIndex.current[props.id] === props.id
            ? "#98c1d9"
            : props.isFailed ||
              (props.game >= 0 &&
                props.game <= 16 &&
                props.countUp.current !== 10000 &&
                props.game === props.id)
            ? "#ee6c4d"
            : props.countUp.current === 10000
            ? "transparent"
            : props.countUp.current !== 10000 && "#98c1d9",
        animation:
          !props.isFailed &&
          props.countUp.current === 10000 &&
          props.indexCorrect.current === props.id
            ? "current-move 1000ms linear infinite both alternate"
            : props.currentIndex.current[props.id] === props.id &&
              props.indexCorrect.current < 16 &&
              "background-change2 800ms ease",
        transition: props.countUp.current < 16 && props.game !== 99 && "500ms",
      }}
    >
      {props.array}
    </button>
  );
};
