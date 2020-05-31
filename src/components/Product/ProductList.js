
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'


const ProductList = props => {
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