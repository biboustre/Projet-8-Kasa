import styles from "../../assets/styles/Banner.module.css";

const Banner = ({src, alt, slogan}) => {
    return (
        <div className={styles.banner}>
            <img src={src} alt={alt} />
            <p className={styles.bannerText}>{slogan}</p>
        </div>
    )
}

export default Banner;