
import React, { useEffect, useState } from 'react'
import { dataBase } from '../../../../FireBase/FireBase';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import './ShownInterest.css'; 

const ShownInterest = () => {
  const [Saved, setSaved] = useState([]);
  const User = JSON.parse(localStorage.getItem("logginuser"));

  useEffect(() => {
    const FetchingData = async () => {
      const docref = doc(dataBase, "user", User.user.displayName);
      const Data = await getDoc(docref);
      setSaved(Data.data().savedPosts || []);
    };
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
    <div className="shown-interest-container">
  <h2 className="heading">Saved Interests</h2>
  <div className="table-wrapper">
    <table className="responsive-table">
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
        {Saved.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.id || "N/A"}</td>
            <td>
              <img src={item.image} alt={item.name} className="profile-img1" />
            </td>
            <td>{item.name}</td>
            <td>{item.height || "N/A"}</td>
            <td>{item.caste || "N/A"}</td>
            <td>{item.location || "N/A"}</td>
            <td>
              <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default ShownInterest;

