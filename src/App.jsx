// Importing the CSS file for styling
import './App.css';

// Importing components and context provider
import Profile from './components/Profile';
import Login from './components/Login';
import UserContextProvider from './context/UserContextProvider';

// Main App component
function App() {
  // Wrapping components with UserContextProvider to provide user context
  return (
    <UserContextProvider>
      {/* Header indicating the usage of Context API */}
      <h1>Context Api with Hitesh sir !!! 🔗</h1>

      {/* Login component for user authentication */}
      <Login />

      {/* Profile component to display user information */}
      <Profile />
    </UserContextProvider>
  );
}

// Exporting the App component as the default export
export default App;
