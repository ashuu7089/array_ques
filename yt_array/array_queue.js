let queue = []
let currentSize = queue.length;
let maxSize = 5

function enqueue(newVal) {
    queue[currentSize] = newVal;
    currentSize++;
}

function display() {
    console.log(queue);
}

function dequeue() {
    if (currentSize > 0) {
        for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        }
        currentSize--;
        queue.length = currentSize
    } else {
        console.log("queue is already empty")
    }
}

function font(){
    if(currentSize > 0){
        console.log(queue[0]);
    } else {
        console.log("queue is already empty")
    }
}

function rear(){
    if(currentSize > 0){
        console.log(queue[currentSize-1]);
    } else {
        console.log("queue is already empty")
    }
}


enqueue(10)
enqueue(20)
enqueue(30)

dequeue()

 font()
rear()

display()
