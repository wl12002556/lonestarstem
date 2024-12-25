export function Features() {
  const features = [
    {
      title: "Find Scholarships",
      description: "Access thousands of scholarship opportunities to fund your education journey."
    },
    {
      title: "Find Programs",
      description: "Discover enriching educational programs that align with your interests and goals."
    },
    {
      title: "Find Competitions",
      description: "Explore competitive opportunities to showcase your talents and build your portfolio."
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <button className="bg-[#0095ff] text-white text-lg font-extrabold py-4 px-8 rounded-full hover:bg-[#0095ff]/90 transition-colors mb-4">
                {feature.title}
              </button>
              <p className="text-gray-700 font-semibold">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

