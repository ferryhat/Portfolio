import React from "react";
import { LayoutGroup, motion } from "framer-motion";
import Card from "../card";
import Spinner from "react-bootstrap/Spinner";

const cardsData = [

];

function Cards() {
  return (
    <motion.div className="min-vh-100 d-flex flex-column align-items-center align-content-center">
      <h2 className="hello mt-5 fs-1">My Projects</h2>
      <LayoutGroup>
        <motion.div className="d-flex justify-content-center align-items-start gap-3 flex-wrap flex-30">
          {cardsData.map((card) => (
            <motion.div key={card.id}>
              <Card card={card} />
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
}

export default Cards;
