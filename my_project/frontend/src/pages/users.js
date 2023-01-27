import React, {Component} from 'react';
import axios from 'axios';

import UserList from '../components/User.js'


class UsersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                    let users = response.data
                    this.setState({
                            'users': users
                        }
                    )
                    users = response.data.results
                    this.setState({
                        'users': users
                    })
                }
            ).catch(error => console.log(error))
    }


    render() {
        return (
            <section className='TODOListUsersPage container'>
                <h1>Список пользователей</h1>
                <UserList users={this.state.users}/>
            </section>
        );
    }
}

export default UsersPage

