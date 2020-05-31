import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProduct from '../../components/Product/AddProduct';
import ProductList from '../../components/Product/ProductList';
import Button from '../../components/UIControls/Button/Button';
import { ModalDialogContainer } from '../ModalDialog';
import { getProducts } from './productAction';

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

    handleProductSave = (formValues)=>{
        console.log(formValues);
    }

    render() {
        return (
            <div>
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
