import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/15237170?s=460&u=9422d7316417ce48d8b0db0a5ef431dde45704f0&v=4" alt="Julio Dutra"/>
                <div>
                    <strong>Júlio Dutra</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br/> <br/>
                Lorem Ipsum has been the industry's standard dummy
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;