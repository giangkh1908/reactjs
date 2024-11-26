import styles from './styles.module.scss';
import reloadIcon from '@icon/svgs/reloadIcon.svg';
import heartIcon from '@icon/svgs/heartIcon.svg';
import cartIcon from '@icon/svgs/cartIcon.svg';


function ProductItem({ src, preSrc, name, price }) {
    const { boxImg, showImageWhenHover, showFunctionWhenHover, boxIcon, title, priceClass } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg" alt="" />
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg" alt=""
                    className={showImageWhenHover} />
                <div className={showFunctionWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className={title}>10K Yellow Gold</div>
            <div className={priceClass}>$99.99</div>
        </div>
    );
}

export default ProductItem;