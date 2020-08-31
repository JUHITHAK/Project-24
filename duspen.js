class Duspen {
  constructor() {
    sideB = new Ground(950,580,200,20,"blue");
    sideL = new Ground(860,525,20,100,"blue");
    sideR = new Ground(1040,525,20,100,"blue");
  }
  display(){
  sideB.display(); 
  sideL.display();
  sideR.display();
  }
};
