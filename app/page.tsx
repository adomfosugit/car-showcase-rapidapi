import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import Searchbar from '@/components/Searchbar'
import { manufacturers } from '@/constants'
import { FilterProps, fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home({searchParams}:any) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    limit: searchParams.limit || 9,
  }) ;
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
    console.log(allCars)
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width ' id= 'discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the Cars you might like</p>
        </div>

      </div>

      <div className='home__filters'>
        <Searchbar/>
       

      </div>
        {!isDataEmpty ? (
          <section className='mx-auto'>
            <div className='home__cars-wrapper '>
              {allCars?.map((car) => (
                <CarCard  car= {car}/>
              ))}
            </div>
          </section>
        ) : (<div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Opps, no results</h2>
            <p>{allCars?.message}</p>

          </div>)}
          </main>
  )
}
