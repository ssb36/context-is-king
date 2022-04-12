import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/registration/one"><button>Form1</button></Link>
            <Link to="/registration/two"><button>Form2</button></Link>
            <Link to="/users/"><button>Users</button></Link>
        </div>
    )
}
