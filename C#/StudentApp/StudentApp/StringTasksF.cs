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

        public void capitalizeWords(string input)
        {
            string[] words = input.Split(' ');
            for (int i = 0; i < words.Length; i++)
            {
                if (!string.IsNullOrEmpty(words[i]))
                {
                    words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1);
                }
            }
            Console.WriteLine("the capitalized fist char for each word :" + string.Join(" ", words));
        }

        public void countCharacterOccurrences(string input, char character)
        {
            int count = 0;
            foreach (char c in input)
            {
                if (c == character)
                {
                    count++;
                }
            }
            Console.WriteLine( "The occrance og given character is :" + count);
        }

    }
}
