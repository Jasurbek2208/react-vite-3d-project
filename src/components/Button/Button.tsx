import React from "react";
import styled from "styled-components";

// Components
import Loading from "../Loading/Loading";

// Interface
interface IButton {
  content: String;
  type?: "button" | "submit";
  disable?: boolean | undefined;
  animatedBtn: Boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({
  content,
  type = "button",
  disable,
  animatedBtn,
  onClick,
}: IButton) {
  return (
    <StyledButton
      className={"button" + (animatedBtn ? " on-animate" : "")}
      type={type}
      disabled={disable || false}
      onClick={onClick}
    >
      {content}
      {disable && (
        <div className="loading">
          <Loading />
        </div>
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  padding: 17px 16px;
  position: relative;
  width: 100%;

  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;

  border: none;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: 400ms;

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35px;
    height: 35px;
  }

  &:disabled::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.295);
  }

  &.on-animate {
    padding: 14px 16px;
    animation: buttonAnimate 10s infinite 2s;
  }

  &:hover,
  &:focus {
    outline: none;
    color: #141e30;
    background-color: #fff;
  }

  /* ANIMATIONS */
  @keyframes buttonAnimate {
    0% {
      transform: translateX(0px);
    }

    80% {
      transform: translateX(0px);
    }

    90% {
      transform: translateX(-60px);
    }

    97% {
      transform: translateX(-60px);
    }

    100% {
      transform: translateX(0px);
    }
  }
`;
