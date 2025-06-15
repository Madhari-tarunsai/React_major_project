import React, { useState } from 'react';
import './Astrology.css';
import {
  FaStarAndCrescent,
  FaMars,
  FaVenus,
  FaHeart,
  FaRing,
  FaMale,
  FaFemale
} from 'react-icons/fa';

const nakshatras = ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu'];

const getRashi = (month) => {
  const rashis = [
    'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini',
    'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'
  ];
  return rashis[month % 12];
};

const getNakshatra = () => {
  const random = Math.floor(Math.random() * nakshatras.length);
  return nakshatras[random];
};

const checkMarriageBound = (boyStar, girlStar) => {
  return boyStar === girlStar ? 'Not Suitable' : 'Good Match';
};

const AddDetails = () => {
  const [boy, setBoy] = useState({ name: '', dob: '', time: '', place: '' });
  const [girl, setGirl] = useState({ name: '', dob: '', time: '', place: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setResult(null); 

    setTimeout(() => {
      const boyDate = new Date(boy.dob);
      const girlDate = new Date(girl.dob);
      const boyRashi = getRashi(boyDate.getMonth());
      const girlRashi = getRashi(girlDate.getMonth());
      const boyNak = getNakshatra();
      const girlNak = getNakshatra();
      const marriageBound = checkMarriageBound(boyNak, girlNak);

      setResult({
        boy: { ...boy, rashi: boyRashi, nakshatra: boyNak },
        girl: { ...girl, rashi: girlRashi, nakshatra: girlNak },
        marriageBound,
      });
      setLoading(false);
    }, 2000); 
  };

  return (
    <div className="form-container">
      <h2><FaStarAndCrescent /> Matrimony Astrology Checker</h2>
      <div className="forms">
        <div className="form-box">
          <h3><FaMars /> Boy Details</h3>
          <input placeholder="Name" onChange={(e) => setBoy({ ...boy, name: e.target.value })} />
          <input type="date" onChange={(e) => setBoy({ ...boy, dob: e.target.value })} />
          <input placeholder="Time of Birth" onChange={(e) => setBoy({ ...boy, time: e.target.value })} />
          <input placeholder="Place of Birth" onChange={(e) => setBoy({ ...boy, place: e.target.value })} />
        </div>

        <div className="form-box">
          <h3><FaVenus /> Girl Details</h3>
          <input placeholder="Name" onChange={(e) => setGirl({ ...girl, name: e.target.value })} />
          <input type="date" onChange={(e) => setGirl({ ...girl, dob: e.target.value })} />
          <input placeholder="Time of Birth" onChange={(e) => setGirl({ ...girl, time: e.target.value })} />
          <input placeholder="Place of Birth" onChange={(e) => setGirl({ ...girl, place: e.target.value })} />
        </div>
      </div>

      <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
        <FaHeart /> {loading ? 'Checking...' : 'Check Marriage Compatibility'}
      </button>

      {loading && <div className="loader"></div>}

      {result && !loading && (
        <div className="result">
          <h3>Astrology Result:</h3>
          <div className="astrology-box">
            <p><FaMale /> <strong>Boy:</strong> {result.boy.name}, Rashi: {result.boy.rashi}, Nakshatram: {result.boy.nakshatra}</p>
            <p><FaFemale /> <strong>Girl:</strong> {result.girl.name}, Rashi: {result.girl.rashi}, Nakshatram: {result.girl.nakshatra}</p>
            <p><FaRing /> <strong>Marriage Compatibility:</strong> {result.marriageBound}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddDetails;
