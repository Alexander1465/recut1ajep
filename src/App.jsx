import React  from 'react'
import Noticia from './components/noticias';


function App() {

  const notic = [
    {
      id: 0,
      imgsrc: "src/assets/sky.jpg",
      imgavat: "src/assets/avatar01.png",
      title: "Titulo 1",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen del cielo",
      num: 25
    },
    {
      id: 1,
      imgsrc: "src/assets/sea.jpg",
      imgavat: "src/assets/avatar02.png",
      title: "Titulo 2",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen del oceano",
      num: 16
    },
    {
      id: 2,
      imgsrc: "src/assets/tux.jpg",
      imgavat: "src/assets/avatar03.png",
      title: "Titulo 3",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de i love you y un pinguino",
      num: 169
    },
    {
      id: 3,
      imgsrc: "src/assets/mario.jpg",
      imgavat: "src/assets/avatar04.png",
      title: "Titulo 4",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Image Mario",
      num: 253
    },
    {
      id: 4,
      imgsrc: "src/assets/kirby.jpg",
      imgavat: "src/assets/avatar05.png",
      title: "Titulo 5",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de Kirby",
      num: 353
    },
    {
      id: 5,
      imgsrc: "src/assets/zelda.jpeg",
      imgavat: "src/assets/avatar06.png",
      title: "Titulo 6",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de zelda",
      num: 269
    }
  ];

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {notic.map((noti) => (
      <Noticia key={noti.id} noti={noti} />
    ))}
  </div>
);
      
}

export default App


