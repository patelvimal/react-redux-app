import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../../components/Product/ProductList';
import Button from '../../components/UIControls/Button/Button';
import { ModalDialogContainer } from '../ModalDialog';
import { getProducts } from './productAction';
import AddProduct from '../../components/Product/AddProduct';

export class ProductPage extends Component {

    constructor() {
        super();
        this.state = {
            dialogStatus: true
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
                <ModalDialogContainer show={this.state.dialogStatus} onClose={this.dialogClose}>
                    <AddProduct/>
                </ModalDialogContainer>
                <ProductList products={this.props.products} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductPage)
