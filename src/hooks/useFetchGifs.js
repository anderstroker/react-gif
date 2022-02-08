import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    })

    useEffect( () => {

      getGifs(category)
      .then(img => {
        setTimeout(()=> {
          console.log(img)
          setState({
            loading: false, 
            data: img
          })
        }, 3000);
      })

    }, [category])

  return state
}