import { Tabs, Tab } from 'react-bootstrap';
import Buttons from '../Buttons/Buttons';
import Cards from '../Cards/Cards';
import Modals from '../Modals/Modals';
import Home from '../Home/Home';

function NavTabs() {
  return (
    <div className="tabs">
      <Tabs defaultActiveKey="home">
        <Tab title="Home" eventKey="home">
          <Home />
        </Tab>
        <Tab title="Buttons" eventKey="buttons">
          <Buttons />
        </Tab>
        <Tab title="Cards" eventKey="cards">
          <Cards />
        </Tab>
        <Tab title="Modals" eventKey="modals">
          <Modals />
        </Tab>
        <Tab title="Disabled" eventKey="disabled" disabled></Tab>
      </Tabs>
    </div>
  );
}

export default NavTabs;
