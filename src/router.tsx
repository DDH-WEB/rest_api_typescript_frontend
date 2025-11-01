import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Page404 from "./components/Page404";
import Products, { loader as productsList, action as updateavailability} from "./view/Products";
import NewProduct,{ action as newProductAction } from "./view/NewProduc";
import EditProduct, { loader as ediProductLoader, action as editProductAction} from "./view/EditProduct";
import { action as deleteProduct} from './components/ProducDetail'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                index: true,
                element: <Products/>,
                loader: productsList,
                action: updateavailability
            },
            {
                path: 'producto/nuevo',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path: 'producto/:id/editar', // ROA Pattern
                element: <EditProduct/>,
                loader: ediProductLoader,
                action: editProductAction
            },
            {
                path: 'producto/404',
                element: <Page404/>
            },
            {
                path: 'producto/eliminado/:id',
                action: deleteProduct
            }
        ]
    }
])