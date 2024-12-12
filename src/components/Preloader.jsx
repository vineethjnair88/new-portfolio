import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

// Keyframe for floating animation
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

// Styled-component for the slime
const Slime = styled.div`
  width: 150px;
  height: 100px;
  background: radial-gradient(circle, limegreen 60%, green 100%);
  border-radius: 50%;
  position: relative;
  animation: ${float} 2s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: 25%;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, limegreen 60%, green 100%);
    border-radius: 50%;
    animation: ${float} 2s ease-in-out infinite reverse;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 20%;
    width: 110px;
    height: 40px;
    background: rgba(0, 255, 0, 0.2);
    filter: blur(10px);
    border-radius: 50%;
  }
`;

const Text = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  text-shadow: 0 0 10px limegreen, 0 0 20px green;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1a1a1a;
`;

export default function Preloader({ setLoadingComplete }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true); // Move to the home page
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timeout);
  }, [setLoadingComplete]);

  return (
    <Wrapper>
      <Slime />
      <Text
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome
      </Text>
    </Wrapper>
  );
}
