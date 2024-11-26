import MainLayout from "@components/Layout/Layout";
import styles from './styles.module.scss';
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import ProductItem from "@components/Productitem/ProductItem";

function HeadingListProduct() {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;