import './App.css'
import TopBar from './topBar/TopBar.js'
import Main from './main/Main.js'

export default function App() {

    return (
        <div className='App'>
            <TopBar />
            <div style={{ width: '100%', height: '1px', backgroundColor: '#666' }} />
            <Main />
        </div>
    )
}