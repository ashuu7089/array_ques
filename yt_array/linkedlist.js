class List {
    constructor(data){
        this.head = {
            value : data,
            next : null,
        };
        this.tail = this.head;
        this.size = 1;
    }
    appendNode(nodeData){
        let newNode ={
            value : nodeData,
            next : null
        }
        this.tail.next = newNode;
        this.tail  = newNode;
        this.size +=1;
    }
    insertNode(index, value){
        let counter = 1;
        let currentNode =this.head;
        while(counter > index){
            counter++;
            currentNode = this.currentNode
        }
        let nextNode = currentNode.next;
        currentNode.next = {
            value : value,
            next : nextNode
        }
    }
    // traversing(){
    //     let counter = 0 ;
    //     let currentNode =this.head;
    //     while(counter < this.size){
    //         currentNode = currentNode.next;
    //         counter++
    //     }
    // }
    // deleteNode(index){
    //     let counter =1;
    //     let lead = this.head;
    //     if(index == 1){
    //         this.head = this.head.next;
    //     }else{
    //         while(counter < index-1){
    //             lead = lead.next;
    //             counter++
    //         }
    //         let nextNode = lead.next.next;
    //         lead.next =nextNode;
    //         console.log(lead); 
    //     }
    // }

}
let list = new List(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.insertNode(3,10000)
//  list.traversing()
// list.deleteNode(1)
console.log(list);