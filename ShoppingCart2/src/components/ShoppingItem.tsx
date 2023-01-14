import {Card} from "react-bootstrap";

export function ShoppingItem(props : ShoppingItemImpl) {
  return (
    <div>
      <Card>
        <Card.Header> {props.name} </Card.Header>
        <Card.Img src={props.imgUrl} />
        <Card.Text>{props.price}</Card.Text>
      </Card>
    </div>
  )
}

export type ShoppingItemImpl = {
  "id": number,
  "name": string,
  "price": number,
  "imgUrl": string
}
