import React from 'react';

class ContactList extends React.Component {

  render() {
    let list = []
    if(this.props.contacts){

    list = this.props.contacts.map((contact) => {
          return contact.first_name + ' ' + contact.last_name
        }).filter(name => {
          return name.startsWith(this.props.search)
        }).map((name, index) => {
          return <p key={index}>{name.toUpperCase()}</p>
        })
    }
    
    return (
      <div> 
        {list}
      </div>
    )
  }
}

export default ContactList;
