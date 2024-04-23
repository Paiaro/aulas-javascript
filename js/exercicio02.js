'use sctrict';

const clientes = [
    { id: 1, name: 'Goku' },
    { id: 2, name: 'Naruto' },
    { id: 3, name: 'Shiryu' },
  ];
  
  for (const clientes of clientes) {
    console.log(`Cliente: ${clientes.name} (id: ${clientes.id})`);
  }