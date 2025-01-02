using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class FruitArrayTask3
    {
        public void fruitArray(string[] fruits)
        {

            //Console.Write("enter option"+" ");
            //int enteredOption = int.Parse(Console.ReadLine());

            while (true)
            {
                string opt = TaskMenu();

                if (opt.Equals("1"))
                    TaskDisplay(fruits);
                else if (opt.Equals("2"))
                    fruits = FindReplaceFruit(fruits);
                else
                {
                    Console.WriteLine("\nPlease select 1 or 2");

                }

            }
        }
        public string[] FindReplaceFruit(string[] fruits)
        {
            string givenFruit;
            bool isAvailable = false;
            int index = -1;

            Console.Write("\nenter  Fruit for search ");
            givenFruit = Console.ReadLine();

            foreach (string frt in fruits)
            {
                index++;

                if (givenFruit.Equals(frt, StringComparison.OrdinalIgnoreCase))
                {
                    Console.WriteLine($"\nThe {givenFruit} is found at index {index}");
                    isAvailable = true;
                    break;

                }
            }
            if (!isAvailable)
            {
                Console.WriteLine($"entered fruit {givenFruit} is not in the array");
                Console.Write("\nDo you want to add fruit press y or don't add press n)");
                string opt = Console.ReadLine();
                if (opt[0].ToString().Equals("y", StringComparison.OrdinalIgnoreCase))
                {
                    Array.Resize(ref fruits, fruits.Length + 1);
                    fruits[fruits.Length - 1] = ToTitleCase(givenFruit);
                    Console.WriteLine($"{givenFruit} is added to the array");
                }

            }

            return fruits;
        }
        public string TaskMenu()
        {
            Console.WriteLine("\n\nOperation\n1.Display Fruits\n2.Find Fruit");
            Console.Write("\nWhat do you want me to do  ");
            return Console.ReadLine();
        }

        public void TaskDisplay(string[] array)
        {
            Console.Write("\nAvailable Fruits ");
            foreach (string fruit in array)
            {
                Console.Write($" \"{fruit}\"");
            };
            Console.WriteLine("");
        }



        private string ToTitleCase(string value)
        {
            return value[0].ToString().ToUpper() + value.Substring(1).ToLower();
        }

    }
}
