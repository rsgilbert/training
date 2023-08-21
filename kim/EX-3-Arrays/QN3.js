//Write a program that removes/deletes all even integers from the array M = [10, 20, 30, 5, 6, 1]. 
//Print the updated array M.


function deleteEvenNumsArray() 
{
    let M = [10, 20, 30, 5, 6, 1];

    for (let i = M.length -1; i >= 0; i--) 
    {
        if (M[i] % 2 == 0) 
        {
            M.splice(i, 1);
        }
    }
    console.log('The updated array M after removing even elements is: ',M);
};
deleteEvenNumsArray();