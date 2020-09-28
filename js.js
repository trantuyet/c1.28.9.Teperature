function Temperature(degree) {
    this.degree = degree;

    this.getDegree = function () {
        return degree ;
    }

    this.changeFahrenheit = function () {
        let fa = ( 1.8 *this.degree + 32 ) ;
        return fa ;
    }
    this.changeKelvin = function () {
        let Ke = this.degree + 273.15 ;
        return Ke ;
    }
}
let Tem1 = new Temperature(25);
let a = Tem1.getDegree() ;
alert(a+ " độ C = " + Tem1.changeFahrenheit() + " độ F");
alert(a+ " độ C = " + Tem1.changeKelvin()+ " độ K");

