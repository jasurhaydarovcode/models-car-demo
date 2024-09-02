import { Link } from 'react-router-dom';
import DarkModeToggle from '../../components/DarkModeToggle';
import ModelCrumb from '../../components/breadcrumb/ModelCrumb';

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
  {
    id: 3,
    path: 'rolceroyce',
    brand: 'Rolls-Royce',
    country: 'United Kingdom',
    image: 'https://images.barrons.com/im-227394?width=700&height=466',
  }
];

const Models = () => {
  return (
    <div className="min-h-screen dark:bg-neutral-950 dark:text-white">
      
      <ModelCrumb />

      <div className="container mx-auto p-6">
        <div className="flex justify-between mb-8 items-center">
          <h1 className="md:text-4xl text-lg font-bold">Models</h1>
          <DarkModeToggle />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {carData.map((car) => (
            <Link
              to={`/models/${car.path}`}
              key={car.id}
              className="rounded-lg shadow-md text-neutral-950 text-center dark:bg-neutral-950 text-2xl font-semibold dark:text-neutral-400 border border-neutral-400 border-b-4 overflow-hidden relative p-4 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            >
              <span className="text-2xl font-semibold bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              <img src={car.image} alt={car.brand} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{car.brand}</h2>
                <p className="text-gray-600">Country: {car.country}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;
