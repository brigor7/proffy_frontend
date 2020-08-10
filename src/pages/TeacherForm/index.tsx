import React from 'react';
import { format } from 'path';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Select from '../../components/Select';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscriçao."
      />
      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input label="Nome completo:" name="name" />
          <Input label="Avatar:" name="avatar" />
          <Input label="Wathsapp:" name="wathsapp" />
          <Textarea label="Biografia" name="bio" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Física', label: 'Física' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Quimica', label: 'Quimica' },
            ]}
          />
          <Input
            label="Custo da sua hora por aula (em R$)"
            name="cost"
            type="number"
          />
        </fieldset>
        <fieldset>
          <legend>Horários disponíveis</legend>
          <Select
            label="Dia da semana"
            name="week_day"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabado' },
            ]}
          />
          <Input label="Das" name="from" type="time" />
          <Input label="Até" name="to" type="time" />
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante! <br />
            Preencha todos os dados!
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
