//using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;
using System.Security.Cryptography.X509Certificates;

namespace StudentApp
{
    public class ArrayFunctions
    {
        public void Arrayfn()
        {

            int[] numbers = { 10, 20, 30, 40, 50 };
            Console.WriteLine("enter the element to be searched");

            int givenNum = int.Parse(Console.ReadLine());

            //    bool isavailable = false;
            //if (!isavailable)
            //{

            //    for (int i = 0; i < numbers.Length; i++)
            //    {
            //        if (numbers[i] == givenNum)
            //        {
            //            Console.WriteLine("element exist");
            //            isavailable = true;
            //            break;
            //        }


            //    }

            //}

            //if(!isavailable)
            //    Console.WriteLine("element not exist");

            if (Array.IndexOf(numbers, givenNum) == -1)
            {
                Console.WriteLine("element not exist");
            }
            else
            {
                Console.WriteLine("Element exist");
                Console.WriteLine("element fount at : " + Array.IndexOf(numbers, givenNum));
            }

        }
            public void fruitArray()
        {
            string[] fruits = { "Apple", "Orange", "Mango", "Cherry" };
            Console.WriteLine("enter the element to be searched");

            string givenFrt = Console.ReadLine();

            //string s = givenFrt.ToUpper().Substring(1).ToLower();
            bool isavailable = false;
            if (!isavailable)
            {
                for (int i = 0; i < fruits.Length; i++)
                {
                    if (givenFrt.Equals(fruits[i], StringComparison.OrdinalIgnoreCase))
                    {
                        Console.WriteLine("element exist");
                        isavailable = true;
                        break;
                    }

                }
            }
            if(!isavailable)
            {
                Console.WriteLine("element not exist");

            }



        }


        //int[] newnumbers = new int[5];
        //Console.WriteLine(Array.IndexOf(numbers, 20));



    }
}
