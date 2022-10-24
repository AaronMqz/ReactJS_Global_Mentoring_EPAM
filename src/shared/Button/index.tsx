import React from "react";
import Button from "./Button.styled";

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
  icon?: JSX.Element;
}>;

const typedButton = {
  Primary: (props: ButtonProps) => <Button.Primary {...props} />,
  Secondary: (props: ButtonProps) => <Button.Secondary {...props} />,
  Add: (props: ButtonProps) => <Button.Add {...props} />,
  Icon: (props: ButtonProps) => <Button.Icon {...props} />,
};

const wrapper = (type: string, props: ButtonProps) => {
  const Wrapper = typedButton[type as keyof typeof typedButton];
  return <>{<Wrapper onClick={props.onClick}>{props.children}</Wrapper>}</>;
};

const Primary = (props: ButtonProps) => wrapper("Primary", props);
const Secondary = (props: ButtonProps) => wrapper("Secondary", props);
const Add = (props: ButtonProps) => wrapper("Add", props);
const Icon = (props: ButtonProps) => wrapper("Icon", props);

export default {
  Primary,
  Secondary,
  Add,
  Icon,
};
