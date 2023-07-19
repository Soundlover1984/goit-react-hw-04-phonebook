import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonForm } from 'components/ButtonForm/ButtonForm';
import { MdPersonAddAlt } from 'react-icons/md';
import { Label, Form } from './ContactForm.styled';
import { InputItem } from 'components/InputItem/InputItem';


export const ContactForm = ({onAddBtnClick}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddBtnClick({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <InputItem
            onChange={onInputChange}
            value={name}
            name="name"
            placeholder="Enter contact`s name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </Label>
        <Label>
          Number
          <InputItem
            onChange={onInputChange}
            value={number}
            type="tel"
            name="number"
            placeholder="Enter contact`s number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </Label>
        <ButtonForm
          type="submit"
          icon={MdPersonAddAlt}
          status="add"
          text="Add contact"
        />
      </Form>
    );
}

ContactForm.propTypes = {
  onAddBtnClick: PropTypes.func.isRequired,
};