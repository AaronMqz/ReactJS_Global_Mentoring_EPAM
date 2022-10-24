import React from "react";
import Search from "./Search.styled";
import Logo from "../../../shared/Logo";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
import Modal, { useModal } from "../../../shared/Modal";
import Form from "../../../shared/Form";
import { initialMovieState } from "../../../utils/constants";

const SearchComponent = () => {
  const { showModal, toogleModal } = useModal();

  return (
    <>
      <Search.Container>
        <Search.BackgroundImage />
        <Search.Top>
          <Logo />
          <Button.Add onClick={toogleModal}>{"+ ADD MOVIE"}</Button.Add>
        </Search.Top>
        <Search.Content>
          <Search.Title>FIND YOUR MOVIE</Search.Title>
          <Search.FormSearch>
            <Input.Text
              placeholder={"What do you want to watch?"}
              onChange={() =>
                console.log("pending development for future tasks")
              }
              name={"search"}
            />
            <Button.Primary
              onClick={() =>
                console.log("pending development for future tasks")
              }
            >
              {"SEARCH"}
            </Button.Primary>
          </Search.FormSearch>
        </Search.Content>
        {showModal && (
          <Modal toogle={toogleModal}>
            <Form
              titleForm={"ADD MOVIEW"}
              movie={initialMovieState}
              handleClick={toogleModal}
            />
          </Modal>
        )}
      </Search.Container>
    </>
  );
};

export default SearchComponent;
