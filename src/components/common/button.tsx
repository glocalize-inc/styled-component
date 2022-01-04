import React from "react";
import styled, { css } from "styled-components";
import colorType from "../../types/color.type";

export enum ButtonSize {
  Default = "default",
  Short = "short",
  Long = "long",
}

type ButtonProps = {
  label: string;
  size: ButtonSize;
  variant: string;
  startIcon?: any;
  endIcon?: any;
  backgroundColor: string;
  onClick: undefined;
  gaHandler?: any; // 버튼 클릭할때 ga에 전송할것 넣어주기
};

/**
 * @param props {ButtonProps}
 */
const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      className={["sb-btn", `sb-btn--${props.size}`].join(" ")}
      {...props}
    >
      {props?.startIcon}
      {props.label}
      {props?.endIcon}
    </StyledButton>
  );
};

export default Button;

Button.defaultProps = {
  label: "",
  size: ButtonSize.Default,
};

const DefaultStyle = css`
  width: 150px;
  height: 48px;
  padding: 12px 16px;
  border-radius: 24px;
  font-size: 16px;
  letter-spacing: 1.25px;
`;

const ShortStyle = css`
  width: 96px;
  height: 36px;
  padding: 9px 20.5px;
  border-radius: 18px;
  font-size: 12px;
  letter-spacing: 0.75px;
`;

const LongStyle = css`
  width: 312px;
  height: 48px;
  padding: 12px 24px 12px;
  border-radius: 24px;
  font-size: 16px;
  letter-spacing: 1.25px;
`;

const ButtonSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.Short:
      return ShortStyle;
    case ButtonSize.Long:
      return LongStyle;
    default:
      return DefaultStyle;
  }
};

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  font-weight: bold;
  line-height: 1.5;
  background-color: ${colorType.primary.main};
  color: ${colorType.grayscale.white};
  ${(p) => ButtonSizeStyles(p.size)}
`;

