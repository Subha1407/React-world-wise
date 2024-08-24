import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({children}) {
  const BASE_URL = "http://localhost:8000"
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function() {
    async function fetchData() {
      try{
        setIsLoading(true);
        const res = await fetch(BASE_URL + '/cities');
        const data = await res.json();
        setCities(data);
      } catch(e) {
        throw new Error('Failure');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])

  async function getCity(id) {
    try{
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch(e) {
      throw new Error('Failure');
    } finally {
      setIsLoading(false);
    }

  }

  return <CitiesContext.Provider value={{
    cities,
    isLoading,
    currentCity,
    getCity
  }}>
    {children}
  </CitiesContext.Provider>
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context == undefined) throw new Error('Yu have used cities context at wron place');
    return context
}

export {CitiesProvider, useCities};