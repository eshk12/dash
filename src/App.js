import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import {userRoutes} from "./routes/route";
import './component/style/App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {NotFound} from "./pages/NonAuthPages/NotFound";


function App() {
    return (
        <div className="App">
            <Container fluid>
                <Router>
                    <Routes>
                        <Route path='*' element={<NotFound/>}/>
                        {
                            userRoutes.map((route, index) => (
                                    <Route
                                        path={route.path}
                                        exact={route.exact}
                                        element={route.component}
                                        key={index}
                                    />
                                )
                            )
                        }
                    </Routes>
                </Router>
            </Container>
        </div>
    );
}

export default App;
