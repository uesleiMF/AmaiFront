import logo from "./rest.png";
import { Container, Logo, List } from "./styles";
import {
  FaRegQuestionCircle,
  FaHeart,
  FaRegUser,
  FaUserPlus,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

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
        {
          token ? (
            <li>
              <a href="/">
              <FaRegUser />
              <span>Gerenciamento de produtos</span>
            </a>
            </li>
          ) : (
            <>
            </>
          )
        }
        <li>
          {token ? (
            <a href="/profile">
              <FaRegUser />
              <span>Perfil</span>
            </a>
          ) : (
            <a href="/login">
              <FaRegUser />
              <span>Login</span>
            </a>
          )}
        </li>
      </List>
    </Container>
  );
}
