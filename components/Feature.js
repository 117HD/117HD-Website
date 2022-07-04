import Link from "next/link";
import Image from "next/image";

const Feature = ({ image, title, description, link, linkAlt }) => (
    <div className="grid_item">
        <Image width={300} height={240} className={"card-img-top"} alt={title} src={image} />
        <div className="card-title">
            {link ? (<Link href={link} alt={linkAlt}><a>{title}</a></Link>) : (title)}
        </div>
        <p className="card-text">{description}</p>
    </div>
)

export default Feature