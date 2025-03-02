interface PropsType {
  id?: number
  name?: string
  animal?: string
  breed?: string
  images?: string[]
  location?: string
}
const Pet = (props: PropsType) => {
  const { name, animal, breed, images, location } = props
  let hero = 'http://pets-images.dev-apis.com/pets/0.jpg'
  if (images?.length) {
    hero = images[0]
  }
  return (
    <div className="pet">
      <div className="image-container">
        <img data-testid="thumbnail" src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </div>
  )
}
export default Pet
