using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataStructures
{
    public  class EmployeeListTask2
    {
        CommonService service = new CommonService();

        List<Employee> emp = new List<Employee>();


        public void EmployeeDetails()
        {
            int id = service.getInputInt("enter eid:");
            string name = service.getInputString("enter ename:");
            string role = service.getInputString("enter emprole:");

            emp.Add(new Employee(id, name,role));

            string[] menu = { "displayEmployee", "addEmployee", "updateEmployee", "deleteEmployee" };

            while (true)
            {
                //string s = "a";
                //Console.WriteLine("  ");
                //Console.WriteLine("what menu you want :");
                //int input = int.Parse(Console.ReadLine());

                Console.WriteLine("\n\n..........");

                Console.WriteLine("you can have");
                foreach (string m in menu ) {
                    Console.WriteLine(m);
                }
                Console.WriteLine("what menu you do :");
                string option =Console.ReadLine();
                switch (option)
                {
                    case "1":
                        displayEmployee();
                        break;
                    case "2":
                        addEmployee();

                        break;
                    case "3":
                        updateEmployee();
                        break;

                    case "4":
                        deleteEmployee();
                        break;

                    case "5":
                        goto quit;


                    default:
                        Console.WriteLine("enter valid menu");
                        break;

                }


            }

        quit:;

        }

        public void displayEmployee()
        {
            service.displayEmployeeList(emp);
        }


        public 
    }





    }
}
