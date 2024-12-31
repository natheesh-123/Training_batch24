using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    namespace Bank{
        partial class BankAccount
        {
            public long accno = 2345;
            public string accname = "natheesh";
            public long cbalance = 100000;

            public void deposit(long amount)
            {
                cbalance += amount;
            }

        }
    }
}
