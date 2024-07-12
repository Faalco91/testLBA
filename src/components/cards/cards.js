'use client'

import { useState, useEffect } from 'react';
import { getData } from '../../api';
import CardComponent from '../cardComponent/cardComponent';

import styles from './cards.module.css'

export default function Cards() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => { 
        try {
          const result = await getData();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
  
    const handlePhoneUpdate = (id, updatedPhone) => {
      setData((prevData) =>
        prevData.map((phone) => (phone._id === id ? { ...phone, ...updatedPhone } : phone))
      );
    };

    const handlePhoneDelete = (id) => {
      setData((prevData) => prevData.filter((phone) => phone._id !== id));
    };

    return (
      <div className={styles.cardsContainer}>
        {data.map((phone) => (
          <CardComponent
            key={phone._id}
            phone={phone}
            onPhoneUpdate={handlePhoneUpdate}
            onPhoneDelete={handlePhoneDelete}
          />
        ))}
      </div>
    );
}
