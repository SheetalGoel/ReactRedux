import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';


class App extends React.Component {
  constructor() {
    console.log("construtor");
    super();
    this.state = {
      searchText: '',
      names: []
    }
  }

  componentDidMount(){
    fetch('https://reqres.in/api/users?page=2').then((response) =>{
      return response.json();
    }).then(data => {
      this.setState({names: data})
    })
  }

  removeComponent() {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));    
  }

  onSearchHandler(data) {
    this.setState({searchText: data})
  }

  render() {
    //const names = ["Ajay", "Rohit", "Akash", "Vijay", "Mahesh", "Rakesh"]
    return (
      <div className="container">
      <Title text="Contact List"></Title>
      <SearchBar onSearch={this.onSearchHandler.bind(this)}/>
      <ContactList contacts={this.state.names.data} search={this.state.searchText}/>
      <button type="button" onClick={this.removeComponent}> Remove </button>
      </div>
    );
  }
}

ReactDOM.render(<App /> , document.getElementById('app'))
