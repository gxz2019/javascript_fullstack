 function Student(name,age,sex) {
      this.name = name;
      this.age = age;
      return {
        sex:sex
      }
    }
    Student.prototype.say = function() {
      console.log('111')
    }
    var stu = new Student('xiaoming',18,'male')
    console.log(stu)  //{sex: "male"}
    console.log(stu.name)  //undefined
    console.log(stu.say)