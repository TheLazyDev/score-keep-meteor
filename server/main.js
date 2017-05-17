import {Meteor} from 'meteor/meteor';


import {Players} from './../imports/api/players';

Meteor.startup(()=>{
    
    //   class Person {


    //       constructor (name = 'Anonymous', age = 0) {
    //          this.name = name;
    //          this.age = age;
    //       }
        
    //     getGreeting(){
    //         return `Hi I am ${this.name}.`;
    //     }

    //     getPersonDesc (){
    //         return `${this.name} is ${this.age} year(s) old.`;
    //     }
    //   }


    //  class Employee extends Person {
    //      constructor(name,age,title){

    //          super(name,age);

    //          this.title = title;
    //      }

    //      getGreeting (){
    //          if(this.title){
    //           return `Hi! I am ${this.name}. I work as a ${this.title}.`;
    //          } else {
    //               return super.getGreeting();
    //          }
    //      }
    //      hasJob (){
    //          return !!this.title;
    //      }


    //  }
    //  class Programmer extends Person {

    //        constructor(name,age,preferredLangauge = 'C'){



    //            super(name,age);

    //            this.preferredLangauge = preferredLangauge;


    //        }


    //        getGreeting(){
    //            return `Hi! I am ${this.name}. I am a ${this.preferredLangauge} developer`;

    //        }


    //  }
     
    //  let me = new Programmer();


    //  console.log(me.getGreeting());

    // let obj = {
    //     name: 'Bhavarsh',
    //     printName(){
    //         console.log(`Name : ${this.name}`);
    //     }
    // }


    //  setTimeout(obj.printName.bind(obj),1000);


    // obj.printName();

})




