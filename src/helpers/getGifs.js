import {config} from "../config";


export const getGifs = async( category ) => {
    console.log(category)
    const url =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${config.api_key}`
    const response = await fetch(url)
    const json = await response.json()
    const data = json.data
    const gifs = data.map((img)=> {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

   return gifs;
  }