import { useState, useEffect } from 'react'
import leftChevron from '../../assets/left-arrow.svg'
import rightChevron from '../../assets/right-arrow.svg'
import './Slider.css'
import SliderData from '../../data/sliderData'

export default function Slider() {
    const [sliderIndex, setSlideIndex] = useState(1) // le state affiche la 1ère image en 1er

    function toggleImage(indexPayload) {
        // let newState
        // if(indexPayload + sliderIndex > sliderData.length){
        //   newState = 1
        // }
        // else if(indexPayload + sliderIndex < 1) {
        //   newState = sliderData.length
        // }
        // else {
        //   newState = indexPayload + sliderIndex
        // }
        // setSliderIndex(newState)
    
        setSliderIndex(state => {
            if (indexPayload + state > sliderData.length) {
                return 1
            } else if (indexPayload + state < 1) {
                return sliderData.length
            } else {
                return state + indexPayload
            }
        })
    }
    
    useEffect(() => {
        const intervalID = setInterval(() => toggleImage(1), 2000)
    
        return () => clearInterval(intervalID)
    }, [])

    return (
        <>
            <p className="inndex-info">{sliderIndex} / {SliderData.length}</p>
            <div className="slider">
                <p className="image-info">{sliderData.find(obj => obj.id === sliderIndex) }.description</p> {/* Objet dont l'id = sliderIndex */}
                <img
                    src={`/images/img-${sliderIndex}.jpg`}
                    alt="estate's rooms"
                    className="slider-img"
                />
                <button
                    onClick={() => toggleImage(-1)}
                    className="navigation-button prev-button"
                >
                    <img src={leftChevron} alt="Previous image" />
                </button>
                <button
                    onClick={() => toggleImage(1)}
                    className="navigation-button next-button"
                >
                    <img src={rightChevron} alt="Next image" />
                </button>
            </div>
        </>
    )
}
