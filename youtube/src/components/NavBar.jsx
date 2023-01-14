import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import { logo } from '../utils/constants.jsx'
// import {logo} from 'utils/constants'

function NavBar () {
  
  return (
    <div>
      
      <p style={{border : "dashed red"}}>test </p>
      
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: 'sticky',
          background: '#000',
          top: 0,
          justifyContent: 'space-between',
        }}>
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={45}/>
        </Link>
      
      
      </Stack>
    </div>
  )
  
}

export default NavBar

/*
<NavbarBs>
  <Nav>
    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
    <Nav.Link to="/video/:id" as={NavLink}>video</Nav.Link>
    <Nav.Link to="/channel/:id" as={NavLink}>channel</Nav.Link>
    <Nav.Link to="/search/:searchTerm" as={NavLink}>search</Nav.Link>
  </Nav>
</NavbarBs>
*/
