import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";
import reloadIcon from '@icon/svgs/reloadIcon.svg';
import heartIcon from '@icon/svgs/heartIcon.svg';
import cartIcon from '@icon/svgs/cartIcon.svg';

function MyHeader() {

    const { containerBoxIcon, containerMenu, containerHeader, containerBox, container } = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {
                            dataBoxIcon.map((item) => {
                                return <BoxIcon type={item.type} href={item.href} />
                            })}
                    </div>
                    <div className={containerMenu}>
                        {
                            dataMenu.slice(0, 3).map((item) => {
                                return <Menu content={item.content} href={item.href} />
                            })
                        }
                    </div>
                </div>
                <div>
                    <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina.png" alt="logo" style={
                        { width: '153px', height: '53px' }
                    } />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {
                            dataMenu.slice(3, dataMenu.length).map((item) => {
                                return <Menu content={item.content} href={item.href} />
                            })
                        }
                    </div>
                    <div className={containerBoxIcon}>
                        <img width={26} height={26} src={reloadIcon} alt="" />
                        <img width={26} height={26} src={heartIcon} alt="" />
                        <img width={26} height={26} src={cartIcon} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyHeader;