
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProduitsType } from '../types'
import { AddProduit } from '../controllers/addProduits.controller'

function New() {

    const router = useNavigate()
    
    const [data, setData] = useState<ProduitsType>({
        designation: "",
        prix: 0,
        description: "",
        image: "/images/img1.webp"
    })

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

  return (
    <div className='container py-5'>
        <form onSubmit={(e) => AddProduit(e, data, router)} className='col-lg-6'>
            <div className="row">
                <div className="col-lg-12 mb-3">
                    <input name='designation' onChange={handleChangeInput} type="text" required placeholder='Designation' className='form-control form-control-lg' />
                </div>
                <div className="col-lg-12 mb-3">
                    <input name='description' onChange={handleChangeInput} type="text" required placeholder='Description' className='form-control form-control-lg' />
                </div>
                <div className="col-lg-12 mb-3">
                    <input name="prix" onChange={handleChangeInput} type="number" placeholder='nombre' required className='form-control form-control-lg' />
                </div>
                <button type='submit' className='btn btn-primary'>Ajouter</button>
            </div>
        </form>
    </div>
  )
}

export default New
