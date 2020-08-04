import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/62728038?s=460&u=0901764d6f0e877dd57621cc0b6aa65d399a9ffb&v=4" alt="Felipe Soller"/>
            <div>
                <strong>Felipe Soller</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
        Entusiasta das melhores tecnologias de química avançada. 
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
            <p>
                Preço/hora: 
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;