import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './MyComponent';
import './App.css';
import Comp from './comp';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Comp />} />
                        <Route path="/test" element={<MyComponent />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;
