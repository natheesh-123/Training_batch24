using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dotnet
{
    class Subscriber
    {
        public void doWork()
        {
            Publisher p = new Publisher();
            p.myevent += delegate (int a, int b)
            {
                int result = a + b;
                Console.WriteLine("sum of" + a + "+" + b + "=" + result);
            };
            p.incrment();
        }
    }
}
