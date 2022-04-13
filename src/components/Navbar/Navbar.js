import { Container,List } from "./styles";
import {FaHeart,FaRegUser,FaUserPlus} from "react-icons/fa";
import styles from "./styles.module.css";

export default function Navbar() {
  const token = localStorage.getItem("token");

  console.log(token)
  
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
    
	};

  return (
    <Container>
      <List>
        <li>
          <a href="/home">
            <FaHeart />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/sobrenos">
            <FaUserPlus />
            <span>Sobre Nos</span>
          </a>
        </li>
       
        {
          token ? (
            <li>
              <a href="/cadastro">
              <FaRegUser />
              <span>Gerenciamento/Casais</span>
            </a>
            </li>
          ) : (
            <>
            </>
          )
        }
        <li>
         
            <a href="/login">
              <FaRegUser />
              <span>Login</span>
            </a>
        
          
          
        </li>


        <button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>


      </List>
    </Container>
  );
}
