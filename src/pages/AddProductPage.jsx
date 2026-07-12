import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
  name: yup.string().required('Le nom est obligatoire'),
  price: yup.number().typeError('Le prix doit être un nombre').positive('Le prix doit être supérieur à 0').required('Le prix est obligatoire'),
  category: yup.string().required('La catégorie est obligatoire'),
  image: yup.string().url('URL image invalide').required("L'image est obligatoire"),
})

export default function AddProductPage({ onAddProduct }) {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    onAddProduct(data)
    navigate('/')
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-6 text-indigo-600">Ajouter un Produit</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input {...register('name')} className="w-full border rounded p-2" placeholder="Nom du produit" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Prix (€)</label>
          <input {...register('price')} className="w-full border rounded p-2" placeholder="Ex: 29.99" />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Catégorie</label>
          <input {...register('category')} className="w-full border rounded p-2" placeholder="Ex: Electronics" />
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">URL de l'image</label>
          <input {...register('image')} className="w-full border rounded p-2" placeholder="https://..." />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
        </div>

        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
          Ajouter au catalogue
        </button>

      </form>
    </div>
  )
}
