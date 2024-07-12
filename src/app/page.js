import Image from "next/image";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch('http://localhost:3000/api/phones');
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 

export default async function Home() {

  const data = await getData();
  const mappage = data.map((phones) => {
    {phones.name}
  })
  console.log(mappage);
  console.log(data[0].name);
  
  return (
    <main className={styles.main}>
      <h1>TEST</h1>
      <ul>
        {data.map((phones) => (
          <li key={phones._id}>
            {phones.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
