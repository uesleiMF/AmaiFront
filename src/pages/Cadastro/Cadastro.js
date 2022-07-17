import React from "react";
import Api from "../../api/api";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProdut from "../../components/structure/ListProdut";
import "./styles.css";



const Cadastro = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // target = quem disparou o evento
    console.log(evento.target);
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prioridade= evento.target.prioridade.value;
    const status= evento.target.status.value;
    const capa = evento.target.capa.value;
    const data= evento.target.data.value;
    const prazo = evento.target.prazo.value;

    const produto = {
      titulo,
      descricao,
      prioridade,
      status,
      capa,
      data,
      prazo
    }




    
    const request = await Api.fetchPost(produto);
    if(request.status === 500) {
      alert('ERRO NO SERVIDOR')
    }
    const result = await request.json();
    if(result.error) {
      console.log(result.error);
    }else {
      alert(result.message);
      navigate('/cadastro');
    }
  }

  return (
   

    <div className="container">
      <div className="card mt-2 bg-warning">
        <div className="card-title">
          <div className="row">
            <div className="col">
              
              <h3 className="mx-3 my-3 text-center">Cadastrar Casais</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="titulo">Nome:</label>
                  <input id="titulo" className="form-control" type="text" placeholder="Nome dos Casais" name="titulo"/>
                </div>
              </div>
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição:</label>
                  <input id="descricao" type="text" className="form-control" placeholder="Descrição" name="descricao"/>
                </div>
              </div>
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade :</label>
                  <input id="prioridade" type="text" className="form-control" placeholder=" " name="prioridade"/>
                </div>
              </div>
            <div className="col-5">
                <div className="form-group">
                  <label htmlFor="status">Status :</label>
                  <input id="status" type="text" className="form-control" placeholder=" " name="status"/>
                </div>
              </div>
            
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="capa">Capa:</label>
                  <input id="capa" type="text" className="form-control" placeholder="URL da capa do album" name="capa"/>
                </div>
              </div>
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="prazo">Aniversario:</label>
                  <input id="prazo" type="date" className="form-control" placeholder="Aniversario" name="prazo"/>
                </div>
              </div>
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="data">Data:</label>
                  <input id="data" type="date" className="form-control"  placeholder="Data " name="data"/>
                </div>
              </div>
            
              
              <div className="col-5 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">Enviar</button>
                <button type="reset" className="btn btn-danger">Limpar</button>
              </div>
            </div>
                    
          
          </form>
        </div>
      </div>
    

      <div className="card mt-2 bg-warning">
        <div className="card-title">
          <div className="row">
            <div className="col">
              
              <h3 className="mx-3 my-3 text-center">Casais Cadastrados</h3>
            </div>
         
              
                <ListProdut/>
              </div>
              </div>
 </div>
        </div>
        
      
  
);
}
export default Cadastro