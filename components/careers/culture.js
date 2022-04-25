const people = [
    {
        alt:"Curate crypto data",
        title:"Curate crypto data",
        imageUrl:
        '../assets/curate-crypto-data.svg',
    },
    {
        alt:"Publish industry leading research",
        title:"Publish industry leading research",
        imageUrl:
        '../assets/research.svg',
    },
    {
        alt:"Develop risk management tools",
        title:"Develop risk management tools",
        imageUrl:
        '../assets/risk-management.svg',
    },
  ]
  
  export default function Culture() {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {people.map((mission) => (
          <div
            className="relative rounded-lg border border-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-shrink-0">
              <img src={mission.imageUrl} alt={mission.alt} />
            </div>
            <div className="flex-1 min-w-0">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-2xl font-light text-white ml-2">{mission.title}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }