using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Task_Oops
{
    internal class PhotoBookTest
    {
        public static void Main(string[] args)
        {

            PhotoBook p1 = new PhotoBook();
            Console.WriteLine( p1.GetNumberPages() );

            PhotoBook p2 = new PhotoBook(24);
            Console.WriteLine(p2.GetNumberPages());

            //PhotoBook b1 = new BigPhotoBook();
            //Console.WriteLine(b1.GetNumberPages());


            BigPhotoBook b2 = new BigPhotoBook();
            Console.WriteLine(b2.GetNumberPages());



        }

    }
}
