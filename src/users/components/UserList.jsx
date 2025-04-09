import React from "react";
import Card from '../../shared/components/UIElement/Card'
import './UserList.css';
import './UserItem';
import UserItem from "./UserItem";

const UserList = props => {
   if(props.items.length === 0){
    return (
        <div className="center">
            <Card>
            <h2>no user found.</h2>
            </Card>
        </div>
    );
   }
   
   return (
    <ul>
       {
        props.items.map(user =>(
            <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
            />

        ))}

    </ul>
   )
    
};

export default UserList;