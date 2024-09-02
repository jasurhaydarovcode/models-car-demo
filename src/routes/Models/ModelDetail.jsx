import { Link, useParams } from 'react-router-dom';
import DarkModeToggle from '../../components/DarkModeToggle';
import DetailCrumb from '../../components/breadcrumb/DetailCrumb';

const carDetails = {
    mercedes: [
        {
            modelId: 'a-class',
            model: 'Mercedes A-Class',
            image: 'https://www.topgear.com/sites/default/files/2023/03/1-Mercedes-A-Class.jpg'
        },
        {
            modelId: 'c-class',
            model: 'Mercedes C-Class',
            image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/mercedes-benz-c-class-my22-index-1.png'
        },
    ],
    bmw: [
        {
            modelId: '3-series',
            model: 'BMW 3 Series',
            image: 'https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/3-series/gl/2023/navigation.png'
        },
        {
            modelId: '5-series',
            model: 'BMW 5 Series',
            image: 'https://www.topgear.com/sites/default/files/2024/04/TopGear%20-%20First%20Drive%20-%20BMW%205%20Series%202024-031.jpg'
        },
    ],
    rolceroyce: [
        {
            modelId: 'cullinan',
            model: 'Cullinan',
            image: 'https://hips.hearstapps.com/hmg-prod/images/2025-rolls-royce-cullinan-black-badge-107-663a56d913506.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*',
        }
    ],
};

const ModelDetail = () => {
    const { id } = useParams();
    const cars = carDetails[id];

    return (
        <div className="min-h-screen dark:bg-neutral-950 dark:text-white">
            <DetailCrumb id={id} />

            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">{id.charAt(0).toUpperCase() + id.slice(1)}</h1>
                    <DarkModeToggle />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {cars ? (
                        cars.map((car) => (
                            <Link
                                to={`/models/${id}/${car.modelId}`}
                                key={car.modelId}
                                className="rounded-lg shadow-md text-neutral-950 text-center dark:bg-neutral-950 text-2xl font-semibold dark:text-neutral-400 border border-neutral-400 border-b-4 overflow-hidden relative p-4 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                            >
                                <span className="text-2xl font-semibold bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                <img src={car.image} alt={car.model} className="w-full h-56 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold">{car.model}</h2>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No models available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModelDetail;
