import ImageShow from "./ImageShow";
import "./ImageList.css"

function ImageList({images}){
const renderedImages = images.map((image, index) =>{
    return <ImageShow key = {image} image = {image} />
    }
)

    return <div className="image-list">{renderedImages}</div>
}

export default ImageList;