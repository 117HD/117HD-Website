import Feature from "../components/Feature";


export default function Features(){
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
        },
        {
            image: '/img/features/placeholder.png',
            title: 'Shadows',
            description: 'You know about shadows :)'
        },
        {
            image: '/img/features/placeholder.png',
            title: 'Colorblindness Mode',
            description: 'Shifts the colors of the scene to those more visible for different types of color blindness.'
        },
        {
            image: '/img/features/placeholder.png',
            title: 'Atmospheric Lighting',
            description: 'Many environments have custom lighting to enhance the mood, improve the graphics, etc. We\'re changing this to be on by default in the next update.'
        },
        {
            image: '/img/features/placeholder.png',
            title: 'Object Textures',
            description: 'Adds textures to some objects.'
        },
        {
            image: '/img/features/placeholder.png',
            title: 'Ground Blending',
            description: 'Blends neighboring ground tiles to smooth out the tile based graphics.'
        },
        {
            image: '/img/features/placeholder.png',
            title: 'Underwater Caustics',
            description: 'Adds lighting effects to underwater environments to simulate sunlight passing through the water.'
        },
        {
            image: '/img/features/placeholder.png',
            title: 'HD TzHaar Reskin',
            description: 'Reskins the TzHaar environment to match the orange graphics that were introduced with the HD update in RS3.'
        }
    ]

    return (
        <section className={"content-section"}>
            <h1 className="page-header">Features</h1>
            <div className="grid_items">
                {features.map(feature => (
                    <Feature key={feature.title} {...feature} />
                ))}
            </div>
        </section>
    )
}