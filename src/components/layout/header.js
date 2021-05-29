import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import Image from 'next/image'
import { connect } from 'react-redux'
import { modalAction } from './../../redux/actions/actions'

//imported components
import NavbarComponent from './headerComponents/navbar'
import SearchForm from './../generalComponents/searchForm'

function Header(props) {
    return (
        <>
            <Navbar bg="white" variant="light">
                <div className="container">
                    <Navbar.Brand href="#home"><Image src="/svg/pomegranate.svg" height={30} width={30} /></Navbar.Brand>
                    <NavbarComponent />
                    <SearchForm />
                    <Button onClick={() => props.modalAction()} variant="success">Login</Button>
                </div>
            </Navbar>
        </>
    )
}

const mapStateToProps = state => {
    return {
        modalState: state.modalReducer
    }
}

export default connect(mapStateToProps, { modalAction })(Header)
