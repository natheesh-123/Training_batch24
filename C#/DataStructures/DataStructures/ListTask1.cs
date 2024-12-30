using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace DataStructures
{
    public class ListTask1
    {
        CommonService cs1 = new CommonService();

        List<string> fruits = new List<string>() { "apple", "mango", "orange", "cherry" };

      
        public void fruitShop()
        {
            //Console.WriteLine("Menu");
            //Console.WriteLine("1.Display fruit \n 2.Add Fruit \n 3.update Fruit \n 4.Delete Fruit");
           
            //cs1.menu();
          
            while (true)
            {
                cs1.menu();
                Console.WriteLine("  ");
                Console.WriteLine("what menu you want :");
                int input = int.Parse(Console.ReadLine());
                // int totMenu = 4;

                // if (totMenu <= 4)

                switch (input)
                {
                    case 1:
                        dispalyFruit();
                        break;
                    case 2:
                        addFruit();
                        break;
                    case 3:
                        updateFruit();
                        break;

                    case 4:
                        deleteFruit();
                        break;

                    case 5:
                        goto quit;
                       

                    default:
                        Console.WriteLine("enter valid menu");
                        break;

                }


                        //else
                        //{
                        //    Console.WriteLine("enter valid menu");
                        //}

             }

        quit:;

        }

        public void addFruit()
        {
            Console.WriteLine("which fruit to be addd :");
           string givenFrt= Console.ReadLine();
            bool isAvailable = false;
            for (int i = 0; i < fruits.Count; i++) {
               if( fruits[i].Equals(givenFrt, StringComparison.OrdinalIgnoreCase))
                {

                    Console.WriteLine("the element is already present");
                    isAvailable= true;
                    break;
                }

               

               }
            if (!isAvailable)
            {
                fruits.Add(givenFrt);
                Console.WriteLine("the given element is added");
               // dispalyFruit();
            }

          //  fruitShop();

        }

        public void updateFruit()
        {
            Console.WriteLine("which fruit to be repalced :");

            string updateFrt = Console.ReadLine();

            bool isAvailable = false;
               for (int i = 0; i < fruits.Count; i++)
                {
                    if (fruits[i].Equals(updateFrt, StringComparison.OrdinalIgnoreCase))
                    {
                        //fruits.RemoveAt(i);
                        // fruits.Insert(i, fruits[i]);
                        Console.WriteLine(updateFrt + " is present enter which fruit yo want to repalce");
                       string updateFinal=Console.ReadLine();
                        fruits[i] =updateFinal;
                        Console.WriteLine("the element is updated");
                        isAvailable = true;
                        break;
                    }

                }
            
            if (isAvailable==false)
            {
                
                Console.WriteLine("entered element is not present \n enter a valid element ");
            }


         //   fruitShop();

        }


        public void deleteFruit()
        {
            Console.WriteLine("enter an element do you want to delete");
            string deleteFrt = Console.ReadLine();

            bool isAvailable = false;
    
                for (int i = 0; i < fruits.Count; i++)
                {
                    if (fruits[i].Equals(deleteFrt, StringComparison.OrdinalIgnoreCase))
                    {
                        fruits.RemoveAt(i);
                        Console.WriteLine("the element is deleted ");
                        isAvailable = true;
                        break;
                    }

                }
           
            if (isAvailable == false)
            {
                
                Console.WriteLine("entered element is not present \n enter a valid element ");
            }

            // char Q == Console.ReadLine();

           // fruitShop();

        }



        public void dispalyFruit()
        {
            foreach (string frt in fruits)
                Console.WriteLine(frt);

          //  fruitShop();

        }

        //public void exit()
        //{

        //    Console.WriteLine("do you want to exit press E (or) go to main menu press M");
        //    char c1 = char.Parse(Console.ReadLine());

        //    if (c1 == 'E' || c1 == 'M')
        //    {
        //        if (c1 == 'E')
        //        {
        //            exit;
        //        }
        //        else
        //        {
        //            fruitShop();
        //        }
        //    }
        //    else
        //    {
        //        Console.WriteLine("enter a valid key");
        //    }
        //}

    }
}
