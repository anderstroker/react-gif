import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [a, setA] = useState({
        data:[],
        loading: true
    })

    useEffect( () => {

      getGifs(category)
      .then(img => {
        setTimeout(()=> {
          console.log(img)
          setA({
            loading: false, 
            data: img
          })
        }, 3000);
      })

    }, [category])

  return a
}