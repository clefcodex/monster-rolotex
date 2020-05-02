import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component'

export const CardList = props => (
  <div className="card-list">
    { props.monsters.length ? props.monsters.map(monster => (  
      <Card key={monster.id} monster={monster}/>   
    	)) : (<h2 className="waiting">Please wait.....</h2>)
  	}
  </div>
);

