import { gql, useQuery } from "@apollo/client";
import { Loading } from './components/Loading';
import { Table } from "./components/Table";
import { useEffect, useState } from "react";

const COUNTRIES = gql`
  query getCountries {
    countries {
      name
      native
      emoji
      currency
      languages {
        code
        name
      }
      emojiU
      phone
      states {
        code
        name
      }
      continent {
        code
        name
      }
      code
    }
  }
`;

function App() {
  const {loading, error, data} = useQuery(COUNTRIES);
  const [showLoading, setShowLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000); 
    
    return () => clearTimeout(timer); 
  }, []);

  if (loading || showLoading) return <Loading blur />;
  if(error) return `Error: ${error.message}`;

  return <Table countries={data.countries}/>;
}

export default App;
