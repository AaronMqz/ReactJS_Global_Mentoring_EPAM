import React, { useState } from "react";
import ContextMenu from "./ContextMenu.styled";
import Modal, { useModal } from "../../../shared/Modal";
import Form from "../../../shared/Form";

type Props = {
  movie: MovieItem;
};

const ContextMenuComponent = ({ movie }: Props) => {
  const [modalType, seetModalType] = useState("");
  const { showModal, toogleModal } = useModal();

  const handleClick = (formType: string) => {
    toogleModal();
    seetModalType(formType);
  };

  const handleFormType = () => {
    const formTitles = {
      edit: "EDIT MOVIE",
      delete: "DELETE MOVIE",
    };
    const title = formTitles[modalType as keyof typeof formTitles];

    return (
      <Form
        titleForm={title}
        handleClick={toogleModal}
        movie={movie}
        formType={modalType}
      />
    );
  };

  return (
    <>
      <ContextMenu.Container>
        <ContextMenu.Label onClick={() => handleClick("edit")}>
          Edit
        </ContextMenu.Label>
        <ContextMenu.Label onClick={() => handleClick("delete")}>
          Delete
        </ContextMenu.Label>
      </ContextMenu.Container>
      {showModal && <Modal toogle={toogleModal}>{handleFormType()}</Modal>}
    </>
  );
};

export default ContextMenuComponent;
