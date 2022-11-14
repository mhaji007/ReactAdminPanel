import React, { useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    // AnimatedSharedLayout provides extra frames for cards in expanded and collapsed state
    // We just need to define the two different layout
    <AnimateSharedLayout>
      {expanded ? "Expanded Card" : <CompactCard param={props} />}
    </AnimateSharedLayout>
  );
};

export default Card;

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}
