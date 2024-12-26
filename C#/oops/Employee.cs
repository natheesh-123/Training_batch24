
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OopsDemo
{
    class Employee : Company
    {
        private int _eid;
        private string _fname;
        private int _yob; // Writeonly
        private double _salary;
        private int _age; //Readonly

        public int eid
        {
            get { return _eid; }
            set { _eid = value; }

        }
        public string fname
        {
            get { return _fname; }
            set { _fname = value; }

        }
        public int yob
        { 
            set { _yob = value;

                if (_age < 18)
                {
                    Console.WriteLine("you are not allowed to be registered");
                  
                }
                else
                {
                    _age = 2024 - _yob;
                }

            }

        }

        public int age
        {
            get { return _age; }
        }


        public double salary
        {
            get { return _salary; }
            set { _salary = value; }

        }
        public Employee(int id, string name) : base(id, name)
        {
            
        }

        public string displayEmpDetails()
        {
            base.displayCompanyDetails();
            return _fname + " is having a age of " + _age + " with a salary of " + _salary;
        }


    }

}

