import { API_URL } from "./apiConfig";

// GET USER
export async function getUser() {
  try {
    const fetchUser = await fetch(`${API_URL}/user/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const dadosUsuario = await fetchUser.json();
    return dadosUsuario;

  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    return [];
  }  
};

// Autentica o usuario
export const verificaExisteUser = async (email: string, senha: string) => {
    const user = await getUser();

    if (email === user.user.email && senha === 'senha123') {
      return { success: true, user: { id: 1, name: 'Lucas Du' } };
    } else {
      throw new Error('Email ou senha inválidos');
    }
  };
  