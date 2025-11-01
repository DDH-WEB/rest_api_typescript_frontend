import { Link, Form, useActionData, type ActionFunctionArgs, redirect } from "react-router-dom";
import ErrorSms from "../components/ErrorSms";
import { addProduct } from "../services/ProductService";
import FormCampos from "../components/FormCampos";

export async function action({request}: ActionFunctionArgs) {

    const data = Object.fromEntries(await request.formData())

    let error = ''
    if (Object.values(data).includes('')){
        error = 'Todos los Campos Son Obligatorios'
        return error
    }
    await addProduct(data)
    return redirect('/')
}

export default function NewProduct() {
    
    const error = useActionData() as string
    return (
    <>
        {error && <ErrorSms key={Date.now()}>{error}</ErrorSms>}
        <div className='flex justify-between'>
            <h2 className='text-4xl font-black text-slate-500'>Agregar Producto</h2>
            <Link className='rounded-md text-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500' to='/'>Ver Productos</Link>
        </div>
        <Form
            className="mt-10"      
            method="POST"
        >
            
            <FormCampos />

            <input
                type="submit"
                className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                value="Registrar Producto"
            />
        </Form>
    </>
  )
}
