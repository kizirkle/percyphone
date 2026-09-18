function ProductImages({images, setImages}){

    const handleImageCount = (event) => {
        const count = Number(event.target.value);

        // Create an array with the requested number of images.
        // Existing images are preserved.
        const newImages = Array.from(
            { length: count },
            (_, index) => images[index] || ""
        );

        setImages(newImages);
    };

    const handleImages = (event, index) => {
        const newImages = [...images];
        newImages[index] = event.target.value;
        setImages(newImages);
    }

    return(
        <div className="m-1 d-flex flex-column justify-content-center align-content-center col-12">
            <div className="col-12">
                <label className="text-center">
                    How many images would you like to add?
                </label>
                <input
                type="number"
                min="0"
                onChange={handleImageCount}/>
            </div>
            <div className="col-12">
                {images.map((image, index) => (
                    <div key={index}>
                        <label>Image {index + 1}: </label>
                        <input type="text" name={`image-${index}`} value={image || ""} onChange={(event) => (handleImages(event, index))}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages;