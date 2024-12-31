// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");

using System;
namespace DataStructures
{
    public class Program
    {
        public static void Main(string[] args)
        {
            /* string Tasks */

            StringFruitAddingTask1 st = new StringFruitAddingTask1();
            st.fruitsadding();

            StringCapitalizeWordsTask2 st2 = new StringCapitalizeWordsTask2();

            Console.WriteLine("enter a sting to captitalize");
            string input = Console.ReadLine();
            st2.capitalizeWords(input);

            Console.WriteLine("which char occurance yo want");
            char character = char.Parse(Console.ReadLine());
            st2.countCharacterOccurrences(input, character);



            //List li = new List();
            //li.listFunctions();

            //ListTask1 task1 = new ListTask1();
            //task1.fruitShop();

            // CommonService commonService = new CommonService();

        }

    }
}