import React, { useEffect, useRef, useState } from 'react'
import FrontEndsTable from '../tables/FrontEnds'
import NraoLoader from './loaders/NraoLoader';
import axios from 'axios';

export default function FrontEndsList(props) {
  let error = useRef(null);
  let mainComponent = useRef(null);

  let [isLoaded, setLoaded] = useState(false);
  let [items, setItems] = useState(null);

  const fetchData = async () => {
    await axios.get(process.env.REACT_APP_DB_HOSTNAME + "/front_ends/full")
      .then(
        (result) => {
          setItems(result.data);
          setLoaded(true);
        },
        (er) => {
          error.current = er;
          setLoaded(true);
        }
      )
  };

  useEffect(
    () => {
      fetchData();
    }, []);

  if (error.current) {
    mainComponent.current = <div>Error: {error.message}</div>
  } else if (isLoaded && items != null) {
    mainComponent.current = <FrontEndsTable className="w-100" data={items} />
  } else {
    mainComponent.current = <div className="loader-box w-100"><NraoLoader speed={3} /></div>
  }

  return (
    <div>
      {mainComponent.current}
    </div>
  )
}
