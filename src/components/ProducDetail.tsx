import { type Product } from "../types"
import { Form, redirect, useFetcher, useNavigate, type ActionFunctionArgs } from "react-router-dom"
import { formatCurrency } from "../utils"
import { deleteProduct } from "../services/ProductService"

type ProducDetailProps = {
    product: Product
}

export async function action({params}: ActionFunctionArgs) {
    if(params.id !== undefined){
        await deleteProduct(+params.id)
        return redirect('/')
    }else{
        return redirect('producto/404')
    }
}


export default function ProducDetail({product}: ProducDetailProps) {

    const isAvailable = product.availability
    const navigate = useNavigate()
    const fetcher = useFetcher()

  return (
    <tr className="border-b border-gray-300 ">
        <td className="p-3 text-lg text-gray-800">
            {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800">
            {formatCurrency(product.price)}
        </td>
        <td className="hidden md:table-cell p-3 text-lg text-gray-800">
            <fetcher.Form method="POST">
                <button type="submit" name="id" value={product.id}
                    className={`${isAvailable ? 'text-green-600':'text-red-600'} transition-all duration-300 ease-in-out rounded-lg p-2 text-xs uppercase font-bold w-full cursor-pointer border border-b border-b-gray-400 bg-white hover:shadow-lg active:scale-[0.98]`}
                >
                    {isAvailable ? 'TRUE' : 'FALSE'}
                </button>
            </fetcher.Form>
        </td>
        <td className="p-3 text-lg text-gray-800 ">
            <div className="flex w-full bg-white border rounded-lg overflow-hidden dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                <button className="cursor-pointer flex-1 flex items-center justify-center p-2 sm:p-3 text-gray-600 transition-colors duration-200 dark:text-blue-500 hover:text-white dark:hover:bg-blue-800"
                    onClick={()=>navigate(`/producto/${product.id}/editar`)}
                >

                    <svg className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.862 4.487a2.25 2.25 0 113.182 3.182L8.25 19.464l-4.5.75.75-4.5L16.862 4.487z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>

                <Form 
                    method="POST" className="text-red-400  hover:text-white cursor-pointer transition-colors duration-200 dark:hover:bg-red-800 flex flex-1 items-center justify-center"
                    action={`producto/eliminado/${product.id}`} 
                    onSubmit={(e) => {
                        if(!confirm('¿Estas Seguro de Eliminar?')){
                            e.preventDefault()
                        }
                    }}
                >
                    <button className="p-2 sm:p-3  cursor-pointer w-full h-full flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" strokeLinejoin="round" strokeLinecap="round"/></svg>  
                    </button>
                </Form>    
            </div>
        </td>
    </tr> 
  )
}
