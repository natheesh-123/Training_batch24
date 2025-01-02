using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    class NumArrayTask1
    {
      
             public void ArrayFindNum()
        {
            int[] numArray1 = { 10, 20, 30, 40, 50, 60 };
            int number;

            Console.Write("Type Number To find : ");
            number = Convert.ToInt32(Console.ReadLine());

            int index = Array.IndexOf(numArray1, number);
            if (index == -1)
            {
                Console.WriteLine("Unable to Find the given Number");
            }
            else
            {
                Console.WriteLine("The number is Found at index " + index);
            }
        }

    }

}


