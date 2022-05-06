import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const planetsCards = planets
      .map(({ name, image }) => (<PlanetCard
        key={ name }
        planetName={ name }
        planetImage={ image }
      />));
    return (
      <div data-testid="solar-system">
        <Title className="section-title" headline="Planetas" />
        <div className="planets-container">
          { planetsCards }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
