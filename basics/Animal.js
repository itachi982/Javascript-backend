class Animal{

    constructor(name,Type,legcount,speaks){
        this.name=name;
        this.Type=Type;
        this.legcount=legcount;
        this.speaks=speaks;
    }

    speak(){
        console.log(`${this.name} makes a noise`);
    }

    sound(){
        console.log(`${this.speaks}`);
    }
}

 const cat=new Animal("pussy","cat","4","Meow");
 const dog=new Animal("bruno","dog","4","WOWOWOW");

 cat.speak();
 cat.sound();

 dog.speak();
 dog.sound();