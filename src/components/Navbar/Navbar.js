import { Container,List } from "./styles";
import {
 
  FaHeart,
  FaRegUser,
  FaUserPlus,
 
} from "react-icons/fa";

export default function Navbar() {
  const token = localStorage.getItem("token");

  console.log(token)

  return (
    <Container>
      <List>
        <li>
          <a href="/">
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
      
        <li>
        
            <a href="/login">
              <FaRegUser />
              <span>Login</span>
            </a>
      
        </li>
      </List>
    </Container>
  );
}
