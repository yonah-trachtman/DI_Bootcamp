import { createClient } from 'pexels';
import { useState, useEffect } from "react";

function Pictures(props) {const client = createClient('aaIlrTVFFVrm7mDhRKXizALX4oPrNkWDhFPf4ZXMJGr7KZfIbdFykquT');
  const [images, setimages] = useState([]);

const apiTest = async() => {
  try {
    const query = props.query; 
    const perPage = 20; 
    const page = 1; 


    const result = await client.photos.search({ query, per_page: perPage, page });
    setimages(result.photos)

  } catch (error) {
    console.error('Error fetching photos:', error);
  }


  }

useEffect(() => {
    apiTest();
  }, [props.query])


return (
<div className='images'>
{images && images.map((item, index) => (
            <img 
              key={index}
              src={item.src.original}
              alt={item.alt || 'Photo'}
              className='gridImg'
            />
          ))}
</div>


);

}
export default Pictures;