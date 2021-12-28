import styles from "../../component/style/Auth.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import MenuItem from "../../component/MenuItem";

const Dashboard = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={12} className={styles.header}>
                        <Container>
                            <Row>
                                <Col md={{span: 4, offset: 5}}>
                                    <h3 className={styles.headerTitle}>ממשק ניהול מתקדם</h3>
                                </Col>
                                <Col md={3}
                                     className={styles.headerLogo}
                                >
                                    <img src="https://via.placeholder.com/250x80.png?text=Hello,%20World!"/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container className={styles.container}>
                <Row className={styles.menu_header}>
                    <Col md={{span: 3, offset: 7}}>
                        ניווט מהיר במערכת
                    </Col>
                    <Col md={2} className="text-center text-md-left">
                        שלום איציק, ברוך הבא. <br/>
                    </Col>
                </Row>
                <Row className={styles.row_spacer}>
                    <MenuItem
                        bgColor="#3c8dbc"
                        icon=''
                        label="ניהול קטגוריות"
                    />
                    <MenuItem
                        bgColor="#f39c12"
                        icon=''
                        label="ניהול מוצרים"
                    />
                    <MenuItem
                        bgColor="#dd4b39"
                        icon=''
                        label="ניהול עסקאות"
                    />
                    <MenuItem
                        bgColor="#00a65a"
                        icon=''
                        label="ניהול מבצעים"
                    />
                    <MenuItem
                        bgColor="#00a65a"
                        icon=''
                        label="ניהול משתמשים"
                    />
                    <MenuItem
                        bgColor="#00a65a"
                        icon=''
                        label="הגדרות האתר"
                    />
                </Row>
            </Container>
            <Container className={styles.container_content}>
                <Container fluid className={styles.content_header}>
                    <Row>
                        <Col lg={12} className={styles.content_label}>
                            עמוד ראשי
                        </Col>
                    </Row>
                </Container>
                <Container fluid className={styles.content_data}>
                    <Row>
                        <Col lg={12}>
                            <p>
                                תוכן תוכן תוכן
                                תוכן תוכן תוכן
                                תוכן תוכן תוכן
                                תוכן תוכן תוכן
                                תוכן תוכן תוכן
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Dashboard;