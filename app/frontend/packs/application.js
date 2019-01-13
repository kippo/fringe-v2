import ReactOnRails from 'react-on-rails';
import EventBrowse from '../javascripts/react/event_browse.jsx';
import EventFilterUI from '../javascripts/react/filter_ui/event_filter_ui.jsx';

// Generate application.css
import '../stylesheets/application.scss';

// Import the application file as the contents of this file
import '../javascripts/application.js';

ReactOnRails.register({
  EventBrowse,
  EventFilterUI
});