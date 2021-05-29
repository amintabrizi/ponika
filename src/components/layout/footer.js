import React from 'react'

//import components
import ModalComponent from './../generalComponents/modal'

function Footer() {
    return (
        <>
            <div className="bg-white position-fixed fixed-bottom">
                <div className="container"><p className="p-5 m-0">Footer</p></div>
            </div>
            <ModalComponent />
        </>
    )
}

export default Footer
