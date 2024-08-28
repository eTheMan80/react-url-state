import data from './data/property.json'

export async function fetchProperty(options?: PropertyFilters) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  let filteredProducts = data.properties

  if (options?.location) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.location === options.location
    })
  }

  if (options?.price) {
    filteredProducts = filteredProducts.filter((product) => {
      return Number(product.price) <= Number(options.price)
    })
  }

  if (options?.search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.title.toLowerCase().includes(options.search!.toLowerCase())
    })
  }

  return filteredProducts
}