import React, { useState } from 'react';
import Card from '../components/cards';
import Robot from '../img/robot.jpg';
import Robot2 from '../img/robot2.jpg';
import Drone from '../img/drone.jpg';
import Drone2 from '../img/drone2.jpg';
import Coche from '../img/coche.jpg';
import Coche2 from '../img/coche2.jpg';
import '../css/cards.css';
import '../css/select.css';


function Eventos() {
    const [selectedCategory, setSelectedCategory] = useState('Todos'); // Estado para la categoría seleccionada
    const [noticias, setNoticias] = useState([
        {
            imagen: Robot,
            imagenDes: 'Robot',
            titulo: 'Los robots podrían reemplazar a los humanos?',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Robot'
        },
        {
            imagen: Drone,
            imagenDes: 'Drone',
            titulo: 'El drone mas rápido del mundo',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Drone'
        },
        {
            imagen: Coche,
            imagenDes: 'Coche volador',
            titulo: 'El primer coche volador',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Coche'
        },
        {
            imagen: Robot2,
            imagenDes: 'Robot',
            titulo: 'Los robots podrían reemplazar a los humanos?',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Robot'
        },
        {
            imagen: Drone2,
            imagenDes: 'Drone',
            titulo: 'El drone mas rápido del mundo',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Drone'
        },
        {
            imagen: Coche2,
            imagenDes: 'Coche volador',
            titulo: 'El primer coche volador',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Coche'
        },
        // Agrega más noticias con categorías
    ]);

    // Filtrar las noticias según la categoría seleccionada
    const filteredNoticias = selectedCategory === 'Todos'
        ? noticias
        : noticias.filter(noticia => noticia.categoria === selectedCategory);

    return (
        <>
            <title>Lo Nuevo</title>
            <div className="container">
                <h1 className="tittle txtCenter Logo">Noticias</h1>
                <div>
                    <div className="select-container">
                        <select
                            className="select-box"
                            value={selectedCategory}
                            onChange={e => setSelectedCategory(e.target.value)}
                        >
                            <option value="Todos">Todos</option>
                            <option value="Robot">Robot</option>
                            <option value="Drone">Drone</option>
                            <option value="Coche">Coche</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {filteredNoticias.map((noticia, index) => (
                        <div className="col" key={index}>
                            <Card
                                imagen={noticia.imagen}
                                imagenDes={noticia.imagenDes}
                                titulo={noticia.titulo}
                                descripcion={noticia.descripcion}
                                autor={noticia.autor}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Eventos;
