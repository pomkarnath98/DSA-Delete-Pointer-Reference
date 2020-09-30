// If the last node is given to delete, then its not possible
//
// function Node(x,y){
//     this.value = x,
//     this,next = y
// }
const removeElement = (node) => {
    node.val = node.next.val;
    node.next = node.next.next
}

removeElement(5)