import { Link, Form, useActionData, type ActionFunctionArgs, redirect, type LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ErrorSms from "../components/ErrorSms";
import {getProductById, updateProduct } from "../services/ProductService";
import FormCampos from "../components/FormCampos";

export async function loader({params}: LoaderFunctionArgs) {
    if(params.id !== undefined){
        const product = await getProductById(+params.id)  
        if(!product){
            // throw new Response('', {status: 404, statusText:'No Encontrado'})
            return redirect('/producto/404')
        }
        return product
    }
}


export async function action({request , params}: ActionFunctionArgs) {

    const data = Object.fromEntries(await request.formData())

    let error = ''
    if (Object.values(data).includes('')){
        error = 'Todos los Campos Son Obligatorios'
        return error
    }
    if(params.id !== undefined){
        await updateProduct(data, +params.id)
        return redirect('/')
    }
}

const availabilityOptions = [
   { name: 'Disponible', value: true},
   { name: 'No Disponible', value: false}
]

export default function EditProduct() {
    
    const product = useLoaderData()
    const error = useActionData() as string

    return (
    <>
        {error && <ErrorSms key={Date.now()}>{error}</ErrorSms>}
        <div className='flex justify-between'>
            <h2 className='text-4xl font-black text-slate-500'>Editar Producto</h2>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 p-3 text-sm font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              <span className="flex justify-center items-center text-lg font-bold sm:hidden rounded-full h-3 w-3">👁‍🗨</span>
              <span className="hidden sm:inline">👁‍🗨 Ver Productos</span>
            </Link>
        </div>
        <Form
            className="mt-10"      
            method="POST"
        >
            <FormCampos product={product} />
            
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="availability"
                >Disponibilidad:</label>
                <select 
                    id="availability"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    name="availability"
                    defaultValue={product?.availability.toString()}
                >
                    {availabilityOptions.map(option => (
                    <option key={option.name} value={option.value.toString()}>{option.name}</option>
                    ))}
                </select>
            </div>
            <input
                type="submit"
                className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                value="Editar Producto"
            />
        </Form>
    </>
  )
}
