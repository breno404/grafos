# Sumário

- Grafo
  - O que é um Grafo
  - Grau de uma Vértice
  - Aplicações
- Terminologia de Grafos
  - Grafo completo
  - Grafo Direcionado ou Orientado
  - Laço
  - Multigrafo
  - Grafo Simples
  - Ordem de um grafo

# Grafo

## O que é um Grafo?

Um grafo é um par de conjuntos G = (V,A), em V é o conjunto de vértices e A é o conjunto de arestas.

V = {6A,6B,7A,7B,8A,8B}

Nota: Os vértices são os pontos

A = {
(6A,7A),(6A,7B),(6A,8B),
(6B,7A),(6B,8A),(6B,8B),
(7B,8A),(7B,8B),
(8A,8B)
}
OU

6A -> {(6A,7A),(6A,7B),(6A,8B)}<br>
6B -> {(6B,7A),(6B,8A),(6B,8B)}<br>
7A -> {(6A,7A),(6B,7A)}<br>
7B -> {(6A,7B),(7B,8A),(7B,8B)}<br>
8A -> {(6B,8A),(7B,8A),(8A,8B)}<br>
8B -> {(6A,8B),(6B,8B),(7B,8B)}<br>

Nota: As arestas são as ligações desses pontos

### Vértices adjacentes e arestas incidentes

São vértices ligadas por uma aresta.
A aresta que ligam as vértices são chamadas de arestas incidentes

Nesse caso 6A e 7A são adjacentes

### Vértices não adjacentes

São vértices não possuem uma aresta fazendo a ligação entre elas.

Nesse caso 6A e 6B são não adjacentes

#### Simbologias

Número de vértices = |V|
Número de arestas = |A|

Nesse caso esse grafo possui |V| = 6 e |A| = 9

## Grau de uma Vértice

É o número de vezes que as arestas incidem sobre o vértice, ou seja, o número de arestas que ligam esse vértice a outro.

### Simbologias

Grau de um Vértice = d(v)

Utilizando o grafo anterior:
d(6A) = 3
d(6B) = 3
d(7A) = 2
d(7B) = 3
d(8A) = 3
d(8B) = 4

## Aplicações

- Identificar o melhor caminho em uma empresa de logística ou o menor caminho.
- Identificar como um caminhão de lixo pode passar por um bairro sem repetir um quarteirão
- Encontrar o menor percurso em uma rede de computadores
- Encontrar dados em comum entre usuários de uma rede social

# Terminologia de Grafos

## Grafo completo

É quando todas as arestas e vértices se encontram conectadas, usando o exemplo anterior teriamos:
6A -> {(6A,6B),(6A,7A),(6A,7B),(6A,8A),(6A,8B)}
6B -> {(6A,6B),(6B,7A),(6B,7B),(6B,8A),(6B,8B)}
7A -> {(6A,7A),(6B,7A),(7A,7B),(7A,8A),(7A,8B)}
7B -> {(6A,7B),(6B,7B),(7A,7B),(7B,8A),(7B,8B)}
8A -> {(6A,8A),(6B,8A),(7A,8A),(7B,8A),(8A,8B)}
8B -> {(6A,8B),(6B,8B),(7A,8B),(7B,8B),(8A,8B)}

Denotado por Kn, onde n é o número de vértices

## Grafo Direcionado ou Orientado

É um grafo em que cada aresta tem uma orientação

Nesse caso a ordem das vértices que conectam a aresta importa.

então tendo um grafo onde as arestas estão definidas como:

A = {(1A,2B),(2B,1B),(1A,3A),(3A,1B)}

(1A,2B) é diferente de (2B,1A), sendo assim:
1A -> 2B existe
2B -> 1A não existe

Se na definição do meu grafo eu incluisse (2B,1A), nesse caso ele existiria:
A = {(1A,2B),(2B,1A),(2B,1B),(1A,3A),(3A,1B)}

1A <-> 2B, ou seja, tanto 1A -> 2B quanto 2B -> 1A existem

### Grau de um Vértice de um Grafo Direcionado

No caso dos Grafos Direcionais, cada vértice terá um grau de entrada e um grau de saída.

Usando o segundo caso anterior de um Grafo Direcionado, teriamos:

d in (1A) = 1 -> (2B,1A)
d out (1A) = 2 -> (1A,2B),(1A,3A)
d in (3A) = 1 -> (1A,3A)
d ou (3A) = 1 -> (3A,1B)

## Laço

É uma aresta que liga um vértice a ele mesmo.

A = {(1A,2B),(1A,1A),(2B,1B),(1A,3A),(3A,1B)}

1A - 1A

## Multigrafo

Grafo onde duas vértices podem estar ligadas por mais de uma aresta, nesse caso dizemos que estas são arestas paralelas ou arestas múltiplas.

## Grafo Simples

Grafos sem laços ou arestas múltiplas.

## Ordem de um grafo

É a quantidade de vértices que ele possui

## Sobre os Graus dos Vértices de um Grafo

### Vértice isolado

É o vértice de grau 0, ou seja, nenhuma aresta incidindo sobre ele

### Vértice pendente, folha ou terminal

É o vértice que possui apenas uma aresta incidindo sobre ele

### Menor/Maior Grau de um Vértice

Denotado por delta minúsculo é o menor Grau de um vértice, no caso será pego d(V) com a menor incidencia de arestas
Denotado por delta maiúsculo é o maior Grau de um vértice, no caso será pego d(V) com a maior incidencia de arestas

## Subgrafo

É um Grafo x contido em um Grafo y, ou seja, x pertence a y

C = contido em
V() = vértice
A() = aresta

x C y se V(x) C V(y) e A(x) C A(y)

## Passeio

É uma sequência de arestas do tipo (V0,V1),(V1,V2),(V2,V3),...(Vs-1,Vs).
V0 é o início do passeio e Vs é o fim.
s é o comprimento do passeio.

## Trilha

É uma sequência onde as arestas não se repetem, ou seja, todas as arestas do passeio são distintas.

### Fechado

É quando V0 da trilha é igual Vs, ou seja, é quando termina na mesma vértice em que começou.

## Caminho

É uma sequência onde as vértices não se repetem, ou seja, todas as vértices da trilha são distintas.

### Ciclo

É um caminho onde V0 = Vs

## Grafos Conexos/Desconexos

Um grafo é conexo se existe um caminho entre qualquer par de vértices.
Um grafo é desconexo quando não existe um caminho entre qualquer par de vértices.
