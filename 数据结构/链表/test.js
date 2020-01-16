function ListNode(val) {
  this.val = val;
  this.next = null;
  return this
}

const n1 = new ListNode(1)
const n2 = new ListNode(1)
const n3 = new ListNode(2)
// const n4 = new ListNode(4)
// const n5 = new ListNode(5)
// const n6 = new ListNode(6)

n1.next = n2
n2.next = n3;
console.log(n1)