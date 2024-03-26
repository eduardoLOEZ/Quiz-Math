import React from "react";
import "../styles/Result.css"
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";

export default function Result(){


    return (
        <div className="container">
            <h1 className="title text-light"> Quiz de Matemáticas</h1>


            <div className="result flex-center">
                <div className="flex">
                    <span>ID</span>
                    <span className="bold">00703919</span>

                </div>
                <div className="flex">
                    <span>Total de puntos del quiz</span>
                    <span className="bold">50</span>

                </div>
                <div className="flex">
                    <span>Total de preguntas</span>
                    <span className="bold">5</span>
                </div>

                <div className="flex">
                    <span>Total de intentos</span>
                    <span className="bold">3</span>
                </div>

                <div className="flex">
                    <span>Resultado del quiz</span>
                    <span className="bold">Aprobado</span>
                </div>


                
            </div>

            <div className="start">
                <Link className="btn" to={"/"}>Reiniciar</Link>
            </div>

            <div className="container">
                <ResultTable></ResultTable>

            </div>
        </div>
    )
}
