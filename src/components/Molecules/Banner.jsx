const Banner = ({src, alt, slogan}) => {
    return (
        <div className="banner">
            <img src={src} alt={alt} />
            <p className="bannerText">{slogan}</p>
        </div>
    )
}

export default Banner;