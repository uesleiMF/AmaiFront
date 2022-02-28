import ue from "../../components/Img/ues.jpg";
import fe from "../../components/Img/feli.jpg";
import fl from "../../components/Img/fla.jpg";
import ro from "../../components/Img/logo.jpg";
import ma from "../../components/Img/mac.jpg";
import {
  SiLinkedin,
  SiReact,
  SiPrisma,
  SiBootstrap,
  SiSwagger,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { Cards, Social } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Sobrenos() {
  return (
    <div className="container">
      <div className="card mt-6 bg-warning">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <br></br>
              <h3 className="mx-3 my-3 text-center">BIOGRAFIA DOS DEVS</h3>
            </div>
          </div>
          <p>
            <h5>
              <justify>
                
                O projeto Gerenciador Restoque visa automatizar o gerenciamento
                de produtos da maneira mais otimizada possível, nosso
                disponibiliza a melhor solução para gerenciamento de produtos!
              </justify>
            </h5>
          </p>

          <br></br>
          <p>
            <h3>
              <center> INFORMAÇÕES SOBRE O PROJETO:</center>
            </h3>
          </p>

          <p>
            <h5>
              <center>
                Aqui foram usadas as ferramentas para o desenvolvimento do nosso
                projeto:
              </center>
            </h5>
          </p>
          <Social>
            <a href="https://swagger.io/">
              {" "}
              <SiSwagger />
            </a>
            <h7>Swagger</h7>
            <a href="https://www.prisma.io/">
              {" "}
              <SiPrisma />
            </a>
            <h7>Prisma</h7>
            <a href="https://pt-br.reactjs.org/">
              {" "}
              <SiReact />
            </a>
            <h7>React</h7>
            <a href="https://getbootstrap.com/">
              {" "}
              <SiBootstrap />
            </a>
            <h7>Bootstrap</h7>
            <a href="https://github.com/uesleiMF">
              {" "}
              <FaCss3Alt />
            </a>
            <h7>Css</h7>
            <a href="https://www.javascript.com/">
              {" "}
              <IoLogoJavascript />
            </a>
            <h7>Javascript</h7>
          </Social>
          <br></br>

          <p>
            <h2>
              <center>Conheça nossa equipe:</center>
            </h2>
          </p>

          <Cards>
            <img src={ue} alt="bo" width="50%" height="200px" />

            <br></br>
            <br></br>
            <h4>
              <p> Jose Ueslei de Moraes Ferreira</p>
            </h4>

            <Social>
              <a href="https://www.linkedin.com/in/jose-ueslei-de-moraes-ferreira-833b52112/">
                
                <SiLinkedin />
              </a>
              <a href="https://github.com/uesleiMF">
              
                <AiFillGithub />
              </a>
            </Social>

            <p>
              <h4>
                <center> Telefone: (094) 99972-7849 </center>
              </h4>
            </p>

            <p>
              <h5>
                <center> INFORMAÇÕES:</center>
              </h5>
            </p>

            <p>
              <h5>
                <center>FORMAÇÃO ACADEMICA:</center>
              </h5>
            </p>
            <p>Analise e Desenvolimento de Sistemas</p>
            <p>
              Faculdade<br></br>(UNOPAR)
            </p>
            <h5>
              <justify> CURSO DE PROGRAMAÇÃO WEB:</justify>
            </h5>
            <p>
              Cursando FullStack (HTML, CSS, JAVASCRIPT, NODEJS, REACT, NESTJS,
              MONGODB, POSTGRES<br></br>(ESCOLA DE PROGRAMAÇÃO BLUEEDTECH)
            </p>
          </Cards>
        </div>
        <div>
          <br></br>

          <Cards>
            <img src={fe} alt="bo" width="55%" height="200px" />

            <br></br>
            <br></br>
            <pre>
            
              <h3> Felipe Patriccio </h3>
            </pre>
            <br></br>
            <br></br>
            <br></br>
            <Social>
              <a href="https://www.linkedin.com/in/felipe-patr%C3%ADcio-633b0b1a2/">
                
                <SiLinkedin />
              </a>
              <a href="https://github.com/felipepatricioo/">
                
                <AiFillGithub />
              </a>
            </Social>

            <p>
              <h4>
                <center> Telefone: (041) 98760-6925 </center>
              </h4>
            </p>

            <p>
              <h4>
                <center> INFORMAÇÕES:</center>
              </h4>
            </p>

            <p>
              <h4>
                <center>FORMAÇÃO ACADEMICA:</center>
              </h4>
            </p>
            <p>
              Cursando Engenharia de Software<br></br>(UNINTER)
            </p>
            <h5>
              <justify> CURSO DE PROGRAMAÇÃO WEB:</justify>
            </h5>
            <p>
              Cursando FullStack (HTML, CSS, JAVASCRIPT, NODEJS, REACT, NESTJS,
              MONGODB, POSTGRES<br></br>(ESCOLA DE PROGRAMAÇÃO BLUEEDTECH)
            </p>
          </Cards>
        </div>
        <div>
          <br></br>
          <Cards>
            <img src={fl} alt="bo" width="50%" height="200px" />

            <br></br>
            <br></br>
            <h4>
              <p> Flavio Teston Izzo Junior</p>
            </h4>

            <Social>
              <a href="https://www.linkedin.com/in/izzo-junior">
                
                <SiLinkedin />
              </a>
              <a href="https://github.com/izzojunior">
                
                <AiFillGithub />
              </a>
            </Social>

            <p>
              <h4>
                <center> Telefone: (11) 93023-8601 </center>
              </h4>
            </p>

            <p>
              <h3>
                <center> INFORMAÇÕES:</center>
              </h3>
            </p>

            <p>
              <h3>
                <center>FORMAÇÃO:</center>
              </h3>
            </p>
            <p>
              <h5>
                Ensino Medio Completo<br></br>
              </h5>
            </p>
            <h5>
              <justify> CURSO DE PROGRAMAÇÃO WEB:</justify>
            </h5>
            <p>
              Cursando Backend (Java script, HTML, CSS, Node JS, Expres, github,
              gerenciamento de dados, Banco de dados, Documentação, swagger, PG
              adimim.<br></br>(ESCOLA DE PROGRAMAÇÃO BLUEEDTECH)
            </p>
          </Cards>
        </div>
        <div>
          <br></br>
          <Cards>
            <img src={ma} alt="bo" width="50%" height="200px" />

            <br></br>
            <br></br>
            <h4>
              <p> Marcelo da Rocha Machado</p>
            </h4>

            <Social>
              <a href="https://www.linkedin.com/in/marcelo-da-rocha-machado-38b77427/">
                
                <SiLinkedin />
              </a>
              <a href=" https://github.com/machadomrm">
                
                <AiFillGithub />
              </a>
            </Social>

            <p>
              <h4>
                <center>
                  
                  Telefone: (81) 988630116 *whatsapp / (81) 981194242
                </center>
              </h4>
            </p>

            <p>
              <h4>
                <center> INFORMAÇÕES:</center>
              </h4>
            </p>

            <p>
              <h4>
                <center>FORMAÇÃO ACADEMICA:</center>
              </h4>
            </p>
            <p>Formado em Gestão da Tecnologia da Informação</p>
            <h5>
              <justify> CURSO DE PROGRAMAÇÃO WEB:</justify>
            </h5>
            <p>
              Cursando Backend (HTML, CSS, JAVASCRIPT, NODEJS, REACT, NESTJS,
              MONGODB, POSTGRES<br></br>(ESCOLA DE PROGRAMAÇÃO BLUEEDTECH)
            </p>
          </Cards>
        </div>
        <div>
          <br></br>
          <Cards>
            <img src={ro} alt="bo" width="50%" height="200px" />

            <br></br>
            <br></br>
            <h4>
              <p> Rodrigo Reis de Sousa</p>
            </h4>

            <Social>
              <a href="https://www.linkedin.com/in/rodrigo-reis-de-sousa-85131b144/">
                
                <SiLinkedin />
              </a>
              <a href="https://github.com/RodrigoRsousa">
            
                <AiFillGithub />
              </a>
            </Social>

            <p>
              <h4>
                <center> Telefone: (47) 984801603 </center>
              </h4>
            </p>

            <p>
              <h4>
                <center> INFORMAÇÕES:</center>
              </h4>
            </p>

            <p>
              <h4>
                <center>FORMAÇÃO ACADEMICA:</center>
              </h4>
            </p>
            <p>
              Técnico em informática, Sistema da Informação-em andamento
              (IFET-MG) / Tecnologo em redes - Univiçosa / Sistema - UDESC - SC
            </p>
            <h5>
              <justify> CURSO DE PROGRAMAÇÃO WEB:</justify>
            </h5>
            <p>
              Cursando Backend (Swagger, Banco de Dados, Pesquisa e Login de
              Admin<br></br>(ESCOLA DE PROGRAMAÇÃO BLUEEDTECH)
            </p>
          </Cards>
        </div>
        <div>
          <br></br>
        </div>
      </div>
    </div>
  );
}
