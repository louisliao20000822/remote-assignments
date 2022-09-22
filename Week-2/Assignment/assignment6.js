function delayedResultPromise(n1, n2, delayTime) {
    // your code here
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(n1+n2);
        }, delayTime)
    });
    }
    delayedResultPromise(4, 5, 3000).then(console.log);
    // 9 (4+5) will be shown in the console after 3 seconds
    
    async function main() {
        // your code here, you should call delayedResultPromise here andget the result using async/await.
        const result = await delayedResultPromise(4, 5, 5000).then(console.log);;
        return result;
    }
    main(); // result will be shown in the console after <delayTime>seconds