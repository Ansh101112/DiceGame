import styled from "styled-components";
import { useState } from "react";
const RoleDice = ({ roleDice, currentDice }) => {
  const [rolling, setRolling] = useState(false);

  const handleDiceClick = () => {
    setRolling(true);
    roleDice();
    setTimeout(() => setRolling(false), 1000);
  };

  return (
    <DiceContainer>
      <div className={`dice ${rolling ? "rolling" : ""}`} onClick={handleDiceClick}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
  }

  /* Define animation keyframes for 3D rolling */
  @keyframes roll3D {
    0%, 100% {
      transform: translateZ(-40px) rotateX(0deg) rotateY(0deg);
    }
    10%, 30% {
      transform: translateZ(-40px) rotateX(-90deg) rotateY(0deg);
    }
    40%, 60% {
      transform: translateZ(-40px) rotateX(-90deg) rotateY(90deg);
    }
    70%, 90% {
      transform: translateZ(-40px) rotateX(0deg) rotateY(90deg);
    }
  }

  /* Apply rolling animation to dice when rolling is true */
  .rolling {
    animation: roll3D 1s ease-in-out;
  }

  p {
    font-size: 24px;
  }
`;
