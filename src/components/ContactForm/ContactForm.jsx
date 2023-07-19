import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonForm } from 'components/ButtonForm/ButtonForm';
import { MdPersonAddAlt } from 'react-icons/md';
import { Label, Form } from './ContactForm.styled';
import { InputItem } from 'components/InputItem/InputItem';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddBtnClick(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <InputItem
            onChange={this.onInputChange}
            value={this.state.name}
            name="name"
            placeholder="Enter contact`s name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </Label>
        <Label>
          Number
          <InputItem
            onChange={this.onInputChange}
            value={this.state.number}
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
}

ContactForm.propTypes = {
  onAddBtnClick: PropTypes.func.isRequired,
};