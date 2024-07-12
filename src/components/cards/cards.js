'use client'

import { useState, useEffect } from 'react';
import { getData } from '../../api';
import CardComponent from '../cardComponent/cardComponent';

import styles from './cards.module.css'

export default function Cards() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const data = async () => {
        try {
          const result = await getData();
          setData(result);
          console.log(setData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      data();
    }, []);
  
    return (
      <div className={styles.cardsContainer}>
        {data.map((phone) => (
          <CardComponent key={phone._id} phone={phone} />
        ))}
      </div>
    );
  }