
using System;


namespace OopsDemo
{
    public abstract class Customer{
        public string Name {get;set;}
        public string Cid {get; set;}
        public string TotalAmount{get; set;}

        public abstract string getTotalAmount();

    }
        public class SavingsAccount : Customer{
            public override string getTotalAmount(){
                return "savings account Total amount:"+TotalAmount;

            }

        }

        public class CurrentAccount :Customer{
            public override string getTotalAmount(){
                return "current Account Total amount: "+TotalAmount;
            }
        }
    }
