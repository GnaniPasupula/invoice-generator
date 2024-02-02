import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiTrash, BiEdit, BiSearch } from "react-icons/bi";
import { useNavigate   } from 'react-router-dom';

function InvoiceList() {

  const navigate = useNavigate();

  const handleCreateInvoice = () => {
    navigate('/create-invoice');
  };

  return (
    <Row>
        <Col md={8} lg={9}>
            <Card className="p-4 p-xl-5 my-3 my-xl-4">
                <h2 className="my-2">Invoices</h2>
                <ListGroup>
                    <ListGroupItem className="invoice-list-item d-flex justify-content-between align-items-center">
                    Title
                    <div>
                        <BiSearch style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mx-1 btn btn-primary"/>
                        <BiEdit style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mx-1 btn btn-warning"/>
                        <BiTrash style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mx-1 btn btn-danger"/>
                    </div>
                    </ListGroupItem>
                    <ListGroupItem className="invoice-list-item d-flex justify-content-between align-items-center">
                    Title
                    <div>
                        <BiSearch style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mx-1 btn btn-primary"/>
                        <BiEdit style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mx-1 btn btn-warning"/>
                        <BiTrash style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mx-1 btn btn-danger"/>
                    </div>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
        <Col md={4} lg={3}>
          <div className="sticky-top pt-md-3 pt-xl-4">
            <Button variant="primary" type="button" onClick={handleCreateInvoice} className="d-block w-100">
            Create Invoice
            </Button>
          </div>
        </Col>
    </Row>
  )
}

export default InvoiceList