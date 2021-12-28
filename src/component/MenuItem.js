import styles from "../component/style/MenuItem.module.css";

import Col from 'react-bootstrap/Col';

const MenuItem = ({bgColor, icon, label}) => {
    return (
        <>
            <Col md={3}>
                <div className={styles.menu_card} style={{backgroundColor: bgColor}}>
                    <span className={styles.menu_label}>{label}</span>
                </div>
            </Col>
        </>
    );
};
export default MenuItem;