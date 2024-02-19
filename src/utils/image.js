import leaf from "../images/leaf.jpg";
import snow from "../images/snow.jpg";
import tyler from "../images/tyler.jpg";

export const image = (src) => {
    if (src === "leaf.jpg") {
        return leaf
    }else if (src === "snow.jpg" ) {
        return snow
    }else {
        return tyler
    }
}