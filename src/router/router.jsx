import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../pages/index';


function AppRouter(){
    return(
        <Router basename='/react-todo-v2'>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </Router>
    )
}
export default AppRouter