
const images = [
  "/images/GridFurni/Adaliz-velvet.jpg",
  "/images/GridFurni/bed.jpg",
  "/images/GridFurni/diningtable.jpg",
  "/images/GridFurni/chair.webp",
  "/images/GridFurni/shelf.avif",
  "/images/GridFurni/bookShelf.jpg",
];

const GridComponents = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={img}
              alt={`Grid image ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridComponents