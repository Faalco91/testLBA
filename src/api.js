export async function getData() {

    const res = await fetch('http://localhost:3000/api/phones');
    if (!res.ok) {
      throw new Error('Erreur dans la récuperation des données')
    }
    return res.json()
  }
