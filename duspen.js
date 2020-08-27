class Duspen {
  constructor() {
    sideB = new Ground(950,580,100,20,"blue");
    sideL = new Ground(860,510,20,100,"blue");
    sideR = new Ground(1040,510,20,100,"blue");
  }
  display(){
  sideB.display(); 
  sideL.display();
  sideR.display();
  }
};
