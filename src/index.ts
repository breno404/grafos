import BinaryTree from './lib/tree/BinaryTree.ts'


const tree = new BinaryTree({ name: 'A', value: 50 })
tree.append({ name: 'B', value: 30 })
tree.append({ name: 'C', value: 2 })
tree.append({ name: 'D', value: 80 })
tree.append({ name: 'E', value: 75 })
tree.append({ name: 'F', value: 5 })
tree.append({ name: 'G', value: 1 })
const result = tree.getAll()

console.log(result)
