import Image from 'next/image'

export function Schools() {
  const schools = [
    { name: "Harvard", image: "/harvard.jpg" },
    { name: "MIT", image: "/mit.jpg" },
    { name: "Princeton", image: "/princeton.jpg" },
    { name: "Stanford", image: "/stanford.jpg" },
    { name: "UCLA", image: "/ucla.jpg" },
    { name: "Duke", image: "/duke.jpg" }
  ]

  return (
    <section className="py-20 bg-cyan-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-cyan-900 mb-12">Notable Schools Our Students Have Attended</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {schools.map((school, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={school.image} alt={`${school.name} campus`} width={200} height={200} className="rounded-lg shadow-md" />
              <p className="mt-2 text-cyan-900 font-semibold">{school.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

