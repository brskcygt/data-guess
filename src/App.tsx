import { gql, useQuery } from "@apollo/client";
import { Loading } from './components/Loading';
import { Table } from "./components/Table";

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
  
  if(loading) return <Loading />;
  if(error) return `Error: ${error.message}`;
  console.log(data);

  return <Table countries={data.countries}/>;
}

export default App;
