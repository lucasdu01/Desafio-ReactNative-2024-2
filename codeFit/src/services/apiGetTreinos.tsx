export const fetchTreinos = async () => {
  try {
    const fetchUser = await fetch('https://treinamentoapi.codejr.com.br/api/du/user/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!fetchUser.ok) {
      throw new Error(`Erro: ${fetchUser.status} - ${fetchUser.statusText}`);
    }

    const dados = await fetchUser.json();
    const treinos = dados.trainings;

    const formattedTreinos = treinos.map((treino: any) => ({
      id: treino.id.toString(),
      treino: treino.type,
      criadoEm: formatarData(treino.created_at),
    }));

    return formattedTreinos;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    return [];
  }  
};

function formatarData(created_at){
  const createdAt = new Date(created_at);
  const day = String(createdAt.getDate()).padStart(2, '0');
  const month = String(createdAt.getMonth() + 1).padStart(2, '0');
  const year = createdAt.getFullYear();
  return `${day}/${month}/${year}`;
}