import { ListaProdutos } from "../components/ListaProdutos";
import { Link } from "react-router-dom";
import {AiFillEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";

export default function Produtos() {

    document.title = "Lista de Produtos";

    return (
      <div>
          <h1>LISTA DE PRODUTOS</h1>

        <div>
          <table className={classes.tableStyle}>
            <thead>
              <tr className={classes.tableHeaderStyle}>
                <th className={classes.tableHeaderStyle}>ID</th>
                <th className={classes.tableHeaderStyle}>Nome</th>
                <th className={classes.tableHeaderStyle}>Descrição</th>
                <th className={classes.tableHeaderStyle}>Preço</th>
                <th className={classes.tableHeaderStyle}>Editar/Excluir</th>
                </tr>
            </thead>
            <tbody>
              {ListaProdutos.map((produto, index) => (
                <tr key={index} className={classes.tableLineStyle}>
                  <td className={classes.tableDataStyle}>{produto.id}</td>
                  <td className={classes.tableDataStyle}>{produto.nome}</td>
                  <td className={classes.tableDataStyle}>{produto.desc}</td>
                  <td className={classes.tableDataStyle}>{produto.preco}</td>
                  <td className={classes.tableDataStyle}><Link to={`/editar/produtos/${produto.id}`}><Editar/></Link> | <Link to={`/excluir/produtos/${produto.id}`}><Excluir/></Link></td>
                </tr>
              ))} 
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className={classes.tableDataStyle}>Total de Produtos: {ListaProdutos.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    )
  }
  