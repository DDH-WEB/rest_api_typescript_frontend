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
            <h2 className='text-2xl sm:text-4xl font-black text-slate-500'>Agregar Producto</h2>
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
