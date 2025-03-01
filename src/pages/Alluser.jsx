import React, { useEffect, useState } from 'react'

function Alluser() {

    const [data, setData] = useState([]);

    const fetchdata = async () => {
        const response = await fetch('https://dummyjson.com/users');
        const data1 = await response.json();
        setData(data1.users);
  }
  
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('https://dummyjson.com/users');
  //     setData(response.data.users);  // Accessing users array from response
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

    useEffect(() => {
        fetchdata();
    },[])

  return (
    <div>
          {data.map((user, index)=>(
              <h1>{user.firstName}</h1>
      )) }
    </div>
  )
}

export default Alluser
