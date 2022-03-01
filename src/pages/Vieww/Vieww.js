import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Apii from '../../api/apii';

const Vieww = () => {
  // inicializa o estado musica para poder fazer as alteracoes do dom.
  const [user, setUser] = useState({});
  // crio o estado de abertura do modal;
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // funcoes de abertura e fechamento do modal
  const AbreModal = () => setOpen(true);
  const FechaModal = () => setOpen(false);

  // chama o use effect sem parametro de dependencia (executa uma vez ao renderizar o componente)
  // chamando a funcao getMusicaById
  useEffect(() => {
    getUserById();
  }, )

  // acessa o id no parametro da url;
  const { id } = useParams();
  console.log(id);

  // faz a chamada para a api passando o id como parametro para buscar o objeto da musica (invidual por id)
  const getUserById = async () => {
    const request = await Apii.fetchGetById(id);
    const user = await request.json();
    setUser(user);
  }

  const handleDelete = async() => {
    const response = await Apii.fetchDelete(id);
    const data = await response.json();
    if(data.message) {
      console.log('excluido', data.message);
      navigate('/cadu');
    }else {
      alert(data.error);
    }
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-6">
          <img src={user.capa} className="w-100" alt={user.name}/>
        </div>
        <div className="col-6">
          <div className="card my-10 bg-light">
            <h1 className="text-center my-2"><b>Nome: </b>{user.name}</h1>
            <h3 className="text-center text-success "><b>Descrição: </b>{user.descricao}</h3>
            <h4 className="text-center text-danger"><b>Prioridade: </b> {user.prioridade}</h4>
            <h5 className="text-center text-primary"><b>Status: </b>{user.status}</h5>
            <h5 className="text-center text-warning"><b>Prazo: </b>{user.prazo}</h5>
            <h6 className="text-center text-secondary"><b>Data de Criação: </b>{user.dataCriacao}</h6>
            <div className="btn-group mt-3 w-100">
              <Link to={`/edite/${user._id}`} className="btn btn-info">Editar</Link>
              <button className="btn btn-danger" onClick={AbreModal}> Excluir</button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
        <h2 className="my-4">Deseja Realmente Excluir ?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger mr-2" onClick={FechaModal}>Não</button>
          <button className="btn btn-success" onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
  )
}

export default Vieww
