import React from 'react';
import Carousal from './Carousal/Carousal';
import Featurette from './Featurette/Featurette';
import Footer from './Footer/Footer';
import Marketing from './Marketing/Marketing';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Carousal />
        <Marketing />
        <Featurette />
        <Footer />
      </div>

    );
  }
}