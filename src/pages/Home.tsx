import { PanierLengthProps, ProduitsType } from '../types'
import useSWR from 'swr'
import { Fetcher } from '../controllers/Fetcher'
import { AddPanier } from '../controllers/addPanier.controller'

function Home({PanierLength, setPanierLength}: PanierLengthProps) {

  const { data, error, isLoading } = useSWR('http://localhost:3000/produits', Fetcher, /* {
    refreshInterval: 500
  } */)

  if(data === "produit non trouvé") {
    return (
      <>
        <h2>Pas encore de produit </h2>
      </>
    )
  }

  if (error) {
    console.log(error)
    return(
      <>
        <h2>Une erreur s'est produite</h2>
      </>
    )
  }


  return (
    <div>
      {isLoading ? (
        <h5>Chargement des données en cours...</h5>
      ): (
        <div className='container py-5'>
          <h2 className='h4 mb-4'>Liste des produits</h2>
          <div className="row">
            {data && Array.isArray(data) && data.length > 0 && data.map((item: ProduitsType) => (
                <div className="col-lg-3 mb-3" key={item.id}>
                  <div className="card">
                    <img src={item?.image || "/images/img1.webp" } className='card-img-top' alt="" />
                    <div className="card-body">
                        <h4>{item?.designation}</h4>
                        <p>{item?.description}</p>
                        <p>{item?.prix}</p>
                        <button onClick={() => AddPanier(item, PanierLength, setPanierLength)} className='btn btn-primary btn-sm'>Ajouter au panier</button>
                    </div>
                  </div>
                </div>
            ))}
          </div> 
        </div>
      )}
    </div>
  )
}

export default Home
