import {Card, CardImg} from "react-bootstrap";

export function StoreItem(props : StoreItemImpl){

  // destructor the props
  const {id, name, price, imgUrl} = props

  return (
    <Card>
      <Card.Img src={imgUrl}/>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{imgUrl}</p>
    </Card>
  )

}

type StoreItemImpl = {
    "id": number,
    "name": string,
    "price": number,
    "imgUrl": string
}