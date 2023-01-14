import {Button, Card, CardImg} from "react-bootstrap";
import {formatCurrency} from "../utils/formatCurrency";

export function StoreItem(props: StoreItemImpl) {

  // destructor the props
  const {id, name, price, imgUrl} = props
  const quantity = 0;

  return (
    <Card className="h-100">
      <Card.Img src={imgUrl}/>
      <Card.Body className="d-flex flex-column">

        <Card.Title className="d-flex justify-content-between align-items-baseline
        mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button>Add to Cart</Button>
          ) : (
            <div>
            </div>
          )}
        </div>

      </Card.Body>
    </Card>
  )

}

type StoreItemImpl = {
  "id": number,
  "name": string,
  "price": number,
  "imgUrl": string
}