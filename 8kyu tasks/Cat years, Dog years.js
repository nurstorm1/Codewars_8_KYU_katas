var humanYearsCatYearsDogYears = function(humanYears) {

    if (humanYears === 1) return [1, 15, 15];
    if (humanYears === 2) return [2, 24, 24];
    else {
        return [humanYears,
            24 + ((humanYears - 2) * 4),
            24 + ((humanYears - 2) * 5)
        ]
    }
}





// Your code here!
/* 

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

const cat = 1; 
      const dog = 1; 
      if(humanYears === 1) {
        cat * 15;
        dog * 15;
        return humanYears, cat, dog; 
      }
      else {
      if(humanYears === 2) {
        cat * 15 + 9;
        dog * 15 + 9;
        return humanYears, cat, dog; 
      }
        else {
          cat = 24 + ((humanYears - 2) * 4);
          dog = 24 + ((humanYears - 2) * 5); 
              return humanYears, cat, dog; 
    */