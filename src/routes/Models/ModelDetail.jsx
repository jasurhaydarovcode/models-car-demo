import { Link, useParams } from 'react-router-dom';

const carDetails = {
    mercedes: [
        { modelId: 'a-class', model: 'Mercedes A-Class', image: 'https://www.topgear.com/sites/default/files/2023/03/1-Mercedes-A-Class.jpg' },
        { modelId: 'c-class', model: 'Mercedes C-Class', image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/mercedes-benz-c-class-my22-index-1.png' },
    ],
    bmw: [
        { modelId: '3-series', model: 'BMW 3 Series', image: 'https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/3-series/gl/2023/navigation.png' },
        { modelId: '5-series', model: 'BMW 5 Series', image: 'https://www.topgear.com/sites/default/files/2024/04/TopGear%20-%20First%20Drive%20-%20BMW%205%20Series%202024-031.jpg' },
    ],
};

const ModelDetail = () => {
    const { id } = useParams();
    const cars = carDetails[id];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Car Models</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {cars ? (
                    cars.map((car) => (
                        <Link to={`/models/${id}/${car.modelId}`} key={car.modelId} className="bg-white rounded-lg shadow-md overflow-hidden">
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
    );
};

export default ModelDetail;
