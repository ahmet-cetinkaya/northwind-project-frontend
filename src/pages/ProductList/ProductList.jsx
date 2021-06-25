import { Button, Icon, Menu, Table } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ProductService from "../../services/productService";
import { addToCart } from "../../store/actions/cartActions";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let productService = new ProductService();
    productService.getProduct().then((result) => setProducts(result.data.data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} has added to cart.`);
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Unit Price</Table.HeaderCell>
          <Table.HeaderCell>units In Stock</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {products.map((product) => (
          <Table.Row key={product.id}>
            <Table.Cell>
              <Link to={`/products/${product.productName}`}>
                {product.productName}
              </Link>
            </Table.Cell>
            <Table.Cell>{product.unitPrice}</Table.Cell>
            <Table.Cell>{product.unitsInStock}</Table.Cell>
            <Table.Cell>{product.productName}</Table.Cell>
            <Table.Cell>{product.category.categoryName}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
