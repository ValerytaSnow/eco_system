import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [navbarVisible, setNavbarVisible] = useState(true);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) { 
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${navbarVisible ? 'transparent' : 'colored'}`}>
                <div className="navbar-left">
                    <img src=".././img/logo.png" alt="logo" className="logo" width="40" />
                    <h1 style={{ color: '#401201' }}>ECO-SYSTEM</h1>
                </div>
                <div className="navbar-center">
                    <button
                        className={`nav-button ${selectedItem === 'Inicio' ? 'selected' : ''}`}
                        onClick={() => handleItemClick('Inicio')}
                    >
                        Inicio
                    </button>
                    <button
                        className={`nav-button ${selectedItem === 'Contacto' ? 'selected' : ''}`}
                        onClick={() => handleItemClick('Contacto')}
                    >
                        Contacto
                    </button>
                    <button
                        className={`nav-button ${selectedItem === 'Quienes Somos' ? 'selected' : ''}`}
                        onClick={() => handleItemClick('Quienes Somos')}
                    >
                        Quiénes Somos
                    </button>
                </div>
                <div className="navbar-right">
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                    <div className="separator" style={{ backgroundColor: '#401201' }}></div>
                    <FontAwesomeIcon icon={faUserAlt} className="icon" />
                    <button className="nav-button">Iniciar sesión</button>
                </div>
            </nav>
            <div className="main-content">
                <div className="content-wrapper">
                    <h1>Recicla con propósito</h1>
                    <div className="button-container">
                        <button>Botón 1</button>
                        <button>Botón 2</button>
                    </div>
                </div>
                <img src=".././img/fondo.jpg" id='fondoi' />
            </div>
            <center>
               <div id='bienvenida'>
               <h1>BIENVENIDOS A <span className="eco-system">ECO-SYSTEM</span></h1>
                <h2>¡Bienvenidos a nuestra plataforma! La creamos para recuperar el respeto por el medio ambiente. Muchas personas no valoran los recursos naturales esenciales, como el agua. Queremos concienciar a los jóvenes y a la comunidad educativa para generar un impacto positivo. Esperamos que esta plataforma inspire a todos a valorar más nuestros recursos y a practicar el reciclaje diariamente. ¡Juntos podemos hacer una gran diferencia!</h2>
            </div>
            </center>

            <div id='insti'>
                <p>Instituciones</p>
                <p className="highlight">A OTRO NIVEL<span className="flecha">←</span></p>
            </div>


            <div id='cuadros'>
                <div className="cuadro">
                    <img src=".././img/niños.jpg" alt="Imagen 1" />
                    <span className="nombre">Roverto velandia</span>
                </div>
                <div className="cuadro">
                    <img src=".././img/niños2.jpg" alt="Imagen 2" />
                    <span className="nombre">antonio nariño</span>
                </div>
                <div className="cuadro">
                    <img src=".././img/niños.jpg" alt="Imagen 3" />
                    <span className="nombre">liceo antonio</span>
                </div>
                <div className="cuadro">
                    <img src=".././img/niños2.jpg" alt="Imagen 4" />
                    <span className="nombre">sena</span>
                </div>
            </div>
            <footer>
    <div class="footer-content">
        <div class="logo">
            <img src=".././img/logo.png" alt="Logo" width="100" />
        </div>
        <h2>Eco-System</h2>
        <div class="social-media">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="contact-info">
            <img src=".././img/planta.png" alt="Imagen Arriba" class="imagen-arriba "width="120" />
            <p><i class="fas fa-envelope"></i> ecosistem@gmail.com</p>
            <p><i class="fas fa-phone"></i> 31167857876</p>
            <img src=".././img/planta.png" alt="Imagen Abajo" class="imagen-abajo" width="120"/>
        </div>
        <p>@Eco-System</p>
    </div>
</footer>


        </>
    );
}

export default Navbar;
