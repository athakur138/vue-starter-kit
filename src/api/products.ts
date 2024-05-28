export default async function getAllProductsByCategories(): Promise<Response> {
    const url = import.meta.env.VITE_PRODUCTS_URL
    const options = {}
    const result = await fetch(url, options)
    return result
}
