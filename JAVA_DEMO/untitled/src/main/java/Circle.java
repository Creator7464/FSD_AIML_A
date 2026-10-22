public class Circle {
    protected float radius;
    private float area;
    final float pi = 3.14f;
    Circle(){
        radius = 0.0f;
    }
    Circle(float r)
    {
        radius = r;
    }

    void display(){
        System.out.println("Radius: "+radius);
        System.out.println("Area: "+area);
    }

    void calcarea(){
        area = pi*radius*radius;
    }
}
