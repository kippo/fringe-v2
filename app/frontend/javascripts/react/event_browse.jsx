import React from "react";
import EventList from "./event_list.jsx";
import EventFilters from "./event_filters.jsx";

export default class EventBrowse extends React.Component {
  constructor(props){
    super(props);
    this.eventData = [
      {
        title: 'Fuego Carnal',
        genre: 'Comedy',
        venue: 'Garden of Unearthly Delights',
        date: '21 July to 26th July',
        description: 'Dave is single, stood with his mates at the bar, and is turning 30 next week. Eurydice is a mythical dryad - a tree nymph. This is a tale of impossible, death defying love; a tale of this world and the underworld; a tale of soul music and late night karaoke.',
        audienceReview: 3
      },{
        title: 'Wet Sounds',
        genre: 'Drama',
        venue: 'Gluttony',
        date: '25 July to 28th July',
        description: 'A spectacular new Spiegeltent corruption from the people who brought you BLANC de BLANC and LIMBO UNHINGED. A joyous cocktail of entertainment and enlightenment, let this cast of international prodigies and deviants lead you on an adventure of hedonistic theatrical anarchy.',
        audienceReview: 3
      }
    ];
  }

  render() {
    return(
      <div>
        <EventFilters />
        <EventList eventData={this.eventData} />
      </div>
    )
  }
};