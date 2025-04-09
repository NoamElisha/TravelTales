import React from "react";

import '../components/UserList';
import UserList from "../components/UserList";

const Users = () => {
    const Users = [
    {
        id: 'u1',
        name:'Max Schwartz',
        image:'https://randomuser.me/api/portraits/men/75.jpg',
        places: 3
    }
];

    return <UserList items={Users}/>
}

export default Users;