import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export function usePropertyFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search') as PropertyFilters['search'];
  const location = searchParams.get('location') as PropertyFilters['location'];
  const price = searchParams.get('price')
    ? parseInt(searchParams.get('price') as string)
    : undefined;

  const setFilters = useCallback((filters: PropertyFilters) => {
    setSearchParams((params) => {
      if (filters.search !== undefined) {
        params.set('search', filters.search);
      }

      if (filters.location) {
        params.set('location', filters.location);
      }

      if (filters.price) {
        params.set('price', filters.price.toString());
      }

      return params;
    })
    // eslint-disable-next-line
  }, []);

  return {
    search,
    location,
    price,
    setFilters,
  };
}