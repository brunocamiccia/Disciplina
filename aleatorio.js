const nomes = ["Chiquinho", "Ternoski", "Bruno", "Carol", "Dalessandro", "Dininho", "Louis"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)