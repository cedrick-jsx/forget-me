import {
  ContainerMain,
  ContainerHeader,
  ContainerButton,
  ButtonMain,
  ContainerSub,
} from "../App.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlay } from "@fortawesome/free-solid-svg-icons";
import fmLogo from "../assets/img/logo/colored.webp";

export default function StartForgetMe() {
  return (
    <ContainerMain>
      <ContainerSub>
        <ContainerHeader>
          <h1 className="header-h1">Did You</h1>

          <div className="container-headerForget">
            <div className="main-face-container">
              <div className="face-container face1">
                <div className="top face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="bottom face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="header-forget right face">F</div>
                <div className="header-forget left face">F</div>
                <div className="header-forget back face">F</div>
                <div className="header-forget front face">F</div>
              </div>
            </div>

            <div className="main-face-container">
              <div className="face-container face2">
                <div className="top face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="bottom face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="header-forget back face">O</div>
                <div className="header-forget front face">O</div>
              </div>
            </div>

            <div className="main-face-container">
              <div className="face-container face3">
                <div className="top face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="bottom face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="header-forget back face">R</div>
                <div className="header-forget front face">R</div>
              </div>
            </div>

            <div className="main-face-container">
              <div className="face-container face4">
                <div className="top face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="bottom face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="header-forget back face">G</div>
                <div className="header-forget front face">G</div>
              </div>
            </div>

            <div className="main-face-container">
              <div className="face-container face5">
                <div className="top face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="bottom face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="header-forget back face">E</div>
                <div className="header-forget front face">E</div>
              </div>
            </div>

            <div className="main-face-container">
              <div className="face-container face6">
                <div className="top face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="bottom face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="header-forget back face">T</div>
                <div className="header-forget front face">T</div>
              </div>
            </div>
          </div>

          <div className="container-headerMe">
            <div className="main-face-container">
              <div className="face-container face7">
                <div className="top face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="bottom face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="header-forget back face">M</div>
                <div className="header-forget front face">M</div>
              </div>
            </div>

            <div className="main-face-container">
              <div className="face-container face8">
                <div className="top face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="bottom face">
                  <img src={fmLogo} alt="Logo" />
                </div>
                <div className="header-forget back face">E</div>
                <div className="header-forget front face">E</div>
              </div>
            </div>
          </div>

          <h1 className="header-h1">Already?</h1>
        </ContainerHeader>

        <ContainerButton>
          <ButtonMain buttonName="start">
            <FontAwesomeIcon icon={faPlay} />
            <p className="buttonChildren-p">Start</p>
          </ButtonMain>
        </ContainerButton>

        <ContainerButton>
          <ButtonMain buttonName="story">
            <FontAwesomeIcon icon={faBook} />
            <p className="buttonChildren-p">Story</p>
          </ButtonMain>
        </ContainerButton>
      </ContainerSub>
    </ContainerMain>
  );
}
