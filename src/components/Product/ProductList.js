
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '../UIControls/Button/Button'
import ModalDialog  from '../../containers/ModalDialog'


const ProductList = props => {

    const addProduct = () => {
        alert('asdasdasd')
    }

    return (
        <Fragment>
            <h3>Product List</h3>
        </Fragment>
    )
}

ProductList.propTypes = {
    products: PropTypes.array
}

export default ProductList;