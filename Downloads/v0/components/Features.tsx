export function Features() {
  const features = [
    {
      title: "Find Scholarships",
      description: "Discover thousands of scholarship opportunities to fund your education."
    },
    {
      title: "Find Programs",
      description: "Explore a wide range of educational programs to enhance your skills and knowledge."
    },
    {
      title: "Find Competitions",
      description: "Participate in exciting competitions to showcase your talents and win prizes."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <button className="bg-cyan-600 text-white font-bold py-4 px-8 rounded-full text-xl mb-4 hover:bg-cyan-700 transition duration-300">
                {feature.title}
              </button>
              <p className="text-cyan-900">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

