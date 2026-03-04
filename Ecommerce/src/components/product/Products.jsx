import {useGetAllProductsQuery} from '../..apis/productApi'

const Products = ()=>{
    const data = useGetAllProductsQuery()
    console.log(data)

    return(
        <></>
    )
}

export default Products;