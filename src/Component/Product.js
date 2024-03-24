import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import {  useDispatch } from "react-redux"
import { add } from "../Store/CartSlice"
function Product(){
  const dispatch=useDispatch();
  function addcart(product){
    dispatch(add(product))
}
    const [products,setProducts]=useState([])
    useEffect(()=>{
      //api
      fetch("https://fakestoreapi.com/products#")
      .then((resp)=> resp.json().then((result)=>
      setProducts(result)))
    },[])
    
    const cards=products.map(product=>
        <div className="col-md-3" style={{marginUp:'10px'}}>
            <Card key={product.id}className='h-100'style={{ width: '18rem' }}>
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
      <Button variant="primary" onClick={()=>{addcart(product)}}>Add to cart</Button>
      </Card.Footer>
    </Card>
        </div>
    )
    return(
        <>
          <h1>Products Dashboard</h1>
           <div className="row">
            {cards}
           </div>
        </>
    )
}
export default Product