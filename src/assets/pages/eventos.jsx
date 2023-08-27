import Card from '../components/cards';
import '../css/cards.css'
import EventCalendar from '../components/calendario';
function Eventos() {
    return (
        <>
        <title>Eventos</title>
            <div className="container">
                <h1 className='tittle txtCenter Logo'>Eventos</h1>
                <div className="row">
                    <EventCalendar/>
                </div>
                <div className="row">
                    <div className="col">
     <Card
                        imagen="../..\public\images\Default_girl_playing_a_videogame_in_your_room_witch_posters_in_0_9917c62a-12dc-47b6-9145-eec0dfb13795_1.jpg"
                        imagenDes="Elicoptero"
                        titulo="La NASA comparte video del helicóptero Ingenuity volando en Marte"
                        descripcion="The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years."
                        autor=" CheeseCream"
                    />
                    </div>
                    <div className="col">
 
                    <Card
                        imagen="../../public/images/ingenuity.jpg"
                        imagenDes="Elicoptero"
                        titulo="La NASA comparte video del helicóptero Ingenuity volando en Marte"
                        descripcion="The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years."
                        autor=" CheeseCream"
                    />
                    </div>
                    <div className="col">
                    <Card
                        imagen="../..\public\images\DreamShaper_v7_a_realist_ilustrartion_from_a_cyberpunk_girl_2.jpg"
                        imagenDes="Elicoptero"
                        titulo="La NASA comparte video del helicóptero Ingenuity volando en Marte"
                        descripcion="The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years."
                        autor=" CheeseCream"
                    />
                    </div>
                    <div className="col">
  
                    <Card
                        imagen="../..\public\images\Default_a_girl_driving_a_fliying_drone_in_the_city_0_a7babe99-7df8-4bd2-aaf8-dcfcbe48b9d0_1.jpg"
                        imagenDes="Elicoptero"
                        titulo="La NASA comparte video del helicóptero Ingenuity volando en Marte"
                        descripcion="The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years."
                        autor=" CheeseCream"
                    />
                    </div>
              
     
                    {/* Add similar Card components for other items */}
                </div>
            </div>

        </>

    );
}

export default Eventos