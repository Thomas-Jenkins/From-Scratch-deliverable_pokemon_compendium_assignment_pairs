import { useEffect, useState } from 'react';
import { fetchPokeTypes } from '../../services/fetch-utils';


export default function useFilter() {
  const [type, setType] = useState('All');
  const [typeList, setTypeList] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPokeTypes();
        setTypeList(data);
      } catch (e) {
        console.error(e);
      }
    };  
    getData();

  }, []); 
  return { type, typeList, setType };
}