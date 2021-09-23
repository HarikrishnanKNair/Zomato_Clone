import React, { useState } from "react";
import ImageViewer from 'react-simple-image-viewer';

//component
import PhotoCollection from "../../Components/restaurant/PhotosCollection";

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/4/57274/e3380518ad816498d2b392c29ff533ef.png",
        "https://b.zmtcdn.com/data/pictures/chains/4/57274/3aaf231e7e7f8f457b6a99ef42534e2c.png",
        "https://b.zmtcdn.com/data/pictures/0/19721910/f7f039776713596b9cbabd6463d5bb8d.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/57274/3d562e390460105c26c0010caa5cfcae.png",
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={ photos }
                    currentIndex={ CurrentImg }
                    disableScroll={ false }
                    onClose={ closeViewer }
                />
            )}
            <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                    <PhotoCollection image={photo} openViewer={openViewer} />
                ))}
            </div>
        </>
    );
};

export default Photos;