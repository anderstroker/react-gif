import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
  const {data, loading} = useFetchGifs(category);

  
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando</p>}
      <div className="card-grid">
        {
          data.length > 0 && data.map(img => {
            return (
              <>
                <GifGridItem {...img} key={img.id}/>
              </>
            )

          })
        }
        
      </div>
    </>
  )
}