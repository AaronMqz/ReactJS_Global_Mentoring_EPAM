import React, { useState } from 'react';
import Form from './Form.styled';
import Input from '../Input';
import Button from '../Button';
import DropDown from '../DropDown';
import { Genres } from '../../utils/constants';

type FormTypeProps = {
  titleForm: string;
  movie?: MovieItem;
  onClick: (param: MovieItem) => void;
  moviewIdToDelete?: number;
};

const FormComponent = ({
  titleForm,
  movie,
  onClick,
  moviewIdToDelete,
}: FormTypeProps) => {
  const [newMovieState, setNewMovieState] = useState(movie as MovieItem);

  if (moviewIdToDelete) {
    const handleDelete = () => onClick(newMovieState);

    return (
      <Form.Content>
        <Form.Title>{titleForm}</Form.Title>
        <Form.Message>Are you sure you want to delete this movie?</Form.Message>
        <Form.Footer>
          <Button.Primary onClick={handleDelete}>{'CONFIRM'}</Button.Primary>
        </Form.Footer>
      </Form.Content>
    );
  }

  const {
    title,
    release_date,
    poster_path,
    vote_average,
    genres,
    runtime,
    overview,
  } = newMovieState;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovieState({
      ...newMovieState,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMovieState({
      ...newMovieState,
      overview: e.target.value,
    });
  };

  const handleSubmit = () => {
    onClick(newMovieState);
  };

  const handleChangeGenres = (items: Array<string>) => {
    setNewMovieState({
      ...newMovieState,
      genres: items,
    });
  };

  const handleReset = () => {
    setNewMovieState(movie as MovieItem);
  };

  return (
    <Form.Content>
      <Form.Title>{titleForm}</Form.Title>
      <Form.Row>
        <Form.RowItem>
          <Form.Label>TITLE</Form.Label>
          <Input.Text
            name={'title'}
            placeholder={'Title'}
            onChange={handleChange}
            value={title}
          />
        </Form.RowItem>
        <Form.RowItem>
          <Form.Label>RELEASE DATE</Form.Label>
          <Input.Date
            name={'release_date'}
            placeholder={'Release Date'}
            onChange={handleChange}
            value={release_date}
          />
        </Form.RowItem>
      </Form.Row>
      <Form.Row>
        <Form.RowItem>
          <Form.Label>MOVIE URL</Form.Label>
          <Input.Text
            name={'poster_path'}
            placeholder={'https://'}
            onChange={handleChange}
            value={poster_path}
          />
        </Form.RowItem>
        <Form.RowItem>
          <Form.Label>RATING</Form.Label>
          <Input.Text
            name={'vote_average'}
            placeholder={'Rating'}
            onChange={handleChange}
            value={vote_average}
          />
        </Form.RowItem>
      </Form.Row>
      <Form.Row>
        <Form.RowItem>
          <Form.Label>GENRE</Form.Label>
          <DropDown
            selectedItems={genres}
            optionList={Genres}
            onChange={handleChangeGenres}
          />
        </Form.RowItem>
        <Form.RowItem>
          <Form.Label>RUNTIME</Form.Label>
          <Input.Text
            name={'runtime'}
            placeholder={'Minutes'}
            onChange={handleChange}
            value={runtime}
          />
        </Form.RowItem>
      </Form.Row>
      <Form.Row>
        <Form.RowItem>
          <Form.Label>OVERVIEW</Form.Label>
          <Form.TextArea
            name="overview"
            placeholder={'Movie Description'}
            onChange={handleChangeTextArea}
            value={overview}
          />
        </Form.RowItem>
      </Form.Row>
      <Form.Footer>
        <Button.Secondary onClick={handleReset}>{'RESET'}</Button.Secondary>
        <Button.Primary onClick={handleSubmit}>{'SUBMIT'}</Button.Primary>
      </Form.Footer>
    </Form.Content>
  );
};

export default FormComponent;
