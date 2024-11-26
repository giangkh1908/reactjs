import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProduct from '@components/HeadingListproduct/HeadingListProduct';
import { getProducts } from '@/apis/productService';
import { useEffect } from 'react';

function Homepage() {
    // const { container } = styles;

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProduct />
            </div>
        </div>
    );
}

export default Homepage;