import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../../components/Product/ProductList';
import Button from '../../components/UIControls/Button/Button';
import { ModalDialogContainer } from '../ModalDialog';
import { getProducts } from './productAction';

export class ProductPage extends Component {

    constructor() {
        super();
        this.state = {
            dialogStatus: false
        }
    }
    componentDidMount = () => {
        this.props.dispatch(getProducts());
    }


    dialogClose = () => {
        this.setState({
            dialogStatus: false
        })
    }

    addProduct = () => {
        this.setState({
            dialogStatus: true
        })
    }

    render() {
        return (
            <div>
                <Button text="Add Product" onClick={this.addProduct}></Button>
                <ModalDialogContainer show={this.state.dialogStatus} onClose={this.dialogClose} />
                <ProductList products={this.props.products} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductPage)
