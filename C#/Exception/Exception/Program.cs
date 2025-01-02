// See https://aka.ms/new-console-template for more information
//using Dotnet;

//Console.WriteLine("Hello, World!");

using Dotnet;

namespace Dotnet
{

    public delegate void mydelegatetype(int a, int b);

   // public delegate void calc(int a1, int a2);
    public class Program
    {


        public static void Main(string[] args)
        {
            //calc d;
            //Calculator obj = new Calculator();
            //d = obj.Add;
            //Console.WriteLine(obj.Add);
            //d(20, 30);
            ///*sub*/
            //d = obj.Subtract;
            //d(30, 20);

            Subscriber s1 = new Subscriber();
             s1.doWork();

;
           


        }

    }
}