import { API_URL } from "./apiConfig";

// GET TREINOS
export async function getTreinos() {
  try {
    const fetchUser = await fetch(`${API_URL}/user/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const dadosUsuario = await fetchUser.json();
    const treinos = dadosUsuario.trainings;

    const treinosProcessados = treinos.map((treino: any) => ({
      id: treino.id.toString(),
      treino: treino.type,
      criadoEm: formatarData(treino.created_at),
    }));

    return treinosProcessados;

  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    return [];
  }  
};

export async function createTreino(novoTreino) {
  try{
    const response = await fetch(`${API_URL}/training`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoTreino),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Erro: ${response.status} - ${errorData.message || 'Ocorreu um erro ao criar o treino'}`);
    }  
    
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Erro na criação do treino:', error.message || error);
    throw error;
  }

};

// Funcao para transformar a data no formato dd/mm/aaaa
function formatarData(created_at){
  const createdAt = new Date(created_at);
  
  const day = String(createdAt.getDate()).padStart(2, '0');
  const month = String(createdAt.getMonth() + 1).padStart(2, '0');
  const year = createdAt.getFullYear();

  return `${day}/${month}/${year}`;
}