import { useQuery } from '@tanstack/react-query';
import { fetchProperty } from '@/services/api/property'
import PropertyList from '@/components/PropertyList'
import PropertyListFilters from '@/components/PropertyList/PropertyListFilters'
import { usePropertyFilters } from '@/hooks/usePropertyFilters'
import './App.css'

function App() {
  const {search, location, price} = usePropertyFilters()

  const { data, isFetching, isLoading} = useQuery({
    queryKey: ['property', {search, location, price}],
    queryFn: () => fetchProperty({search, location, price})
  })

  console.log('data', data)
  console.log('isFetching', isFetching)
  console.log('isLoading', isLoading)

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-4xl font-bold mb-[15px]">List of properties</h1>
      </div>
      <PropertyListFilters />
      <div>
        {isFetching && <p>Loading...</p>}
        {data && <PropertyList properties={data} />}
      </div>
    </div>
  )
}

export default App
