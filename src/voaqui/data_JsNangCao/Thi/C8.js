import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const C8 = () => {
    // const Person = function(name,age,color){
    //     this.name=name
    //     this.age=age
    //     this.color=color
    // }
    
    // Person.prototype.getColor =function(){            
    //     console.log(`Một người có tên ${this.name} có màu da ${this.color}`)
    // }



    class PersonES6 {
        constructor(name, age, color) {
            this.name = name;
            this.age = age;
            this.color = color;
        }
        setItem(){
            return `tên  ${this.name}, 
                    tuổi ${this.age},
                    màu ${this.color} `;
        }
       
    }
    const personShow = new PersonES6('qui', '22', 'xanh');
    console.log(personShow); 



    class Student extends PersonES6 {
        constructor(name, age, color, score){
            super(name, age, color );
            this.score = score;
        };
        getScore(){
            return `tên  ${this.name}, 
            tuổi ${this.age},
            màu ${this.color} 
            điểm ${this.score}`;
        };

    }
    const personShow2 = new Student('qui', '22', 'xanh', '8.5');
    console.log(personShow2); 

  return (
    <View>
      <Text>C8</Text>
    </View>
  )
}

export default C8

const styles = StyleSheet.create({})