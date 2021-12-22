class Rectangle {
    long;
    width;
    constructor(long,width) {
        this.long = long;
        this.width = width;
    }
    getLong(){
        return this.long;
    }
    getWidth(){
        return this.width;
    }
    getArea(){
        return this.long*this.width;
    }
    getPerimeter(){
        return (this.long + this.width)*2;
    }
}