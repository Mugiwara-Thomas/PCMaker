/* eslint-disable react/prop-types */
import {
  AccordionWrapper,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
  AccordionImage,
  AccordionImageBackground,
  CloseAndOpenButton,
} from "./style";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Accordion({ data }) {
  const [accordionStates, setAccordionStates] = useState([
    { isActive: false }, // Estado para o primeiro acordeão
    { isActive: false }, // Estado para o segundo acordeão
  ]);
  
  const handleAccordionClick = (index) => {
    const updatedAccordionStates = [...accordionStates];
    updatedAccordionStates[index].isActive = !updatedAccordionStates[index].isActive;
    setAccordionStates(updatedAccordionStates);
  };
  const { nome, imagem } = data;
  return (
    <>
      <AccordionWrapper>
        {/* Processador */}
        <AccordionItem>
          <AccordionTitle onClick={() => handleAccordionClick(0)}>
            <AccordionImageBackground>
              <AccordionImage urlImage={imagem} />
            </AccordionImageBackground>
            <div>{data.nome}</div>
            <div>
              {accordionStates[0].isActive ? (
                <CloseAndOpenButton>
                  <FaX></FaX>
                </CloseAndOpenButton>
              ) : (
                <CloseAndOpenButton>
                  <FaPlus></FaPlus>
                </CloseAndOpenButton>
              )}
            </div>
          </AccordionTitle>
          {accordionStates[0].isActive && <AccordionContent>{nome} </AccordionContent>}
        </AccordionItem>


        {/* Placa Mãe */}
        <AccordionItem>
          <AccordionTitle onClick={() => handleAccordionClick(1)}>
            <AccordionImageBackground>
              <AccordionImage urlImage={imagem} />
            </AccordionImageBackground>
            <div>{data.nome}</div>
            <div>
              {accordionStates[1].isActive ? (
                <CloseAndOpenButton>
                  <FaX></FaX>
                </CloseAndOpenButton>
              ) : (
                <CloseAndOpenButton>
                  <FaPlus></FaPlus>
                </CloseAndOpenButton>
              )}
            </div>
          </AccordionTitle>
          {accordionStates[1].isActive && <AccordionContent>{nome} </AccordionContent>}
        </AccordionItem>
      </AccordionWrapper>
    </>
  );
}

export default Accordion;
