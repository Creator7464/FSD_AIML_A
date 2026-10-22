public class Complex {
    int real;
    int imag;

    Complex() {
        real = 0;
        imag = 0;
    }

    Complex(int real, int imag) {
        this.real = real;
        this.imag = imag;
    }

    Complex(Complex c) {
        real = c.real;
        imag = c.imag;
    }

    void display() {
        System.out.print(real);
        if (imag < 0) System.out.println(imag + "i");
        else System.out.println("+" + imag + "i");
    }

    void addcomplex(Complex c) {
        real += c.real;
        imag += c.imag;
    }

    void mulcomplex(Complex c)
    {
        int r = real;
        int i = imag;
        real = r*c.real - i*c.imag;
        imag = r*c.imag + c.real*i;
    }
}
