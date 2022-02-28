import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const profileData = location.state;
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    axios
      .get("/user/seeList", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setVistos(response.data);
        });
  }, []);

  const getToken = localStorage.getItem("token");
  if (!getToken) {
    return;
  }
  const token = JSON.parse(getToken).token;
  return (
    <>
      <Header />
      <div className="max-w-full m-8 items-center border-2 p-8 rounded-xl shadow-xl">
        <div className="text-6xl">Perfil</div>
        <div className="max-w-full my-8 flex justify-between gap-8">
          <div className="w-1/2 border-2 p-2 text-lg">
            <img
              src={profileData.imageUrl}
              alt={profileData.name}
              className="w-48 float-left mr-8"
            />
            <div className="text-2xl text-center">Dados Pessoais</div>
            <p className="mt-8">Nome: {profileData.name}</p>
            <p>E-mail: {profileData.email}</p>
           
          </div>
          <div className="w-1/2">
            <div className="text-2xl">
              Produtos {produto.length} Vistos!
            </div>
            <div className="grid grid-cols-4 gap-8 mt-8">
              {produto.map((item) => (
                <CardProfile
                  titulo={item.title}
                  imagem={item.cover}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
