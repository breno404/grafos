export type Node = {
    name: string
    value: number,
    parent: Node | null
    children?: (Node | null)[]
}

export interface InputNode extends Omit<Node, 'parent' | 'children'> {
}

export default class BinaryTree {
    #root!: Node
    #height!: number

    constructor(root: InputNode) {

        this.#root = { ...root, parent: null, children: [null, null] }
        this.#height = 0
    }

    append(node: InputNode | null): void {

        if (node) {
            let currentParent = this.#root

            for (let i = 0; i <= this.#height; i++) {

                let tmp = { ...node, parent: null, children: [null, null] }

                if (currentParent.value < node.value) {
                    if (currentParent.children && currentParent.children[0] == null) {
                        currentParent.children[0] = tmp
                        currentParent.children[0].parent = currentParent
                    } else if (currentParent.children) {
                        currentParent = currentParent.children[0] as Node
                    }
                }
                else {
                    if (currentParent.children && currentParent.children[1] == null) {
                        currentParent.children[1] = tmp
                        currentParent.children[1].parent = currentParent
                    } else if (currentParent.children) {
                        currentParent = currentParent.children[1] as Node
                    }
                }

            }

            this.#height++
        }
    }

    getByValue(value: number): Node | null {

        let node: Node | null = null
        let currentParent = this.#root
        for (let i = 0; i <= this.#height; i++) {
            if (currentParent.value == value) {
                node = currentParent
                break
            } else if (currentParent.value < value) {
                if (currentParent.children && currentParent.children[0] != null)
                    currentParent = currentParent.children[0]
                else break
            } else {
                if (currentParent.children && currentParent.children[1] != null)
                    currentParent = currentParent.children[1]
                else break
            }
        }

        return node
    }

    get height() { return this.#height }

    getAll(root: Partial<Node> = this.#root): Node[] {
        if (root != null) {
            let arr = [...this.getAll(root.children?.at(0) as Node), ...this.getAll(root.children?.at(1) as Node)]
            delete root.children
            return [root as Node].concat(arr)
        }
        return []
    }
}