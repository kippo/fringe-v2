import ReactOnRails from 'react-on-rails';
import EventBrowse from '../javascripts/react/event-browse/event-browse-wrapper.jsx';
import EventSessions from '../javascripts/react/event-sessions/events-sessions-wrapper.jsx';

// Generate application.css
import '../stylesheets/application.scss';

// Import the application file as the contents of this file
import '../javascripts/application.js';

ReactOnRails.register({
  EventBrowse,
  EventSessions
});