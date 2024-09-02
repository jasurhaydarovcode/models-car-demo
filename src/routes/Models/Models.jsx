import { Link } from 'react-router-dom';

const carData = [
  {
    id: 1,
    path: 'mercedes',
    brand: 'Mercedes',
    country: 'Germany',
    image: 'https://hips.hearstapps.com/hmg-prod/images/2024-mercedes-benz-gla-103-64130fa2909a4.jpg',
  },
  {
    id: 2,
    path: 'bmw',
    brand: 'BMW',
    country: 'Germany',
    image: 'https://www.topgear.com/sites/default/files/2024/04/TopGear%20-%20First%20Drive%20-%20BMW%205%20Series%202024-031.jpg',
  },
];

const Models = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Car Models</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {carData.map((car) => (
          <Link to={`/models/${car.path}`} key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={car.image} alt={car.brand} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{car.brand}</h2>
              <p className="text-gray-600">Country: {car.country}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Models;
