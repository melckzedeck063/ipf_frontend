import React, { useState } from 'react';
import { Sidenav, Nav, Toggle,Menu } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import  CreditCard from '@rsuite/icons/legacy/CreditCard'
import 'rsuite/dist/rsuite.min.css';

const panelStyles = {
  padding: '15px 20px',
  color: '#1B9C85'
};

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: '#OFOOOO',
  color: ' #fff'
};
export const SideBar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');
  return (
    <div className={`${expanded ? 'w-side_bar' : 'w-full'}`}>
      <Sidenav  expanded={expanded} defaultOpenKeys={['4', '4']}>
          <Sidenav.Toggle  onToggle={expanded => setExpanded(expanded)} />
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>

            <Nav.Menu placement="rightStart" eventKey="4" title="Advanced" icon={<MagicIcon />}>
              <Nav.Item eventKey="4-1">Geo</Nav.Item>
              <Nav.Item eventKey="4-2">Devices</Nav.Item>
              <Nav.Item eventKey="4-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="4-4">Visit Depth</Nav.Item>
            </Nav.Menu>

            <Nav.Menu
              placement="rightStart"
              eventKey="5"
              title="Settings"
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="5-1">Applications</Nav.Item>
              <Nav.Item eventKey="5-2">Channels</Nav.Item>
              <Nav.Item eventKey="5-3">Versions</Nav.Item>
              <Nav.Menu eventKey="5-5" title="Custom Action">
                <Nav.Item eventKey="5-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="5-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));