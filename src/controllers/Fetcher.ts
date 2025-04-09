import axios from "axios"

export const Fetcher = async (url: string) => {
    try {
        const data = await axios.get(url)
        if(data && data.data) {
            return data.data
        } else {
            return "produit non trouvé"
        }
    } catch (error) {
        console.log(error)
        return error
    }
} 