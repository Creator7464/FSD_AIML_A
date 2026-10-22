
import java.util.Scanner;

public class test {
    public static void main() {
//        int a,b;
//        Scanner sc;
//        sc = new Scanner(System.in);
//        System.out.print("Enter the first number: ");
//        a = sc.nextInt();
//        System.out.print("Enter the second number: ");
//        b = sc.nextInt();
//        System.out.println("Sum = "+Math.add(a,b));
//        System.out.println("Diff = "+Math.sub(a,b));
//        System.out.println("Mul ="+Math.mul(a,b));
          Complex c1,c2,c3;
          c1 = new Complex();
          c2 = new Complex(3,-2);
          c3 = new Complex(c2);
//          System.out.println(c1);
//          System.out.println(c2);
//          System.out.println(c3);
          c2.display();
        System.out.println("After addition");
        c2.addcomplex(c3);
        c2.display();
        System.out.println("After multiplication");
        c2.mulcomplex(c3);
        c2.display();


    }
}
