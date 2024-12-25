export function Hero() {
  return (
    <section className="py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="#0095ff" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0095ff] mb-4 leading-tight">
          <span className="block">The Best Place</span>
          <span className="block">to Look for College Prep</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          <span className="font-extrabold">All for Free</span>
        </h2>
        <p className="text-xl font-semibold text-gray-600 mb-4">
          We are a nonprofit that offers:
        </p>
        <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-4xl mx-auto mb-12">
          Thousands of <span className="font-extrabold uppercase">SCHOLARSHIPS</span>, <span className="font-extrabold uppercase">COMPETITIONS</span>, and <span className="font-extrabold uppercase">EXTRACURRICULARS</span> to <span className="font-extrabold">high schoolers</span> with a simple search
        </p>
      </div>
    </section>
  )
}

