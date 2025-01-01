using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

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

        public void addEmployee()
        {
            // Console.WriteLine("which fruit to be addd :");
            //string givenFrt = Console.ReadLine();
            int getId=service.getInputInt("give emp id for check if this id exist or not ")

            string s1 = service.getInputString("which employee to be add");
            bool isAvailable = false;
          
            for (int i = 0; i <emp.Count; i++)
            {
                if (emp[i].empId==getId)
                {

                    Console.WriteLine("the empId is already present give unique id");
                    isAvailable = true;
                    break;
                }



            }
            if (!isAvailable)
            {
                emp.Add(new Employee(id, name, role));
                Console.WriteLine("the given element is added");
                // dispalyFruit();
            }

            //  fruitShop();

        }


    }

}
