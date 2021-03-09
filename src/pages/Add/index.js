import React, { useState } from 'react';

// AXIOS
import api from '../../services/api';

// COMPONENTS
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

// STYLES
import { Container, Content, FormStyle, Back } from './styles';

// ICONS
import { RiArrowLeftSLine } from 'react-icons/ri';

// ROUTER
import { useHistory } from 'react-router-dom';

const Add = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [birthdate, setBirthdate] = useState('01/02/2020');
  const [admissionDate, setAdmissionDate] = useState('01/02/2020');
  const [project, setProject] = useState('');
  const [url, setUrl] = useState('');

  const history = useHistory();

  const createNaver = async () => {
    const newAdmissionDate = new Date(admissionDate);
    const newBirthdate = new Date(birthdate);

    const AdmissionUpdate = new Intl.DateTimeFormat().format(newAdmissionDate);
    const birthUpdate = new Intl.DateTimeFormat().format(newBirthdate);

    await api
      .post('navers/', {
        job_role: job,
        admission_date: AdmissionUpdate,
        birthdate: birthUpdate,
        project: project,
        name: name,
        url: url,
      })
      .then((response) => console.log(response));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNaver();
  };

  const handleClickBack = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return history.push('/home');
    } else {
      console.log('Token não encontrado, finalizando sessão!');
      return history.push('/');
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <form action='' onSubmit={handleSubmit}>
          <Back onClick={handleClickBack}>
            <RiArrowLeftSLine />
            <p>Adicionar Naver</p>
          </Back>
          <FormStyle>
            <Input
              for='name'
              type='text'
              placeholder='Nome'
              onChange={({ target }) => setName(target.value)}
              required='required'
            >
              Nome
            </Input>
            <Input
              for='job_role'
              type='text'
              placeholder='Cargo'
              onChange={({ target }) => setJob(target.value)}
              required='required'
            >
              Cargo
            </Input>
            <Input
              for='birthdate'
              type='date'
              placeholder='Idade'
              onChange={({ target }) => setBirthdate(target.value)}
              required='required'
            >
              Idade
            </Input>
            <Input
              for='admission_date'
              type='date'
              placeholder='Tempo de empresa'
              onChange={({ target }) => setAdmissionDate(target.value)}
              required='required'
            >
              Tempo de empresa
            </Input>
            <Input
              for='project'
              type='text'
              placeholder='Projetos que participou'
              onChange={({ target }) => setProject(target.value)}
              required='required'
            >
              Projetos que participou
            </Input>
            <Input
              for='url'
              type='text'
              placeholder='URL da foto do Naver'
              onChange={({ target }) => setUrl(target.value)}
              required='required'
            >
              URL da foto do Naver
            </Input>
            <span></span>
            <Button type='submit'>Salvar</Button>
          </FormStyle>
        </form>
      </Content>
    </Container>
  );
};

export default Add;
