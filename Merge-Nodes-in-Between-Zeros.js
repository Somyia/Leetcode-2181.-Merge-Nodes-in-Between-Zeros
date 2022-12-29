/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    
    let list = new ListNode(0);
    let current = head;
    let ans= list;
    let sum=0;
    current = current.next;
    while(current){
        
        if(current.val==0){
            ans.next= new ListNode(sum);
            ans=ans.next;
            current = current.next;
            sum=0;
        }
        else{
            sum+=current.val;
            current =current.next;
        }
    }
    return list.next;

   
};
