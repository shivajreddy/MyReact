import items from "../data/items.json";
import {Col, Row} from "react-bootstrap";
import {ShoppingItem, ShoppingItemImpl} from "../components/ShoppingItem";


export function Home() {

  const allItems : Array<ShoppingItemImpl> = items;


  return (
    <div>

      <h1>Home page</h1>

      <Row>
        {allItems.map(item => (
          <Col key={item.id}> <ShoppingItem {...item}/>  </Col>
        ))}
      </Row>


    </div>
  )

}