import React from "react";
import { useEffect } from "react";
import BodyJs from "./Body.js"
export default function Body(){
  useEffect(() => {
    BodyJs()
  }, []);
  return(
    <section className="group" id="calcGroup">
      <section className="main">
        <div className="titles-calc-group">
          <button className="background-none" id="addValue" title="Agregar item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={12} y1={8} x2={12} y2={16} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
          <input
            className="average"
            id="average"
            placeholder="?"
            type="number"
            title="Resultado"
            disabled=""
          />
        </div>
        <div className="titles-calc-group">
          <span className="block-left" />
          <span className="block">Nombre (opcional)</span>
          <span className="block">Valor</span>
        </div>
        <section className="calc-group" id="valuesGroup">
          <div className="item-group" id="row2">
            <button
              className="background-none delete-trigger"
              type="button"
              id="delete2"
              value="delete"
              title="Eliminar item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1={10} y1={11} x2={10} y2={17} />
                <line x1={14} y1={11} x2={14} y2={17} />
              </svg>
            </button>
            <input id="name2" type="text" />
            <input
              className="input-trigger"
              id="value2"
              type="number"
              placeholder="Valor"
            />
          </div>
          <div className="item-group" id="row1">
            <button
              className="background-none delete-trigger"
              type="button"
              id="delete1"
              value="delete"
              title="Eliminar item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1={10} y1={11} x2={10} y2={17} />
                <line x1={14} y1={11} x2={14} y2={17} />
              </svg>
            </button>
            <input id="name1" type="text" />
            <input
              className="input-trigger"
              id="value1"
              type="number"
              placeholder="Valor"
            />
          </div>
        </section>
      </section>
    </section>
  )
}