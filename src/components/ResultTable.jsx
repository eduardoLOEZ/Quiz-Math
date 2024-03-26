import React from "react";

export default function ResultTable(){

    return(
        <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Nombre</td>
                    <td>Intentos</td>
                    <td>Puntos Ganados</td>
                    <td>Resultado</td>
                </tr>
            </thead>
            {/* <tbody>
                { !data ?? <div>No se encontraron datos </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody> */}
        </table>
    </div>
    )
}
