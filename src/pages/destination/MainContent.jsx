import { useState } from 'react';
import data from '../../data.json';
import NavBar from './NavBar';
import StatsContainer from './StatsContainer';

export default function MainContent() {
  const [destination, setDestination] = useState('Moon');

  function changeDestination(e) {
    setDestination(e.currentTarget.dataset.destination);
  }

  const destinations = data.destinations;
  let description;
  let avgDistance;
  let estTravelTime;

  for (let moon of destinations) {
    if (moon.name !== destination) {
      continue;
    }

    description = moon.description;
    avgDistance = moon.distance;
    estTravelTime = moon.travel;
    break;
  }

  return (
    <div className='destination__main-content'>
      <img
        src={require(`./assets/image-${destination.toLowerCase()}.png`)}
        alt={`Image of ${
          destination === 'Moon' ? `the ${destination}` : destination
        }`}
        className='destination__hero-image'
      />

      <section className='destination__info-section'>
        <NavBar
          changeDestination={changeDestination}
          destination={destination}
        />

        <h2 className='destination__main-heading'>{destination}</h2>

        <p className='destination__description'>{description}</p>

        <div className='destination__stats-section'>
          <StatsContainer heading='Avg. Distance' value={avgDistance} />
          <StatsContainer heading='Est. Travel Time' value={estTravelTime} />
        </div>
      </section>
    </div>
  );
}
