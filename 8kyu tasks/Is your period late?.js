function periodIsLate(last, today, cycleLength) {

    return (today - last) / 86400000 > cycleLength;


    /*  last = new Date (); 
    today = new Date ();
    if(today - last < cycleLength) {
  return 'It is not late'
  }
    else {
      return "It is late"; */

}