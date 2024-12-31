using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    class StringTasksF
    {

        public void fruitsadding()
        {

            string[] fruits = { "apple", "mango", "orange", "lemon" };

           Console.WriteLine("enter new fruits if already there it will be repalced.");
            string givenfruit = Console.ReadLine();
            bool isavailable = false;
            for (int i = 0; i < fruits.Length; i++) {
                if (fruits[i].Equals(givenfruit, StringComparison.OrdinalIgnoreCase))
                {
                    Console.WriteLine("it already exist enter a new one to be replace");
                    string newtoreplace=Console.ReadLine();
                    fruits[i] = newtoreplace;
                    isavailable = true;
                    break;
                }


            }
           
               if(isavailable==false) Console.WriteLine("you entered fruits is not there ");
               
           


            Console.WriteLine("after receiving user input the  updated array array");

            foreach (string s1 in fruits)
                Console.WriteLine(s1);
           


        }
    }
}
