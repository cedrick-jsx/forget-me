import {
  ContainerMain,
  ContainerHeader,
  ContainerButton,
  ButtonMain,
  ContainerSub,
} from "../App.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceD20,
  faDiceD6,
  faLock,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function CategoryForgetMe() {
  return (
    <ContainerMain>
      <ContainerSub>
        <ContainerHeader>
          <h1 className="header-h1">Sanity</h1>
          <h1 className="header-h1">Meter</h1>
        </ContainerHeader>

        <ContainerButton>
          <ButtonMain buttonName="chill">
            <FontAwesomeIcon icon={faDiceD6} />
            <p className="buttonChildren-p">Chill</p>
          </ButtonMain>
        </ContainerButton>

        <ContainerButton>
          <ButtonMain buttonName="crazy">
            <FontAwesomeIcon
              icon={
                Number(localStorage.chillCurrentLevel < 13) ||
                !localStorage.chillCurrentLevel
                  ? faLock
                  : faDiceD20
              }
            />
            <p className="buttonChildren-p">
              {Number(localStorage.chillCurrentLevel < 13) ||
              !localStorage.chillCurrentLevel
                ? "?????"
                : "Crazy"}
            </p>
          </ButtonMain>
        </ContainerButton>

        <ContainerButton>
          <ButtonMain buttonName="leave">
            <FontAwesomeIcon icon={faRightToBracket} />
            <p className="buttonChildren-p">Leave</p>
          </ButtonMain>
        </ContainerButton>
      </ContainerSub>
    </ContainerMain>
  );
}
