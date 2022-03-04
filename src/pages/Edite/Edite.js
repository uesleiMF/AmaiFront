import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Apii from "../../api/apii";

const Edite = () => {
  const navigate = useNavigate();
  //declarar o estado da musica
  const [user, setUser] = useState({
    name: '',
    descricao:'',
    prioridade:'',
    status:'',
    capa:'',
    data:'',
    prazo:''

 });
  
 useEffect(() => {
  getUserById();
}, []);

  // buscar a musica que ja foi cadastrado no banco.
  // buscar a musica pelo o id passado via parametro da url.
  const { id } = useParams();

  //buscar a musica por id;
  const getUserById = async () => {
    const request = await Apii.fetchGetById(id);
    const user = await request.json();
    setUser(user);
  };

  const handleFieldsChange = (evento) => {
    // copio o objeto do estado.
    const userEdite = { ...user };
    // musicaEdit['nome'] = 'novo valor'
    // atualiza os campos do objeto de forma dinamica de acordo com o input que o usuario digitou
    userEdite[evento.target.name] = evento.target.value;
    // atualzo estado musica
    setUser(userEdite);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const request = await Apii.fetchPut(user, id);
    const data = await request.json();
    alert(data.message);
    navigate(`/vieww/${id}`);
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title ">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Edição do Usuario</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="name">Nome:</label>
                  <input
                    id="name"
                    className="form-control"
                    type="text"
                    placeholder="Nome do Usuario"
                    value={user.name}
                    onChange={handleFieldsChange}
                    name="name"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição do produto:</label>
                  <input
                  
                    id="descricao"
                    type="text"
                    className="form-control"
                    placeholder="Descrição do Produto"
                    value={user.descricao}
                    onChange={handleFieldsChange}
                    name="descricao"
                    
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade do Produto:</label>
                  <input
                    id="prioridade"
                    type="text"
                    className="form-control"
                    value={user.prioridade}
                    onChange={handleFieldsChange}
                    placeholder="ruim bom otimo"
                    name="prioridade"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="capa">Link do Produto:</label>
                  <input
                    id="capa"
                    type="text"
                    value={user.capa}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="URL da Produto"
                    name="capa"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Validade do produto:</label>
                  <input
                    id="prazo"
                    type="date"
                    value={user.prazo}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Validade"
                    name="prazo"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="data">Validade :</label>
                  <input
                    id="data"
                    type="date"
                    value={user.data}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Validade"
                    name="data"
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
                
              </div>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edite;