import React, { useEffect, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import Card from "../card";
import Spinner from "react-bootstrap/Spinner";

const url =
  "https://api.bushrakalaji.com/wp-json/wp/v2/card?acf_format=standard";
function Cards() {
  const [cards, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setHasError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setCard(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <Spinner animation="border" className="m-auto" />;
  }

  if (hasError) {
    return <div>Error occurred while fetching cards.</div>;
  }

  return (
    <motion.div className="min-vh-100 d-flex flex-column align-items-center align-content-center">
      <h2 className="hello mt-5 fs-1">My Projects</h2>
      <LayoutGroup>
        <motion.div className="d-flex justify-content-center align-items-start gap-3 flex-wrap flex-30">
          {cards.map((card) => (
            <motion.div key={card.acf.id}>
              <Card card={card} />
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
}

export default Cards;