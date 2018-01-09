import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, ListGroup, ListGroupItem, ButtonGroup, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
          <button className="btn btn-secondary float-left">Example Button floated left</button>
          <button className="btn btn-danger float-right">Example Button floated right</button>
        </div>

        <ButtonGroup color='success'>
          <Button color='success'>Left</Button>{' '}
          <Button color='warning'>Middle</Button>{' '}
          <Button color='danger'>Right</Button>
        </ButtonGroup>


        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>

          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>

        </div>
        );
      }
    }

export default App;
