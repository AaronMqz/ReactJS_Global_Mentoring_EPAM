import React from "react";
import Header from "./Header.styled";
import Logo from "../../shared/Logo";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

export default () => {
  return (
    <Header.Container>
      <Header.BackgroundImage />
      <Header.Top>
        <Logo />
        <Button.Add text={"+ ADD MOVIE"} />
      </Header.Top>
      <Header.Content>
        <Header.Title>FIND YOUR MOVIE</Header.Title>
        <Header.FormSearch>
          <Input placeholder={"What do you want to watch?"} />
          <Button.Primary text={"SEARCH"} />
        </Header.FormSearch>
      </Header.Content>
    </Header.Container>
  );
};
