import React from 'react'
import { getArtisans} from "../../utils/getArtisans"

//get static props function
export async function getStaticPaths(){
    const res = await getArtisans();
    
    //map through to get a single artisan by id
    const paths = res.map((artisan)=> ({ params: { artisanId: String(artisan._id)}}));
    return {
      paths,
      fallback: true
    };
    }

    export async function getStaticProps(context){
        const artisan = await getArtisans(context.params.artisanId);
        
        return {
            props:{
                artisan,
            },
        };
        }
const ArtisanDetails = ({artisan}) => {
  return (
    <div>
      <h1>Artisan Details</h1>
      <hr/>
      {artisan.name}

    </div>
  )
}

export default ArtisanDetails



        }

        throw new Error("Invalid shop or password");
      },
      
