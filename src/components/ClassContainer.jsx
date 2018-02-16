import React from 'react';
import TapArea from './TapArea';
import Staff from './Staff';
import { Switch, Route } from 'react-router-dom';



class ClassContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          'abv' : '5',
          'brewer' : 'Mother Earth',
          'img' : 'http://bit.ly/2BR8XXX',
          'name' : 'Cali Creamin',
          'price' : 'purple',
          'quantity' : '124'
        },
        {
          'abv' : '8',
          'brewer' : 'Mother Earth',
          'img' : 'http://bit.ly/2BR8XXX',
          'name' : 'Sintax',
          'price' : 'red',
          'quantity' : '124'
        },
        {
          'abv' : '6',
          'brewer' : 'Laurelwood',
          'img' : 'http://bit.ly/2EPIk45',
          'name' : 'Free Range Red',
          'price' : 'green',
          'quantity' : '124'
        },
        {
          'abv' : '6.5',
          'brewer' : 'Stone',
          'img' : 'http://bit.ly/2EezhwB',
          'name' : 'Stone IPA',
          'price' : 'red',
          'quantity' : '124'
        },
        {
          'abv' : '4.5',
          'brewer' : 'New Belgium',
          'img' : 'http://bit.ly/2EgcEYL',
          'name' : 'Fat Tire',
          'price' : 'purple',
          'quantity' : '124'
        }
      ];
    };
    this.handleAddKeg = this.handleAddKeg.bind(this);
  }
  handleAddKeg(newKeg){
    let newKegList = this.state.masterKegList.slice();
    newKegList.push(newKeg);
    this.setState({masterKegList: newKegList});
  }
  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><TapArea kegList={this.state.masterKegList} />} />
          <Route path='/staff' render={()=><Staff onNewKegCreation={this.handleAddKeg} />} />
        </Switch>
      </div>
    );
  }
}

export default ClassContainer;
