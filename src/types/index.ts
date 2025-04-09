export type ProduitsType = {
    designation: string,
    prix: number,
    description: string,
    image: string,
    id?: string
}

export type PanierType = {
    produit: string,
    id_produit: string,
    prix: number,
    qte: number
}

export type PanierLengthProps = {
    PanierLength: number,
    setPanierLength: React.Dispatch<React.SetStateAction<number>>
}