import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff385c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e63946;
  }
`;

const AddDestination = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, country, description, visited: false });
    setName('');
    setCountry('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <Input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
      <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <Button type="submit">Add Destination</Button>
    </Form>
  );
};

export default AddDestination;
