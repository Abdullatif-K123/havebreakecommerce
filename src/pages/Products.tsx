import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  useEffect(() => {
    if (params.prefix && typeof params.prefix === "string")
      dispatch(actGetProductsByCatPrefix(params.prefix));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  const productsList =
    records.length > 0
      ? records.map((records) => (
          <Col
            xs={6}
            md={3}
            key={records.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product {...records} />
          </Col>
        ))
      : "There are no products for this categories";
  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  );
};

export default Products;
