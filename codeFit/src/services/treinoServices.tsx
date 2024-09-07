import { API_URL } from "./apiConfig";

// GET TREINOS
export async function fetchTreinos() {
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

function formatarData(created_at){
  const createdAt = new Date(created_at);
  const day = String(createdAt.getDate()).padStart(2, '0');
  const month = String(createdAt.getMonth() + 1).padStart(2, '0');
  const year = createdAt.getFullYear();
  return `${day}/${month}/${year}`;
}