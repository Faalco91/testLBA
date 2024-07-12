
async function getData() {
    const res = await fetch('http://localhost:3000/api/phones');
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

export default async function Cards() {
    const data = await getData();
    console.log(data[0].name);

    return (
        <div>
            <ul>
                {data.map((phones) => (
                  <li key={phones._id}>
                    {phones.name}
                  </li>
                ))}
            </ul>
        </div>
    )
        
}