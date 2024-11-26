import styles from './styles.module.scss';

function SaleHomePage() {
    const { container } = styles;
    return (
        <div className={container}>
            <div>image 1</div>
            <div>content</div>
            <div>iamge 2</div>
        </div>
    );
}

export default SaleHomePage;