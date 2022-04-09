import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missionsCards = missions
      .map(({ name, year, country, destination }, index) => (<MissionCard
        key={ index }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions-container">
          { missionsCards }
        </div>
      </div>
    );
  }
}

export default Missions;
