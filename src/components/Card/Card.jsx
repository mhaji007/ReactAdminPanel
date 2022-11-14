import React, { useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout } from "framer-motion";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    // AnimatedSharedLayout provides extra frames for cards in expanded and collapsed state
    // We just need to define the two different layout
    <AnimateSharedLayout>
      {expanded ? <ExpandedCard /> : <CompactCard />}
    </AnimateSharedLayout>
  );
};

export default Card;
