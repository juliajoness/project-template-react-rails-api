import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu, Segment} from 'semantic-ui-react'

function Navbar() {

return (
<Segment >
<Menu pointing secondary>

<Menu.Item>
<NavLink className="button" role="button" to="/">
Home
</NavLink>
</Menu.Item>

<Menu.Item>
<NavLink className="button" role="button" to="/login">
Login
</NavLink>
</Menu.Item>

<Menu.Item>
<NavLink className="button" role="button" to="/profile">
Profile
</NavLink>
</Menu.Item>

<Menu.Item>
<NavLink className="button" role="button" to="/feed">
Feed
</NavLink>
</Menu.Item>

<Menu.Item>
<NavLink className="button" role="button" to="/category">
Add Tags
</NavLink>
</Menu.Item>


</Menu>
</Segment>

    )
}

export default Navbar;