import Button from "@components/Button/Button";
import styles from "./styles.module.scss";

function Banner() {
    const { container, content, title, des } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>XStore Auteen</h1>
                <div className={des}>
                    Make life beautiful.
                </div>
                <Button content={"Go to shop"} />
            </div>
        </div>
    );
}

export default Banner;
