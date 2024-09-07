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
      tipo: treino.type,
      criadoEm: formatarData(treino.created_at),
      carga: treino.weight,
      repeticoes: treino.repetitions,
      tempo: treino.time,
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

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Erro na criação do treino:', error.message || error);
    throw error;
  }
};

export async function updateTreino(atualTreino) {
  console.log(atualTreino);
  try{
    const response = await fetch(`${API_URL}/training/${atualTreino.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(atualTreino),
    });    
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Erro na edição do treino:', error.message || error);
    throw error;
  }
};

export async function deleteTreino(atualTreino) {
  try{
    const response = await fetch(`${API_URL}/training/${atualTreino.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });    
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Erro na edição do treino:', error.message || error);
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