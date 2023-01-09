import java.util.Map;
import java.util.*;
import java.util.HashMap;

public class App {
    // public static void main(String[] args) throws Exception {
    //     System.out.println("Hello, World!");
    // }

    public static void main(String[] args) {
        int a = 2;
        int b = 5;
        int c = 100;
        String bmw = "bmw";


        List<String> cars = new ArrayList<String>();
        
        cars.add(bmw);

        //System.out.println(cars.get(0));   // list要用get，不能用[]
        System.out.println(cars);


        Map happy = new HashMap();
        happy.put("a", a);
        happy.put("b", b);
        happy.put("c", c);
        happy.put("c", c);
        happy.remove("c");

        System.out.println(happy);

        float d5 = (float) 1188/93;

        System.out.println(d5);

        //res.toArray(new String[res.size()])


        //List<String> cars = new ArrayList<String>();
        //List<Integer> cars = new ArrayList<Integer>();

        // char[] arr = s1.toCharArray();      // string to array of char

        // String [] strArr = Integer.toString(n).split("");   // integer to list of elements

        // int lInt = Integer.parseInt(strArr[l]);    // string to integer

        // int[] res = {res1, res2};
        // return res;

       // freq hashmap 
        // Map<Character, Integer> map = new HashMap<Character, Integer>();
        // String s = "aasjjikkk";
        // for (int i = 0; i < s.length(); i++) {
        //     char c = s.charAt(i);
        //     Integer val = map.get(c);
        //     if (val != null) {
        //         map.put(c, val + 1);
        //     }
        //     else {
        //     map.put(c, 1);
        // }
        
        // iter over keys
        // for (String name : gfg.keySet()) 
        //     System.out.println("key: " + name);
}





    }



}
