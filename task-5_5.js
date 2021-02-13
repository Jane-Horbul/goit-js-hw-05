class Car {
    /*
     * Добавь статический метод `getSpecs(car)`, который принимает объект-машину как параметр и выводит в консоль значения свойств 
     *maxSpeed, speed, isOn, distance и price.
     */

    static getSpecs(car) {
    console.log(car);
    }

    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor({speed, price, maxSpeed, isOn, distance}) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;

        //console.log(maxSpeed, speed, isOn, distance, price);
    }
    
    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
  
    get price() {
      return this._price;
      }
    
    set price(value) {
        this._price = value;
      }

    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this.isOn = true;
        this.speed = 0;
    }
  
    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
  
    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
      const newSpeed = this.speed + value;
      if (newSpeed > this.maxSpeed) {
        this.speed = this.maxSpeed;
      }else{
      this.speed = newSpeed
      return this.speed;
    }
    }
  
    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
    const resultSpeed = this.speed - value;
    if (resultSpeed < 0) {
      this.speed = this.speed;
    }else{
    this.speed = resultSpeed;
    return this.speed;
    }
    }
  
    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */

    drive(hours) {
      if (this.distance === undefined) {
        this.distance =0;
      }
      if (this.isOn === false) return;
    
      this.distance += hours*this.speed;
      return this.distance; 
    }
  }

  //Car.getSpecs = function(car){
  //  console.log(car);
  //};

  console.dir(Car);

  const mustang = new Car({ maxSpeed: 200, price: 2000 });

  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000