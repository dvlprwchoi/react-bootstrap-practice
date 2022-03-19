import { Tabs, Tab } from 'react-bootstrap';
import Buttons from '../Buttons/Buttons';
import Cards from '../Cards/Cards';
import Modals from '../Modals/Modals';
import Carousels from '../Carousels/Carousels';

function NavTabs() {
  return (
    <div className="tabs">
      <Tabs defaultActiveKey="carousels">
        <Tab title="Carousels" eventKey="carousels">
          <Carousels />
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
