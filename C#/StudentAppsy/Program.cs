

using System;
using System.Formats.Asn1;

namespace StudentApp
{
    class Program
    {
        private static void Main(string[] args)
        {
            // Console.WriteLine("Student application management sysyem");


            //Student s1= new Student();
            //s1.rollnum = Student.incrementId();
            //s1.sname = "natheesh";
            //s1.gender = 'M';
            //Console.WriteLine(s1.rollnum + "  "+s1.sname +"   "+ s1.gender);

            // s1.displayDetails(sname:"ram",rollnum:s1.rollnum,gender:s1.gender);


            //Student s2 = new Student();
            //s2.rollnum = Student.incrementId();
            //s2.sname = "natheesh";
            //s2.gender = 'M';
            //Console.WriteLine(s2.rollnum + "  " + s2.sname + "   " + s2.gender);


            //interface

            // Student s1 = new Student();
            // s1.rollnum = Student.incrementId();
            // s1.pname = "natheesh";
            // s1.gender = 'M';

            // s1.city = "Dindigul";
            // s1.state = "Tamilnadu";
            // s1.zipcode = "624620";

            // s1.showDetails();

            //Console.WriteLine( s1.getAddress());
            // Console.WriteLine(s1.showContact());

            // Console.ReadKey();



            //BankAccount

            /*  StudentApp.Bank.BankAccount ba=new StudentApp.Bank.BankAccount();

              Console.WriteLine(ba.accno);
              Console.WriteLine(ba.accname);

              Console.WriteLine("current balance is :" + ba.cbalance);

              Console.WriteLine("Enter the amount to be deposit");

              long damount=long.Parse(Console.ReadLine());
              ba.deposit(damount);
              //Console.WriteLine("after deposit current balance is :" + ba.cbalance);
              Console.WriteLine("after deposit {0} current balance is  {1}",damount,ba.cbalance);


              Console.WriteLine("Enter the amount to be withdraw");
              long wamount = long.Parse(Console.ReadLine());
              ba.withDraw(wamount);

              // Console.WriteLine("after withdraw current balance is :" + ba.cbalance);
              Console.WriteLine("after deposit {0} current balance is  {1}", wamount, ba.cbalance); */

            //Console.WriteLine("enter your firstname");
            //string firstname = Console.ReadLine();
            //Console.WriteLine("enter your lastname");
            //string lastname = Console.ReadLine();

            //Console.WriteLine("enter your city");
            //string city= Console.ReadLine();

            //Console.WriteLine($"{firstname} {lastname} is comming from {city}");


            //Console.WriteLine($"name : {firstname} {lastname}");
            //Console.WriteLine($"city : {city}");


            //StringFunctions s1 = new StringFunctions();
            //s1.showMethods();
            //s1.reverse("Dindigul");

            //DateTimeMethods dt = new DateTimeMethods();
            //dt.ShowTimeAndDate();


            //StringTasksF st = new StringTasksF();
            //st.fruitsadding();

            //string input = Con
            //st.capitalizeFirstChar(input);



            //char character = char.Parse(Console.ReadLine());



            /*Arrays*/

            ArrayFunctions af = new ArrayFunctions();
            //af.Arrayfn();
            af.fruitArray();


        }


    }

}