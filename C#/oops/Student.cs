//static ,const,readonly

using System;

namespace OopsDemo
{
    public class Student{

    public int sid;
    public string sname;

    public static string collegename = "IIT Maderas";
        public const string course = "B.E";
        public readonly int number;

    public Student(int id, string name,int num)
    {
        this.sid = id;
        this.sname = name;
            number = num;


    }

}


}

