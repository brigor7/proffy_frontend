import React from 'react';
import { format } from 'path';
import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Input from '../../components/Input';

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
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Input label="Matéria" name="materia" />
          <Input
            label="Custo da sua hora por aula (em R$)"
            name="cost"
            type="number"
          />
        </fieldset>
        <fieldset>
          <legend>Horários disponíveis</legend>
          <Input label="Dia da semana" name="week_day" />
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
