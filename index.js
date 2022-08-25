let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

        //   "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

        //   ['JOHN', 'BABA', 'YAGA', 'WICK']
        //   "          

let upperName=studentRecords.map(records => records.name.toUpperCase())
console.log(upperName); 



// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"



let maxMarks=studentRecords.filter(a =>a.marks>50)
console.log(maxMarks);


// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let maxMarks2=studentRecords.filter(b=> b.marks>50 && b.id > 120)
{
    console.log(maxMarks2);
}


// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.




let totalMarks=studentRecords.reduce((acc,curr) => 
{
    return acc + curr.marks;

},0)

console.log(`The total marks is = ${totalMarks}`);



// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

const aboveFifty=studentRecords.filter(studName=> 
    {
        if(studName.marks > 50)
        {
            console.log(`The Name is = ${studName.name}`)
        }
    }
    )
    

    // Question 6: This time we are required to print the sum of marks of the students with id > 120.

    var sum=0
    const total = studentRecords.filter(total1 => 
        {
            
            if(total1.id > 120)
            {
                sum=sum + total1.marks
            }           
        }
        )
        console.log(`Sum is = ${sum}`);



        // Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.


        var sum1=0;
        const sumOfMarks=studentRecords.map(check => 
            {
             if(check.marks < 50)
             {
                check.marks+=15

                if(check.marks> 50)
            {
                sum1+=check.marks
            }
             }   
            
            })

            console.log(`sum is = ${sum1}`);



            // Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

            studentData=new Array();
            const obj1 = {name:"rahul", class: "10th", rollNo:1,};
            const obj2 = {name:"vikas", class: "11th", rollNo:1,};
            const obj3 = {name:"krishna", class: "11th", rollNo:1,};
            const obj4 = {name:"mukul", class: "12th", rollNo:1,};
            const obj5 = {name:"abhay", class: "11th", rollNo:1,};
            const obj6 = {name:"prathmesh", class: "12th", rollNo:1,};

            studentData=[{obj1,obj2,obj3,obj4,obj5,obj6}]

            // studentData=[{...obj1, ...obj2, ...obj3, ...obj4, ...obj5, ...obj6}]
            console.log(studentData);






            