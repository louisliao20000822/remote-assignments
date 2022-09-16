    function countAandB(input) {
    // your code here
        let counter = 0;
        for(let i =0 ; i<input.length ; i++){
            if(input[i] == 'a'||input[i] == 'b')
                counter ++;
        }
        return counter;
    }
    function toNumber(input) {
    // your code here
        let ans = [];
        for(let i=0;i<input.length;i++){
            switch(input[i]){
                case 'a':
                    ans.push("1");
                    break;
                case 'b':
                    ans.push("2");
                    break;
                case 'c':
                    ans.push("3");
                    break;
                case 'd':
                    ans.push("4");
                    break;
                case 'e':
                    ans.push("5");
                    break;                               
            }
        }    
        return ans;    
    }
    let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
    console.log(countAandB(input1)); // should print 4 (3 ‘a’ lettersand 1 ‘b’ letter)

    console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

    let input2 = ['e', 'd', 'c', 'd', 'e'];

    console.log(countAandB(input2)); // should print 0

    console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
    