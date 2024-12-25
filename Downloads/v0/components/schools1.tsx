import Image from 'next/image'

export function Schools() {
  const schools = [
    { name: "Harvard University", image: "/placeholder.svg?height=200&width=300" },
    { name: "MIT", image: "/placeholder.svg?height=200&width=300" },
    { name: "Princeton University", image: "/placeholder.svg?height=200&width=300" },
    { name: "Stanford University", image: "/placeholder.svg?height=200&width=300" },
    { name: "UCLA", image: "/placeholder.svg?height=200&width=300" },
    { name: "Duke University", image: "/placeholder.svg?height=200&width=300" }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="#f0f8ff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Students Have Been Accepted To
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {schools.map((school, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-[3/2] mb-4">
                <Image
                  src={school.image}
                  alt={`${school.name} campus`}
                  fill
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
              <p className="text-gray-800 font-medium text-center">{school.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

