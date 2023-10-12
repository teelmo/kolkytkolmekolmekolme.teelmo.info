import React from 'react';
import Confetti from 'react-confetti';
import '../styles/styles.less';

function App() {
  return (
    <div className="app">
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle className="rain" />
      <h1>Welcome to my birthday party fiesta</h1>
      <div className="image_container"><img src="./assets/img/teemo 2vuotias.jpg" alt="Teemo Tebest" /></div>
      <h3>When: 12–16 October 2023</h3>
      <h3>Where: Various locations</h3>
      <h3>What: Many things</h3>
      <div className="image_container"><img src="./assets/img/IMG_1260.jpeg" alt="" /></div>
      <h1>Very exact schedule</h1>
      <ul>
        <li>Thursday 12.10. 18:00-19:00 – Beers at La Barje 🍺</li>
        <li>
          Thursday 12.10. 19:00 –
          {' '}
          <a href="https://ptrnet.ch/evenement/this-will-destroy-you/" target="_blank" rel="noreferrer">Metal concert at L&apos;usine</a>
          ! 🤘
        </li>
        <li>&nbsp;</li>
        <li>Friday 13.10. 18:00-20:30 – Beers at La Barje 🍺</li>
        <li>
          Friday 13.10. 21:00 –
          {' '}
          <a href="https://www.facebook.com/events/1710548176092920/1710551632759241/" target="_blank" rel="noreferrer">Lightshow in Parc des Bastions</a>
          {' '}
          💡
        </li>
        <li>&nbsp;</li>
        <li>Saturday 14.10. 12:00–15:00 – Ping pong! 🏓</li>
        <li>
          Saturday 14.10. 15:00 –
          {' '}
          <a href="https://genevabeerfestival.ch/" target="_blank" rel="noreferrer">Geneva beer festival!</a>
          {' '}
          🍺
        </li>
        <li>&nbsp;</li>
        <li>Sunday 15.10. 20:00 – Ice Hockey Geneva Servette 🏒</li>
        <li>&nbsp;</li>
        <li>Monday 16.10. 19:00 – Birthday dinner at Teemo&apos;s with lättys, with surprises and of course a Teemo quiz is included! 🥳🎉</li>
      </ul>
      <h3>Come and celebrate or don&apos;t come</h3>
      <div className="image_container"><img src="./assets/img/9-luokka.jpg" alt="Teemo Tebest" /></div>
      <h1>To get you into the mood (or to warn you)</h1>
      <div className="video_container"><iframe width="100%" height="" title="Youtube video" src="https://www.youtube.com/embed/D0SStMBVtas" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
    </div>
  );
}
export default App;
