import React, { useEffect } from 'react'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productActions'


export default function HomeScreen() {
  const dispatch = useDispatch()
  // const [error, setError] = useState(false)

  // const [loading, setLoading] = useState(false)
  // const [products,setProducts] = useState([])
  const productList = useSelector(state => state.productList)
  const {loading , error , products}= productList
  useEffect (()=>{
   dispatch(listProducts())
  },[dispatch])

  return (
    <div>
        <hi style={{fontFamily:"cursive", fontSize:"30px", textAlign:"center",marginLeft:"30%",marginRight:"30%",color:"darkgray"}}>Welcome to your music equipment shop </hi>

      {loading ? (
       <LoadingBox></LoadingBox> 
      ) : error ? (
        <MessageBox variant ="danger">{error}</MessageBox>
      ) : (
        <div className="row center">{products.map((product)=>(
          <Product key = {product._id} product = {product}></Product>
        ))}

        </div>
      )}
      </div>
      )
      }
    
