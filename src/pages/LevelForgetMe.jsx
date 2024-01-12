import { useNavigate } from "react-router-dom";
import { ContainerMain, ContainerHeader } from "../App.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
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

const daughters = [
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

export default function LevelForgetMe() {
  const navigate = useNavigate();

  const LevelContainer = (props) => {
    return (
      <section
        style={{
          width: "1200px",
          display: "flex",
          flexFlow: props.name === "main" ? "column nowrap" : "row wrap",
          placeContent: "center",
          placeItems: "center",
          animation: props.name === "main" && "fade-entrance 1000ms",
          marginBottom: props.name === "main" && "50px",
          gap: props.name !== "main" && "50px",
        }}
      >
        {props.children}
      </section>
    );
  };

  return (
    <LevelContainer name="main">
      <ContainerMain>
        <ContainerHeader>
          <h1 className="header-h1">Session</h1>
          <h1 className="header-h1">{localStorage.sanity}</h1>
        </ContainerHeader>
      </ContainerMain>

      <LevelContainer name="level">
        {daughters.map((daughters, id) => (
          <button
            key={id}
            disabled={
              localStorage.sanity === "chill"
                ? id > Number(localStorage.chillCurrentLevel) - 1 && true
                : localStorage.sanity === "crazy" &&
                  id > Number(localStorage.crazyCurrentLevel) - 1 &&
                  true
            }
            className={
              localStorage.sanity === "chill"
                ? id === Number(localStorage.chillCurrentLevel) - 1
                  ? "level-selection"
                  : id < Number(localStorage.chillCurrentLevel) - 1
                  ? "level-selection1"
                  : id > Number(localStorage.chillCurrentLevel) - 1 &&
                    "level-selection2"
                : localStorage.sanity === "crazy" &&
                  id === Number(localStorage.crazyCurrentLevel) - 1
                ? "level-selection"
                : id < Number(localStorage.crazyCurrentLevel) - 1
                ? "level-selection1"
                : id > Number(localStorage.crazyCurrentLevel) - 1 &&
                  "level-selection2"
            }
            style={{
              display: "inherit",
              flexFlow: "column nowrap",
              placeContent: "inherit",
              placeItems: "inherit",
              backgroundImage:
                localStorage.sanity === "chill"
                  ? id < Number(localStorage.chillCurrentLevel) - 1 && id === 0
                    ? `url("${daughter1}")`
                    : id < Number(localStorage.chillCurrentLevel) - 1 &&
                      id === 1
                    ? `url("${daughter2}")`
                    : id < Number(localStorage.chillCurrentLevel) - 1 &&
                      id === 2
                    ? `url("${daughter3}")`
                    : id < Number(localStorage.chillCurrentLevel) - 1 &&
                      id === 3
                    ? `url("${daughter4}")`
                    : id < Number(localStorage.chillCurrentLevel) - 1 &&
                      id === 4
                    ? `url("${daughter5}")`
                    : id < Number(localStorage.chillCurrentLevel) - 1 &&
                      id === 5
                    ? `url("${daughter6}")`
                    : id < Number(localStorage.chillCurrentLevel) - 1 &&
                      id === 6
                    ? `url("${daughter7}")`
                    : id < Number(localStorage.chillCurrentLevel) - 1 &&
                      id === 7
                    ? `url("${daughter8}")`
                    : id < Number(localStorage.chillCurrentLevel) - 1 &&
                      id === 8
                    ? `url("${daughter9}")`
                    : id === 9
                    ? id < Number(localStorage.chillCurrentLevel) - 1 &&
                      `url("${daughter10}")`
                    : id === 10
                    ? id < Number(localStorage.chillCurrentLevel) - 1 &&
                      `url("${daughter11}")`
                    : id < Number(localStorage.chillCurrentLevel) - 1 &&
                      id === 11 &&
                      `url("${daughter12}")`
                  : localStorage.sanity === "crazy"
                  ? id < Number(localStorage.crazyCurrentLevel) - 1 && id === 0
                    ? `url("${daughter1}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 1
                    ? `url("${daughter2}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 2
                    ? `url("${daughter3}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 3
                    ? `url("${daughter4}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 4
                    ? `url("${daughter5}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 5
                    ? `url("${daughter6}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 6
                    ? `url("${daughter7}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 7
                    ? `url("${daughter8}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 8
                    ? `url("${daughter9}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 9
                    ? `url("${daughter10}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 10
                    ? `url("${daughter11}")`
                    : id < Number(localStorage.crazyCurrentLevel) - 1 &&
                      id === 11 &&
                      `url("${daughter12}")`
                  : "none",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              transition: "300ms",
            }}
            onClick={() => {
              if (localStorage.sanity === "chill")
                localStorage.setItem("chillLevel", `${id + 1}`);
              else if (localStorage.sanity === "crazy")
                localStorage.setItem("crazyLevel", `${id + 1}`);
              navigate("/Play", { replace: true });
            }}
          >
            {(localStorage.sanity === "chill" &&
              id < Number(localStorage.chillCurrentLevel)) ||
            (localStorage.sanity === "crazy" &&
              id < Number(localStorage.crazyCurrentLevel)) ? (
              <p
                className="game2Children-p"
                style={{
                  fontSize:
                    (localStorage.sanity === "chill" &&
                      id < Number(localStorage.chillCurrentLevel) - 1) ||
                    (localStorage.sanity === "crazy" &&
                      id < Number(localStorage.crazyCurrentLevel) - 1)
                      ? "2.5rem"
                      : "7rem",
                  letterSpacing: "10px",
                  color: "transparent",
                  backgroundColor: "transparent",
                  textShadow:
                    "-0.25px -0.25px 0px #000c1a," +
                    "-0.5px -0.5px 0px #000c1a," +
                    "-0.75px -0.75px 0px #e0fbfc," +
                    "-1px -1px 0px #e0fbfc," +
                    "-1.25px -1.25px 0px #e0fbfc," +
                    "-1.50px -1.50px 0px #e0fbfc," +
                    "-1.75px -1.75px 0px #000c1a," +
                    "-2px -2px 0px #000c1a," +
                    "-0.25px -0.25px 5px #98c1d9," +
                    "-0.50px -0.50px 5px #98c1d9," +
                    "-0.75px -0.75px 5px #98c1d9," +
                    "-1px -1px 5px #98c1d9," +
                    "-1.25px -1.25px 5px #98c1d9," +
                    "-1.75px -1.75px 5px #98c1d9," +
                    "-2px -2px 5px #98c1d9",
                  position: "absolute",
                  bottom: "0",
                }}
              >
                {localStorage.sanity === "chill" ? (
                  <>
                    {id === Number(localStorage.chillCurrentLevel) - 1 &&
                      id + 1}
                    {id < Number(localStorage.chillCurrentLevel) - 1 &&
                      daughters}
                  </>
                ) : (
                  localStorage.sanity === "crazy" && (
                    <>
                      {id === Number(localStorage.crazyCurrentLevel) - 1 &&
                        id + 1}
                      {id < Number(localStorage.crazyCurrentLevel) - 1 &&
                        daughters}
                    </>
                  )
                )}
              </p>
            ) : (
              <FontAwesomeIcon icon={faUserSecret} />
            )}
          </button>
        ))}
      </LevelContainer>
    </LevelContainer>
  );
}
