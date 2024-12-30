using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    namespace Bank
    {
        partial class BankAccount
        {
            public void withDraw(long amount)
            {
                cbalance -= amount;

            }
        }
    }
}
