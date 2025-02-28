import React from 'react';
import { Nav } from 'react-bootstrap';

function NavigationMenu() {
  return (
    <Nav
      className="flex-column" bg="dark"
      style={{ backgroundColor: '#002348', color: 'white', width: '200px', height: '100vh' }}
    >
      <Nav.Link href="/home" className="text-white d-flex align-items-center">
              <img src={require('./Logo.jpg')}  alt="Tableau de bord" style={{ width: '183px', marginRight: '180px' }} />
                           
              </Nav.Link>
      
       <br></br>
       <br></br>
       <Nav.Link href="/home" className="text-white d-flex align-items-center">
              <img src={require('./Status.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                              Status Info
              </Nav.Link>
              <Nav.Link href="/dashboard" className="text-white d-flex align-items-center">
              <img src={require('./History.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                History
              </Nav.Link>
              <Nav.Link href="/orders" className="text-white d-flex align-items-center">
              <img src={require('./OperatingData.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                Operating Data
              </Nav.Link>
              <Nav.Link href="/products" className="text-white d-flex align-items-center">
              <img src={require('./Version.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                Version
              </Nav.Link>
              <Nav.Link href="/customers" className="text-white d-flex align-items-center">
              <img src={require('./Maintenance.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                Maintenance
              </Nav.Link>
              <Nav.Link href="/customers" className="text-white d-flex align-items-center">
              <img src={require('./Test.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                Test On Demand
              </Nav.Link>
              <Nav.Link href="/customers" className="text-white d-flex align-items-center">
              <img src={require('./SUpdate.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                Software Update
              </Nav.Link>
              <Nav.Link href="/customers" className="text-white d-flex align-items-center">
              <img src={require('./SPUpdate.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                Security Package <br></br>Update
              </Nav.Link>
              <Nav.Link href="/customers" className="text-white d-flex align-items-center">
              <img src={require('./SPUpdate.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                Authentication <br></br>Management
              </Nav.Link>
              <Nav.Link href="/customers" className="text-white d-flex align-items-center">
              <img src={require('./SE.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                Security Events
              </Nav.Link>
              <Nav.Link href="/customers" className="text-white d-flex align-items-center">
              <img src={require('./EL.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                Enable Local
              </Nav.Link>
              <Nav.Link href="/customers" className="text-white d-flex align-items-center">
              <img src={require('./EUSB.png')}  alt="Tableau de bord" style={{ width: '30px', marginRight: '20px' }} />
                Enable USB
              </Nav.Link>
    </Nav>
  );
}

export default NavigationMenu;