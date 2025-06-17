// import React, { useEffect, useState } from 'react'
// import { dataBase } from '../../../../FireBase/FireBase';
// import { getDoc,doc } from 'firebase/firestore';

// const ShownInterest = () => {
//   const [Saved,setSaved]=useState([])
//     const User=JSON.parse(localStorage.getItem("logginuser"))
//   console.log(User);
  
//   useEffect(()=>{
// const FetchingData=async()=>{
//   const docref=doc(dataBase,"user",User.user.displayName)
// const Data=await getDoc(docref)
// console.log(Data.data().savedPosts);
// setSaved(Data.data().savedPosts)

// }
// FetchingData()
//   },[])
//   return (
//     <div>
//       {Saved.map((item)=>{
//         return(
//           <>
//           <h1>{item.name}</h1>
//           </>
//         )
//       })}
//     </div>
//   )
// }

// export default ShownInterest
import React, { useEffect, useState } from 'react'
import './ShownInterest.css'
import { dataBase } from '../../../../FireBase/FireBase';
import { getDoc, doc, updateDoc } from 'firebase/firestore';

const ShownInterest = () => {
  const [Saved, setSaved] = useState([]);
  const User = JSON.parse(localStorage.getItem("logginuser"));
  console.log(User);

  useEffect(() => {
    const FetchingData = async () => {
      const docref = doc(dataBase, "user", User.user.displayName);
      const Data = await getDoc(docref);
      console.log(Data.data().savedPosts);
      setSaved(Data.data().savedPosts);
    }
    FetchingData();
  }, []);

  const handleDelete = async (index) => {
    const updatedSaved = [...Saved];
    updatedSaved.splice(index, 1);
    setSaved(updatedSaved);

    const docref = doc(dataBase, "user", User.user.displayName);
    await updateDoc(docref, {
      savedPosts: updatedSaved
    });
  }

  return (
    <div>
      <h2>Saved Interests</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Height</th>
            <th>Caste</th>
            <th>Location</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Saved.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id || "N/A"}</td>
                <td>
                  <img src={item.image} alt={item.name} width="60" height="60" style={{ borderRadius: "50%" }} />
                </td>
                <td>{item.name}</td>
                <td>{item.height || "N/A"}</td>
                <td>{item.caste || "N/A"}</td>
                <td>{item.location || "N/A"}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ShownInterest;
