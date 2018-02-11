const React = require('react');
const ReactDOM = require('react-dom');

function renderUser(container, userObj){
  class UserCard extends React.Component{
    render(){
      return (
        <div className="userCard">
          <h1 className="userCard__name">{userObj.name}</h1>
          <div className="userCard__about">
            <p>Department: {userObj.department}</p>
            <p>Salery: {userObj.salery}</p>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<UserCard/>, container)
}
export {renderUser}