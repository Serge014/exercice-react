import { PanierType, ProduitsType } from "../types";

export const AddPanier = async (
    data: ProduitsType, 
    PanierLength: number, 
    setPanierLength: React.Dispatch<React.SetStateAction<number>>
) => {
    //On test si le produit existe deja dans le panier
    const panier: PanierType[] = JSON.parse(localStorage.getItem("panier")!) || []

    const {id} = data

    const searchproduit = panier.find((item:PanierType) => item.id_produit === id)

    if(searchproduit) {

        searchproduit.qte += 1
        searchproduit.prix = Number(searchproduit.prix) + Number(data.prix)

    } else {
        panier.push({
            id_produit: id!,
            produit: data.designation,
            prix: data.prix,
            qte: 1
        })
    }

    setPanierLength(PanierLength +1)
    localStorage.setItem("panier", JSON.stringify(panier))
}