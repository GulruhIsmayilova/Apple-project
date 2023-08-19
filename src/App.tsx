import { BrowserRouter as Router,} from 'react-router-dom';
import Header from './Header'; // Header komponentini import edin

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Header komponentini əlavə edin */}

      </div>
    </Router>
  );
}

export default App;
