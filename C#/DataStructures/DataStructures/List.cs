using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace DataStructures
{
    public class List {

        public void listFunctions()
        {
            List<int> numbers = new List<int> { 2, 40, 10, 15, 100, 74 };
            List<int> newNumbers = new List<int> { 5, 2, 3 };

            numbers.Add(11);
            numbers.Insert(2, 55);
            // numbers.InsertRange(3, newNumbers);
            //numbers.AddRange(newNumbers);
           // numbers.Sort();
            //numbers.Reverse();
            //numbers.Remove(40);
            //numbers.RemoveAt(2);

            for(int i = 0; i < numbers.Count; i++)
            {
                Console.WriteLine(numbers[i]);
            }

        }
    

    }
}
