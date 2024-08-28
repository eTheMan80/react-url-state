import { ChangeEvent, useEffect, useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'
import { usePropertyFilters } from '@/hooks/usePropertyFilters'
import {locationList, priceList} from '@/utils/filterLists'

export default function PropertyListFilters() {
  const {search, location, price, setFilters} = usePropertyFilters()

  const [localSearch, setLocalSearch] =
    useState<PropertyFilters['search']>(search);
  const debouncedSearch = useDebounce(localSearch)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value)
  }

  const handleLocation = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters({ location: e.target.value as PropertyFilters['location'] })
  }

  const handlePrice = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters({
            price: e.target.value ? parseInt(e.target.value) : undefined,
          })
  }

  useEffect(() => {
    if (debouncedSearch) {
      setFilters({ search: debouncedSearch })
    } else {
      setFilters({ search: '' })
    }
    // eslint-disable-next-line
  }, [debouncedSearch])

  return (
    <div className="flex flex-row gap-2 mb-[15px]">
      <input
      className="w-[300px]"
        type="text"
        value={localSearch}
        onChange={handleSearch}
        placeholder="Search properties"
      />
      <select
      className="w-[200px]"
        value={location}
        onChange={handleLocation}
      >
        <option value="" hidden>Select location</option>
        {locationList.map((item) => (
          <option key={`${item}`} value={`${item}`}>{item}</option>
        ))}
      </select>
      <select
      className="w-[200px]"
        value={price}
        onChange={handlePrice}
      >
        <option value="" hidden>Select price</option>
        {priceList.map((item) => (
          <option key={`${item}`} value={`${item}`}>{item}</option>
        ))}
      </select>
    </div>
  )
}