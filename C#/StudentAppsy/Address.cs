using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal interface Address
    {

        public string city { get; set; }
        public string state { get; set; }
        public string zipcode {  get; set; }

        public string getAddress();
    }
}
