// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");


using System;
using System.IO;
namespace FileAndLinq
{
    class Program
    {
        public static void Main(string[] args)
        {
            //FileInfo f1 = new FileInfo();
            //f1.checkFileInfo();

            FileInfo f;
            //f = new FileInfo("C:\\learning\\dotnet\\C#\\DotnetMaterial.pdf");

            f = new FileInfo(@"C:\learning\\dotnet\C#\DotnetMaterial.pdf");

            Console.WriteLine(f.Exists);

            if (f.Exists)
            {
                Console.WriteLine("Full name: " + f.FullName);
                Console.WriteLine("Name: " + f.Name);
                Console.WriteLine("Directory name: " + f.DirectoryName);
                Console.WriteLine("Extension: " + f.Extension);
                Console.WriteLine("Creation date and time: " + f.CreationTime);
                Console.WriteLine("Modification date and time: " +
               f.LastWriteTime);
                Console.WriteLine("Access date and time: " + f.LastAccessTime);
                Console.WriteLine("Length: " + f.Length + " bytes");
                f.CopyTo(@"C:\learning\dotnet\Materials.pdf");
            }

            Console.ReadKey();
        }
    }
}



        

    
