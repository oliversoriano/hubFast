import { Lojas } from "./lojas";

export function Pedidos() {

    let pedido = [
        { id: 123456, loja: "Shopee", statushub: "Pendente", cliente: "Oliver", data: "07/11/2023", hora: "01:19", valor: 20 }
    ]

    console.log(pedido[0])

    return (
        <div className="pedidos">
            <p className="infopedidos"> {pedido[1]} </p>
            {/* <p className="infopedidos"> {pedido.loja} </p>
            <p className="infopedidos"> {pedido.statushub} </p>
            <p className="infopedidos"> {pedido.cliente} </p>
            <p className="infopedidos"> {pedido.data} <br /> {pedido.hora} </p>
            <p className="infopedidos"> {pedido.valor} </p> */}
            <button className="botaomaisinfo">Mais Informações</button>
        </div>
    )



    // const id = 0
    // const loja = "string"
    // const status = "string"
    // const cliente = "string"
    // const data = "string"
    // const hora = "string"
    // const valor = 0


    // return (
    //     <div className="listaDePedidos">
    //         <h1>Lista De Pedidos</h1>
    //         <div className="pedidos">
    //             <h2 className="infopedidos">ID</h2>
    //             <h2 className="infopedidos">Loja</h2>
    //             <h2 className="infopedidos">Status</h2>
    //             <h2 className="infopedidos">Cliente</h2>
    //             <h2 className="infopedidos">Data</h2>
    //             <h2 className="infopedidos">Valor</h2>
    //             <h2 className="infopedidos">Ações</h2>
    //         </div>

    //         <div className="pedidos">
    //             <p className="infopedidos">12345</p>
    //             <p className="infopedidos">Shopee - Soriano</p>
    //             <p className="infopedidos">Pendente</p>
    //             <p className="infopedidos">Oliver Soriano</p>
    //             <p className="infopedidos">06/11/2023 <br/> 21:39</p>
    //             <p className="infopedidos">R$ 50,00</p>
    //             <button className="botaomaisinfo">Mais Informações</button>
    //         </div>

    //         <div className="pedidos">
    //             <p className="infopedidos">12346</p>
    //             <p className="infopedidos">Mercado Livre - Soriano</p>
    //             <p className="infopedidos">Finalizado</p>
    //             <p className="infopedidos">Oliver Ferreira</p>
    //             <p className="infopedidos">06/11/2023 <br/> 21:54</p>
    //             <p className="infopedidos">R$ 79,00</p>
    //             <button className="botaomaisinfo">Mais Informações</button>
    //         </div>

    //     </div>
    // )
}