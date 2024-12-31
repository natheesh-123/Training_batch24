using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal interface IContact
    {
        public string mobile {  get; set; }
        public string email { get; set; }

        public string showContact();
       

     

    }
}
