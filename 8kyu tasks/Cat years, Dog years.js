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
/* const cat = 1; 
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