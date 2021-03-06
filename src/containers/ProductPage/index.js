import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProduct from '../../components/Product/AddProduct';
import ProductList from '../../components/Product/ProductList';
import { ModalDialogContainer } from '../ModalDialog';
import { getProducts, saveProduct } from './productAction';
import Button from '../../core/UIControls/Button/Button';

export class ProductPage extends Component {

    constructor() {
        super();
        this.state = {
            dialogStatus: true
        }
    }
    componentDidMount = () => {
        this.props.dispatch(getProducts);
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

    handleProductSave = (formValues)=>{
        this.props.dispatch(saveProduct(formValues))
    }

    render() {
        return (
            <div>
                <h3>Product page</h3>
                <Button text="Add Product" onClick={this.addProduct}></Button>
                <ModalDialogContainer 
                    show={this.state.dialogStatus} 
                    onClose={this.dialogClose}
                    title="Add Product"
                >
                    <AddProduct onSubmit={this.handleProductSave}/>
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
