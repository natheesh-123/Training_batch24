using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class DateTimeMethods
    {


        public void ShowTimeAndDate()
        {

            DateTime d = DateTime.Now;
            string d1=d.ToString("dd/MM/yyyy",CultureInfo.InvariantCulture);
            Console.WriteLine(d1);

            Console.WriteLine($"all : {d}");
            Console.WriteLine($"Day : {d.Day}");
            Console.WriteLine($"Month : {d.Month}");
            Console.WriteLine($"year : {d.Year}");
            Console.WriteLine($"hour : {d.Hour}");
            Console.WriteLine($"minitue : {d.Minute}");
            Console.WriteLine($"second {d.Second}");
            Console.WriteLine($"millisecond : {d.Millisecond}");


            Console.WriteLine($"ToShortDateString : {d.ToShortDateString()}");
            Console.WriteLine($"ToLongDateString : {d.ToLongDateString()}");
            Console.WriteLine($"ToShortTimeString : {d.ToShortTimeString()}");
            Console.WriteLine($"ToLongTimeString : {d.ToLongTimeString()}");


            Console.WriteLine($"ToLongTimeString : {d.DayOfWeek.ToString()}");
            Console.WriteLine($"ToLongTimeString : {d.DayOfYear}");

        }



    }
}
