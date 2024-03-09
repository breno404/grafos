# Árvore

É um Grafo conexo sem ciclos, com um vértice (nó) especial, chamado raiz.

## Árvore Livre

É uma Árvore sem uma raiz especificada.

## Floresta

Um Grafo formado por várias Árvores

## Árvore Binária

É uma Árvore que possui no máximo 2 filhos

### Cheia

É quando todas as folhas estão em uma mesma profundidade e todos os nós internos têm grau 2.

O número de vértices em uma Árvore Binária Cheia é 2^(h+1) - 1, onde h é a altura da árvore

### Completa (ou Quase Completa)

Quando a altura é h, cada folha está no nível h ou h-1.

## Observações

- Uma Árvore com n vértices tem n-1 arestas.
- Em uma Árvore com n vértices, o número total de extremidades de arestas é 2n-2.

## Percursos

### Pré-Ordem

Percorre a Árvore visitando um nó e depois seus descendentes (da esquerda para a direita).

#### Algoritmo

<code>const func = (node) => {
    if(node != null) console.log(node)
    func(node.children[0])
    func(node.children[1])
}</code>


### Ordem

Percorre a Árvore visitando os descendentes a esquerda, depois o nó e então os descendentes a direita.

#### Algoritmo

<code>const func = (node) => {
    if(node != null) {
    func(node.children[0])
    console.log(node)
    func(node.children[1])
    }
}</code>

### Pós-Ordem

Percorre a Árvore visitando os descendentes (da esquerda para a direita), depois o nó.

#### Algoritmo

<code>const func = (node) => {
    if(node != null) {
    func(node.children[0])
    func(node.children[1])
    console.log(node)
        }
    }</code>
