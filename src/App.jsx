import { FriendsReferred, ReferandEarn } from './pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  console.log('Only ideal for mobile and desktop/laptop viewport');
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ReferandEarn />}></Route>
          <Route path="/friendsreferred" element={<FriendsReferred />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
