import React, { useState } from 'react';
import Card from '../components/cards';
import Robot from '../img/new1.jpg';
import Robot2 from '../img/new2.jpg';
import Drone from '../img/new3.jpg';
import Drone2 from '../img/new4.jpg';
import Coche from '../img/new5.jpg';
import Coche2 from '../img/new6.jpg';
import '../css/cards.css';
import '../css/select.css';


function Noticias() {
    const [selectedCategory, setSelectedCategory] = useState('Todos'); // Estado para la categoría seleccionada
    const [noticias, setNoticias] = useState([
        {
            imagen: Robot,
            imagenDes: 'Robot',
            titulo: 'Los robots podrían reemplazar a los humanos?',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Us'
        },
        {
            imagen:Drone,
            imagenDes: 'Drone',
            titulo: 'El drone mas rápido del mundo',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Us'
        },
        {
            imagen: Coche,
            imagenDes: 'Coche volador',
            titulo: 'El primer coche volador',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Latam'
        },
        {
            imagen: Robot2,
            imagenDes: 'Robot',
            titulo: 'Los robots podrían reemplazar a los humanos?',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Latam'
        },
        {
            imagen: Drone2,
            imagenDes: 'Drone',
            titulo: 'El drone mas rápido del mundo',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Esp'
        },
        {
            imagen: Coche2,
            imagenDes: 'Coche volador',
            titulo: 'El primer coche volador',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit laudantium consequuntur perspiciatis consectetur, quasi dolorem ad magnam autem saepe ullam voluptatem eveniet perferendis labore a, sapiente voluptas, dolorum porro?',
            autor: 'CheeseCream',
            categoria: 'Esp'
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
                            <option value="Us">Us</option>
                            <option value="Latam">Latam</option>
                            <option value="Esp">Eu</option>
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

export default Noticias;
