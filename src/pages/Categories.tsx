import { Category } from "@components/eCommerce";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (records.length === 0) dispatch(actGetCategories());
  }, [dispatch, records]);

  const categoriesList =
    records.length > 0
      ? records.map((records) => (
          <Col
            key={records.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...records} />
          </Col>
        ))
      : "There are no records";
  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
};

export default Categories;
