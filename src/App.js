import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <Router>
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <Routes>
          <Route path="/" element={<InvoiceList />} />
          <Route path="/create-invoice" element={<InvoiceForm />} />
        </Routes>
      </Container>
      </div>  
    </Router>

  );
}}

export default App;
