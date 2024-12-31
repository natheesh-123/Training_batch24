using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataStructures
{
    public class CommonService
    {
        public void menu()
        {

            Console.WriteLine("Menu");
            Console.WriteLine("1.Display fruit \n 2.Add Fruit \n 3.update Fruit \n 4.Delete Fruit");
            




        }

        public int getInputInt(string message)
        {
            Console.Write(message +" ");
            return int.Parse(Console.ReadLine());
        }

        public string getInputString(string message)
        {

            Console.Write(message + " ");
           return Console.ReadLine();
        }
           

       public void displayEmployeeList(List<Employee> emp)
        {

            foreach (Employee employee in emp)
            {
                Console.WriteLine(employee.empId + " " + employee.empName + " " + employee.empRole);
            }
        }


    }

}
