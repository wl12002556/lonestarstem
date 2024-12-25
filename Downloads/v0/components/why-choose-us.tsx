export function WhyChooseUs() {
  const reasons = [
    {
      title: "Free",
      description: "All our services are completely free of charge, making college prep accessible to everyone."
    },
    {
      title: "Simple",
      description: "Our easy-to-use platform simplifies the search process for scholarships, competitions, and extracurriculars."
    },
    {
      title: "Support for Underserved Students",
      description: "We're committed to supporting underserved students, providing equal opportunities for all."
    }
  ]

  return (
    <section className="py-20 bg-[#f0f8ff] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0095ff] mb-12 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-extrabold text-[#0095ff] mb-4">{reason.title}</h3>
              <p className="text-gray-700 font-medium">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

