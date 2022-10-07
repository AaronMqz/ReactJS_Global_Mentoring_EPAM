import React from 'react';
import PropTypes from 'prop-types';
import ContextMenu from './ContextMenu.styled';

type Props = {
  handleClick: (params: string) => void;
};

const ContextMenuComponent = ({ handleClick }: Props) => {
  return (
    <ContextMenu.Container>
      <ContextMenu.Label onClick={() => handleClick('edit')}>
        Edit
      </ContextMenu.Label>
      <ContextMenu.Label onClick={() => handleClick('delete')}>
        Delete
      </ContextMenu.Label>
    </ContextMenu.Container>
  );
};

ContextMenuComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ContextMenuComponent;
