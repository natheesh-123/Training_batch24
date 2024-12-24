using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_Oops
{
    internal class PhotoBook
    {
        private int _numPages;


        public PhotoBook()
        {
            this._numPages = 16;
        }

        public PhotoBook(int pages)
        {
            this._numPages = pages;
        }

        public int numPages {
            get { return _numPages; }
            set { this._numPages = value; }
           
        }

        public int GetNumberPages()
        {
            return _numPages;
        }

    }

    internal class BigPhotoBook : PhotoBook
    {
     

        public BigPhotoBook()
        {
            numPages = 64;
        }
    }
} 
