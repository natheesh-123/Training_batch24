using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
     class StringFunctions
    {

        string fullname = "NatheEshkumar messi";
        string message = "good morning";
        string city="Dindigul";
        string city1 = "dindigul";

        public void showMethods()
        {
            Console.WriteLine("fulname" + fullname);
            Console.WriteLine(fullname.ToLower());
            Console.WriteLine(fullname.ToUpper());
            Console.WriteLine(fullname[0]);
            Console.WriteLine(fullname.Substring(1,3));
            Console.WriteLine(fullname.Remove(1, 3));
            Console.WriteLine(fullname.Remove(5));

            Console.WriteLine(fullname.StartsWith("NatheEshkumar"));
            Console.WriteLine(fullname.EndsWith("NatheEshkumar"));
            Console.WriteLine(fullname.Contains("e"));
            Console.WriteLine("equal method :" + city.Equals(city1,StringComparison.OrdinalIgnoreCase));
            Console.WriteLine("equal method without ignore :" + city.Equals(city1));


            Console.WriteLine(fullname.IndexOf("e")); 
            Console.WriteLine(fullname.LastIndexOf("e"));
            Console.WriteLine(fullname.Equals(message));
            //  Console.WriteLine(fullname);

            char[] s1 = city.ToCharArray();
            foreach (char c in s1)
                Console.WriteLine(c);

            string[] s2 = fullname.Split(" ");
            foreach (string c1 in s2)
                Console.WriteLine(c1);
            //string.Join(" ", s2);
            Console.WriteLine(string.Join(" ",s2));


            char[] s3 = city.ToCharArray();

            city = "";


            foreach(char c4 in s3)
            {
                city = c4 + city;
            }
            Console.WriteLine($"city {city}");


            Console.WriteLine("enter the words for Ttle case convertion");
            string name = Console.ReadLine();

            string[] Title = name.Split(" ");
            for(int i = 0; i < Title.Length; i++)
            {
               Title[i]=Title[i][0].ToString().ToUpper() + Title[i].Substring(1).ToLower();
            }


            Console.WriteLine($"Title: {String.Join(" ",Title)}");

            int[] array = { 4, 1, 9, 6, 10, -34, 43 };
            int min = int.MaxValue, max = int.MinValue;

            foreach (int i in array)
            {
                if (i < min) min = i;
                if (i > max) max = i;
            }

            Console.WriteLine("Without Math Function");
            Console.WriteLine($"Minimum = {min}\nMaximum = {max}");



            min = int.MaxValue;
            max = int.MinValue;

            foreach (int i in array)
            {
                min = Math.Min(min, i);
                max = Math.Max(max, i);
            }


            Console.WriteLine("With Math Function");
            Console.WriteLine($"Minimum = {min}\nMaximum = {max}");



        }

        public void reverse(string city)
        {
            char[] s3 = city.ToCharArray();
            for(int i = 0;i<s3.Length/2; i++)
            {
                char temp=s3[i];
     
                s3[i] = s3[s3.Length - 1-i];
                s3[s3.Length - 1-i] = temp;
            }

            foreach (char c2 in s3)
                Console.WriteLine(c2);
        }






    }
}
