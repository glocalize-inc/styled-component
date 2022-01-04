import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { ButtonSize } from "../components/common/button";
// import { CloseIcon } from "../components/common";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.Default,
  label: "BUTTON",
};
export const Short = Template.bind({});
Short.args = {
  size: ButtonSize.Short,
  label: "BUTTON",
};
export const Long = Template.bind({});
Long.args = {
  size: ButtonSize.Long,
  label: "BUTTON",
};
export const StartIcon = Template.bind({});
StartIcon.args = {
  size: ButtonSize.Long,
  label: "BUTTON",
  // startIcon: <CloseIcon size={18} color="white" />,
};
export const EndIcon = Template.bind({});
EndIcon.args = {
  size: ButtonSize.Long,
  label: "BUTTON",
  // endIcon: <CloseIcon size={18} color="white" />, // default props로 주었으나 저렇게 넣어주지 않으면 오류남
};


