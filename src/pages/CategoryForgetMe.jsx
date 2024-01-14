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
            <FontAwesomeIcon icon={faDiceD20} />
            <p className="buttonChildren-p">Crazy</p>
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
