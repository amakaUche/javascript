function myNumber(num) {
    var arr = [];

    for (var i = 1; i <= num; i++) {
        if(i%2 == 0 || i%3 ==0 || i%5 ==0) {
            if(i%2 == 0 && i%3 == 0 && i%5 ==0) {
            arr.push("yu-gi-oh");
        }
        if(i%2 == 0 && i%3 == 0) {
            arr.push("yu-gi");
        }
        if(i%2 == 0 && i%5 == 0) {
            arr.push("yu-oh");
        }
        if(i%3 == 0 && i%5 == 0) {
            arr.push("gi-oh");
        }
        if(i%2 == 0) {
            arr.push("yu");
        }
        if(i%3 ==0) {
            arr.push("gi");
        }
    if(i%5 ==0) {
        arr.push("oh");
        }
    }
    else {
        arr.push(i)
    }   
    }   
    return arr;

}    

