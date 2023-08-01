import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const fetchedProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchedProducts();
  }, []);

  return (
    <>
      <h1>Lates Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
