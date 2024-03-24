import NavBarPanel from "./NavBarPanel"
import {  useDispatch, useSelector } from "react-redux"
import { Card,Button } from "react-bootstrap";
import { remove } from "../Store/CartSlice";
function Bag(){
    const dispatch=useDispatch();
    function removecart(id){
        dispatch(remove(id))
    }
    const selectStates=useSelector(state=>state.cart);
    const cards=selectStates.map(product=>
        <div className="col-md-12" style={{marginUp:'10px'}}>
            <Card key={product.id}className='h-100'>
      <div>
      <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:"white"}}>
      <Button variant="dark" onClick={()=>{removecart(product.id)}}>Remove</Button>
      </Card.Footer>
    </Card>
        </div>
    )
    return(
        <>
        <h1>My Cart</h1>
        <div className="row">
            {cards}
        </div>
        </>

    )
}
export default Bag