import { object, string, number, boolean, type InferOutput, array, pipe, transform } from "valibot";

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id:number(),
    name: string(),
    price: pipe(
        string(),
        transform(input => parseFloat(input))
    ),
    availability: boolean(),
})

export const ProductsSchema = array(ProductSchema)
export type Product = InferOutput<typeof ProductSchema>
