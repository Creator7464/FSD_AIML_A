public class newcircle extends Circle{
    private float perimeter;
    final float pi = 3.14f;

    newcircle(){
        super();
    }
    newcircle(float r){
        super(r);
    }

    void display(){
        super.display();
        System.out.println("Perimenter: "+perimeter);
    }

    void calperimeter(){
        perimeter = 2*pi*radius;
    }

}
