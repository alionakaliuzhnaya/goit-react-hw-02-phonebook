import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { FormContainer,Label,FormButton,FormInput } from './Form.styled';

export default class Form extends Component{
    state = {
      name: '',
      number: '',
    }
  
    nameInputId = nanoid();
    numberInputId = nanoid();
  
    handleChange= event=> {
      this.setState({[event.currentTarget.name]:event.currentTarget.value})
    
  }
  
  handleSubmit=event=>{
      const {submitForm} = this.props;
      submitForm(this.state)
    event.preventDefault();
    console.log(this.state)
    this.reset();
  }

  reset=()=> {
      this.setState({name: '',number: ''});
}

  render() {
    return(
    <FormContainer onSubmit={this.handleSubmit}>
      <Label htmlFor={this.nameInputId}>Name </Label>
      <FormInput
    type="text"
    
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={this.state.name} 
    onChange={this.handleChange}
    id={this.nameInputId}
  />
      
  
      <Label htmlFor={this.numberInputId}> Number </Label>
      <FormInput
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    value={this.state.number} 
    onChange={this.handleChange}
    id={this.numberInputId}
  />
    
      <FormButton type='submit'>Add contact</FormButton>
    </FormContainer>

    );}}