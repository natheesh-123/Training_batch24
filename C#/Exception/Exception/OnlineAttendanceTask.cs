//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;


//namespace Dotnet
//{
//    internal class OnlineAttendanceTask
//    {
 
      
//        public delegate void BannedUserAlert(string userName);
//        public static event BannedUserAlert OnBannedUserDetected;

//        static void Main(string[] args)
//        {
            
//            List<string> bannedUsers = new List<string> { "Jack", "Steven", "Mathew" };

//            /* Subscribe the event to handlers */
//            OnBannedUserDetected += FireAlarm;
//            OnBannedUserDetected += SendEmailToAdmin;

//            Console.WriteLine("Enter your name:");
//            string userName = Console.ReadLine();

           
//            if (bannedUsers.Contains(userName, StringComparer.OrdinalIgnoreCase))
//            {
//                // Raise the event for a banned user
//                OnBannedUserDetected?.Invoke(userName);
//            }
//            else
//            {
//                Console.WriteLine($"Welcome, {userName}!");
//            }
//        }

//        /* Event handler to simulate alarm */
//        static void FireAlarm(string userName)
//        {
//            Console.WriteLine($"ALERT! Banned user detected: {userName}. Triggering alarm...");
//        }

      
//        static void SendEmailToAdmin(string userName)
//        {
//            Console.WriteLine($"Sending email to admin: Banned user {userName} attempted to access the system.");
//        }
//    }

//}

