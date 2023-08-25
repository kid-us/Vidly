import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, alt, className }) => {
    return (
        <LazyLoadImage className={className} effect="blur" src={src} alt={alt} />
    )
}

export default Img