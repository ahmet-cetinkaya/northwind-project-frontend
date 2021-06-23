import Dashboard from './layouts/Dashboard/Dashboard';
import Navbar from './layouts/Navbar/Navbar';
import { Container } from 'semantic-ui-react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Container>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
