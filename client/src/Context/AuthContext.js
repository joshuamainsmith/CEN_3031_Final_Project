import React, {createContext, useState, useEffect} from 'react';
import { Spinner } from  'reactstrap';
import AuthService from '../Services/AuthService';

export const AuthContext = createContext();

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AuthService.isAuthenticated().then(data => {
      setUser(data.user);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  },[]);

  return (
    <div>
      {!isLoaded ? <h1><Spinner color="primary" style={{width:'6rem', height:'6rem'}} /></h1> :
      <AuthContext.Provider value={{user,setUser, isAuthenticated, setIsAuthenticated}}>
        { children }
      </AuthContext.Provider>}
    </div>
  )
}
