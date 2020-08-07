import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/65289026?s=400&u=31ff7b8fe551b0e309ea740aaf82714e3bd1f996&v=4"
          alt="Avatar"
        />
        <div>
          <span id="proffy">Bruno Igor</span>
          <span id="disciplina">Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir as coisas em laboratório e por mudar a vida das
        pessoas através da química.
      </p>
      <footer>
        <p>
          Preço/hora
          <span>R$80,00</span>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
