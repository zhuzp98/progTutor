import java.util.Scanner;

public class Ex04 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        final double PI = 3.1415;
        int radius;

        System.out.print("Enter a length as radius: ");
        radius = in.nextInt();
        double area = PI * radius * radius;
        double volume = (4.0 / 3.0) * PI * radius * radius * radius;
        System.out.println("A circle with radius " + radius + " has area of " + area);
        System.out.println("A sphere with radius " + radius + " has volume of " + volume);
    }
}
