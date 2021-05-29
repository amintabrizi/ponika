import { Nav } from 'react-bootstrap'

function NavbarComponent() {
    return (
        <>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutus">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </>
    )
}

export default NavbarComponent
