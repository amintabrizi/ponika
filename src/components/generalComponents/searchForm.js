import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import Image from 'next/image'

//import style
import style from './../../styles/searchForm.module.scss'

export default function SearchForm() {
    return (
        <>
            <Form inline className={`m-auto ${style.searchForm} position-relative`}>
                <div className={`${style.searchIcon}`}>
                    <Image src="/svg/search.svg" height={24} width={24} />
                </div>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
        </>
    )
}
