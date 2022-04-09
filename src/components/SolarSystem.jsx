import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../style/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    const planetsCards = planets
      .map(({ name, image }, index) => (<PlanetCard
        key={ index }
        planetName={ name }
        planetImage={ image }
      />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets-container">
          {planetsCards}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
