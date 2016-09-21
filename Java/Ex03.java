public class Ex03 {
    public static void main(String[] args) {
        final double PI = 3.1415;

        int radius = 5;

        double area = PI * radius * radius;
        double volume = (4.0 / 3.0) * PI * radius * radius *radius;
        System.out.println("A circle with radius " + radius + " has area of " + area);
        System.out.println("A sphere with radius " + radius + " has volume of" + volume);

        radius = 10;
        System.out.println("A circle with radius " + radius + " has area of " + area);
        System.out.println("A sphere with radius " + radius + " has volume of" + volume);
    }
}
