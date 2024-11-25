import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import MainLayout from "@components/Layout/Layout";
import styles from './styles.module.scss';
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";

function HeadingListProduct() {
    const targetDate = '2025-01-01T00:00:00Z';
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            {/* <CountdownTimer targetDate={targetDate}/> */}
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;