import {useState} from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
    const [user, setUser] = useState({
        displayName: 'Peter Phan',
        email: 'peter_phan05@yahoo.com',
        emailVerified: true,
        phoneNumber: null,
        photoURL:
            'https://www.eneos.us/wp-content/uploads/2020/03/2000-Acura-Integra-GS-R-JDM-Front-End-Conversion-01.jpg',
    });

    // authentication

    return (
        <div className="App">
            <Header userPhoto={user.photoURL} />
            <Sidebar />            
        </div>
    );
}

export default App;
