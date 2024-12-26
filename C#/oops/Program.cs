// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");
 using System;
 
namespace OopsDemo
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            // Company c = new Company(1, "natheesh");
            //c.displayCompanyDetails();

            // Employee e = new Employee(123, "Changepond");
            // e.eid = 1;
            // e.fname = "parag";
            // e.yob = 1980;
            // e.salary = 100000;
            // Console.WriteLine(e.displayEmpDetails());

            /* Customer _c1=new SavingsAccount();
             _c1.TotalAmount="100000";
             Console.WriteLine(_c1.getTotalAmount());

             Customer _c2=new CurrentAccount(); 
             _c2.TotalAmount="150000";
             Console.WriteLine(_c2.getTotalAmount());  

             */

            Student s1 = new Student(1,"natheesh",12);
            Console.WriteLine(s1.sid +"    " +s1.sname +"    "+ Student.collegename);
            Console.WriteLine(Student.course + "    "+ s1.number);



            Console.ReadKey();

            

            
        }
    }
}

