const API_URL = "http://localhost:3000";

export async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_URL}${endpoint}`);
        if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Erro ao buscar dados de ${endpoint}:`, error);
        return [];
    }
}