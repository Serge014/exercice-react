import axios from "axios";
import { ProduitsType } from "../types";
import { NavigateFunction } from "react-router-dom";

export const AddProduit = async (e: React.FormEvent<HTMLFormElement>, data: ProduitsType, router: NavigateFunction) => {
    e.preventDefault()
    try {
        await axios.post("http://localhost:3000/produits", JSON.stringify(data))
        router("/")
    } catch (error) {
        console.log(error)
    }
}