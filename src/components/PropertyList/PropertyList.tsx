const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {properties.map((property) => (
        <div
          key={property.id}
          className="flex w-[250px] flex-col gap-4 rounded-md bg-grayscale-700 p-4"
        >
          <div className="flex flex-col justify-between">
            <div>
              <picture>
                <source
                  srcSet={`/assets/${property.image}`}
                  type="image/jpeg"
                />
                <img src={`/assets/${property.image}`} alt={property.title} className="rounded-md" />
              </picture>
            </div>
            <div>
              <h2 className="text-xl font-bold mt-[15px]">{property.title}</h2>
              <p className="opacity-50">{property.location}</p>
            </div>
            <p>£{property.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PropertyList