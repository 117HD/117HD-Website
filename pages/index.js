import Carousel from "nuka-carousel";
import Feature from "../components/Feature";
import 'github-markdown-css'

export default function Home(){

    const features = [
        {
            image: '/img/features/placeholder.png',
            title: 'Draw Distance',
            description: 'This determines how much of the world is rendered. The maximum value is 90 and we\'re recommending that you max this out because it dramatically improves the experience.'
        },
        {
            image: '/img/features/placeholder.png',
            title: 'Anti Aliasing',
            description: 'Anti aliasing smooths the edges of geometry and can dramatically improve the image quality. We recommend x4 or x8 because x16 is exponentially more expensive for a relatively minor improvement.'
        },
        {
            image: '/img/features/placeholder.png',
            title: 'Dynamic Lights',
            description: 'The dynamic lights in 117HD are beautiful but very taxing on the GPU. We recommend setting this just above the default but you might want to consider bumping this up to the maximum if you can stomach some frame drops in heavily lit areas.'
        }
    ]

    return (
        <>
            <Carousel
                style={{
                    height: 400
                }}
                wrapAround={true}
                animation={"fade"}
                autoplay={true}
                autoplayInterval={3000}
                withoutControls={true}
                speed={1000}>
                <img src="/img/gallery/img_1.png" />
                <img src="/img/gallery/img_2.png" />
            </Carousel>

            <section className={"content-section"}>
                <h1 className="page-header">Latest Features</h1>
                <div className="grid_items">
                    {features.map(feature => (
                        <Feature key={feature.title} {...feature} />
                    ))}
                </div>
                <h1 className="page-header">Latest News</h1>
            </section>
        </>

    )
}