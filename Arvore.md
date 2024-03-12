# Sumário

- [Grafo](./README.md/#grafo)
  - [O que é um Grafo](./README.md/#o-que-é-um-grafo)
  - [Grau de uma Vértice](./README.md/#grau-de-uma-vértice)
  - [Aplicações](./README.md/#aplicações)
- [Terminologia de Grafos](./README.md/#terminologia-de-grafos)
  - [Grafo completo](./README.md/#grafo-completo)
  - [Grafo Direcionado ou Orientado](./README.md/#grafo-direcionado-ou-orientado)
  - [Laço](./README.md/#laço)
  - [Multigrafo](./README.md/#multigrafo)
  - [Grafo Simples](./README.md/#grafo-simples)
  - [Ordem de um grafo](./README.md/#ordem-de-um-grafo)
  - [Sobre os Graus dos Vértices de um Grafo](./README.md/#sobre-os-graus-dos-vértices-de-um-grafo)
  - [Subgrafo](./README.md/#subgrafo)
  - [Passeio](./README.md/#passeio)
  - [Trilha](./README.md/#trilha)
  - [Caminho](./README.md/#caminho)
  - [Grafos Conexos/Desconexos](./README.md/#grafos-conexosdesconexos)
- [Árvores](#árvore)
  - [Árvore Livre](#árvore-livre)
  - [Floresta](#floresta)
  - [Árvore Binária](#árvore-binária)
  - [Observações](#observações)
  - [Percursos](#percursos)
  - [Caso de aplicação](#caso-de-aplicação)

# Árvore

<p>Uma Árvore nada mais é do que um grafo conexo sem ciclos, com um vértice (nó) especial, chamado raiz.</p>

![image](https://github.com/breno404/grafos/assets/48841329/0ccd6107-b4f0-4cdd-b03f-78a3d8f57a09)

## Árvore Livre

É uma Árvore sem uma raiz especificada.

![image](https://github.com/breno404/grafos/assets/48841329/17b590a2-6440-4aee-a0b7-bb8b9be20297)

## Floresta

Um Grafo formado por várias Árvores

![image](https://github.com/breno404/grafos/assets/48841329/0393f1c6-00df-429b-9c44-45651c1ffd88)

## Árvore Binária

<p>A Árvore Binária possui até no máximo dois filhos por nó. Geralmente esse tipo de árvore é utilizada para a busca binária, onde permite uma menor quantidade de passos até chegar no nó desejado.</p>
<p>A Árvore Binária é estruturada de uma forma onde o nó X possui um peso Y, seu nó filho na esquerda possui o peso < Y, enquanto o nó filho na direita possui o peso > Y.</p>

![image](https://github.com/breno404/grafos/assets/48841329/3ecc7ab1-0079-4d58-abe0-8ef00273f58d)

### Cheia

É quando todas as folhas (nós que não possuem descendentes) estão em uma mesma profundidade e todos os nós internos têm grau 2 (dois nós filhos).

O número de vértices em uma Árvore Binária Cheia é 2^(h+1) - 1, onde h é a altura da árvore.

![image](https://github.com/breno404/grafos/assets/48841329/13389000-8019-43f6-b09b-d1afc0d14d00)


### Completa (ou Quase Completa)

Quando a altura é h, cada folha está no nível h ou h-1.

![image](https://github.com/breno404/grafos/assets/48841329/6fa0c67e-c084-4e60-9844-2b39dd414d42)

### Algoritmo de Busca
    
Os algoritmos de busca tem como base o método de procura de qualquer elemento dentro de um conjunto de elementos com determinadas propriedades.

{8, 3, 6, 10, 14, 1, 7, 13, 4}

### Árvore Binária de Busca

Uma Árvore Binária é dita de busca, se para todos seus nós (vértices), temos que o elemento deste nó é maior que todos os elementos dos nós da subárvore à sua esquerda, e menor que todos os elementos dos nós da subárvore à sua direita.

## Observações

- Uma Árvore com n vértices tem n-1 arestas.
- Em uma Árvore com n vértices, o número total de extremidades de arestas é 2n-2.

## Percursos

### Pré-Ordem

Percorre a Árvore a partir da seguinte ordem:
- Nó
- Descendente da esquerda
- Descendente da direita

#### Algoritmo

<pre><code>//Pré-Orderm
const func = (node) => {
    if(node != null) {
        console.log(node)
        func(node.children[0])
        func(node.children[1])
    }else console.log(null)
}
</code></pre>

![image](https://github.com/breno404/grafos/assets/48841329/307f5d90-caeb-4697-96f3-e49c36744567)

### Ordem

Percorre a Árvore a partir da seguinte ordem:
- Descendente da esquerda
- Nó
- Descendente da direita

#### Algoritmo

<pre><code>//Orderm
const func = (node) => {
    if(node != null) {
        func(node.children[0])
        console.log(node)
        func(node.children[1])
    }else console.log(null)
}
</code></pre>

![image](https://github.com/breno404/grafos/assets/48841329/93a7e948-2fe8-4e6e-9728-123f39c6fa69)

### Pós-Ordem

Percorre a Árvore a partir da seguinte ordem:
- Descendente da esquerda
- Descendente da direita
- Nó

#### Algoritmo

<pre><code>//Pós-Orderm
const func = (node) => {
    if(node != null) {
        func(node.children[0])
        func(node.children[1])
        console.log(node)
    }else console.log(null)
}
</code></pre>

![image](https://github.com/breno404/grafos/assets/48841329/08e4d887-081a-42f2-8cc9-36270a0397a1)

## Caso de aplicação

<table>
    <thead>
        <tr>
            <th >Notação</th>
            <th>Sequência</th>
            <th>Equivalência</th>
     </tr>
 </thead>
 <tbody>
     <tr>
         <td rowspan="3">
             <p>Infixa</p>
             <p>Convencional</p>
         </td>
         <td>
             <p>Exibir a folha esquerda</p>
             <p>Exibir a raiz</p>
             <p>Exibir a folha direita</p>
         </td>
         <td rowspan="3">Ordem</td>
     </tr>
     <tr></tr>
     <tr></tr>
     <tr>
         <td rowspan="3">
             <p>Prefixa</p>
             <p>Polonesa</p>
         </td>
         <td>
             <p>Exibir a raiz</p>
             <p>Exibir a folha esquerda</p>
             <p>Exibir a folha direita</p>
         </td>
         <td rowspan="3">Pré-Ordem</td>
     </tr>
     <tr></tr>
     <tr></tr>
         <td rowspan="3">
             <p>Pósfixa</p>
             <p>Polonesa Inversa</p>
         </td>
         <td>
             <p>Exibir a folha esquerda</p>
             <p>Exibir a folha direita</p>
             <p>Exibir a raiz</p>
         </td>
         <td rowspan="3">Pós-Ordem</td>
     </tr>
 </tbody>
</table>
    
![image](https://github.com/breno404/grafos/assets/48841329/a1b72a9b-f3d8-4f17-afc9-b57e8fe6a71f)

Infixa:

(3 * a) + (b + 5) - (4 / a)

Prefixa:

\+ (* 3 a) (- (+ b 5) (/ 4 a))

Pósfixa:

(3 a *) ((b 5 +) (4 a /) -) +
