import { useParams } from 'react-router-dom';
import DarkModeToggle from "../../components/DarkModeToggle";
import VideoCrumb from '../../components/breadcrumb/VideoCrumb';

const videoData = {
  mercedes: {
    'a-class': {
      title: 'Mercedes A-Class',
      description: 'The Mercedes A-Class is a compact car with a luxurious interior and advanced technology.',
      videoUrl: '',
      iframe: 'https://www.youtube.com/embed/3sNweRke3Qg?si=TBziRVEUx66PM2mk',
      text: 'The A-Class offers great performance with a variety of engine choices, and its stylish design sets it apart in its class.',
    },
    'c-class': {
      title: 'Mercedes C-Class',
      description: 'The Mercedes C-Class is a midsize luxury sedan with cutting-edge features and a comfortable ride.',
      videoUrl: '',
      iframe: 'https://www.youtube.com/embed/c7BfL2hd34Y?si=8-dFrZOm6SylRn0Z',
      text: 'Known for its balance of performance and comfort, the C-Class is a top choice in its segment.',
    },
  },
  bmw: {
    '3-series': {
      title: 'BMW 3 Series',
      description: 'The BMW 3 Series is a sporty sedan known for its sharp handling and powerful engines.',
      videoUrl: '',
      iframe: 'https://www.youtube.com/embed/g0VWqaYROwQ?si=erivtD-i3Vmjy80i',
      text: 'The 3 Series combines luxury and performance, making it a benchmark in the compact executive car class.',
    },
    '5-series': {
      title: 'BMW 5 Series',
      description: 'The BMW 5 Series is a luxury sedan offering a blend of performance, comfort, and technology.',
      videoUrl: '',
      iframe: 'https://www.youtube.com/embed/UmTS9m9Voi4?si=bLN4CoIxrxATZxEa',
      text: 'With its refined ride and powerful engine options, the 5 Series is a top performer in the luxury sedan market.',
    },
    '6-series': {
      title: 'BMW 6 Series',
      description: 'The BMW 6 Series is a luxury sedan offering a blend of performance, comfort, and technology.',
      videoUrl: '',
      iframe: 'https://www.youtube.com/embed/SzSy7UXpaso?si=03ATx8Cd-4zzG_nZ',
      text: 'With its refined ride and powerful engine options, the 5 Series is a top performer in the luxury sedan market.',
    },
  },
  rolceroyce: {
    'cullinan': {
      title: 'Rolce Royce Cullinan',
      description: 'Rolls-Royce Limited was a British luxury car and later an aero-engine manufacturing business established in 1904 in Manchester by the partnership of Charles Rolls and Henry',
      videoUrl: '',
      iframe: 'https://www.youtube.com/embed/MlLcjnZ403U?si=rGstBPt_uRrALEET'
    }
  }
};

const VideoDetail = () => {
  const { id, modelId } = useParams();
  const brandData = videoData[id];
  const videoDetail = brandData ? brandData[modelId] : null;

  return (
    <div className='dark:bg-neutral-950 dark:text-white min-h-screen'>
      <VideoCrumb brand={id} title={videoDetail ? videoDetail.title : 'Video Detail'} />
      <div className="container mx-auto p-4">
        {videoDetail ? (
          <>
            <div className='flex items-center justify-between'>
              <h1 className="text-3xl font-bold mb-4">{videoDetail.title}</h1>
              <DarkModeToggle />
            </div>
            <p className="text-lg text-gray-600 dark:text-white mb-4">{videoDetail.description}</p>
            {videoDetail.videoUrl ? (
              <video controls className="w-full mb-6">
                <source src={videoDetail.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full mb-6">
                <iframe
                  width="100%" height="700"
                  src={videoDetail.iframe} title={videoDetail.title} frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                  className="h-[200px] md:h-[700px]"
                ></iframe>
              </div>
            )}
            <p>{videoDetail.text}</p>
          </>
        ) : (
          <p>Video not available.</p>
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
