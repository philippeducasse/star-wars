const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const get = async(endpoint?:string)=> {
    const res = await fetch(`${BASE_URL}/${endpoint}`)
    if(!res.ok){
        throw new Error("Failed to fetch")
    }
    return res.json()
}