export default function SliderController({slider}) {
    
    return (
        <div>
            <button onClick={() => {slider.current.slickPrev()}}>{"<"}</button>
            <span></span>
            <button onClick={() => {slider.current.slickNext()}}>{">"}</button>
        </div>
    )
}