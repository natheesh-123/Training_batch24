using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    class Student :IPerson,Address,IContact
    {
        //public int rollnum {  get; set; }
        //public string sname {  get; set; }

        //      public char gender { get; set; }

        //public static int id = 0;
        //public static int incrementId()
        //{
        //  return  ++id;
        //}

        //public void displayDetails(int rollnum=0,string sname="",char gender=' ')
        //{
        //    if (rollnum > 0)
        //    {
        //        Console.WriteLine("rollnum : " + rollnum);
        //    }

        //        if (sname != "")
        //        {
        //            Console.WriteLine("sname : " + sname);
        //        }

        //        if(gender != ' ')
        //    {
        //        Console.WriteLine("gender : " + gender);
        //    }
        //}

        //interface IPerson

        public int rollnum { get; set; }

        public string pname { get; set; }

        public char gender { get; set; }

        //interface Address

        public string state { get; set; }
        public string city { get; set; }
        public string zipcode { get; set; }

            //IContact
        public string mobile { get ; set ; }
        public string email { get; set ; }

        public static int id = 0;
        public static int incrementId()
        {
            return ++id;
        }

        public void showDetails()
        {
            if (rollnum > 0)
            {
                Console.WriteLine("rollnum : " + rollnum);
            }

            if (pname != "")
            {
                Console.WriteLine("pname : " + pname);
            }

            if (gender != ' ')
            {
                Console.WriteLine("gender : " + gender);
            }
        }


        //Address

        public string getAddress()
        {
            return $"state :{state} city:{city}  zipcode: {zipcode} ";

        }

        public string showContact()
        {
            return $"mobile :{mobile} email:{email} ";
        }
    }
}
