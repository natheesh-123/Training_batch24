using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataStructures
{
    internal class StringCapitalizeWordsTask2
    {

        public void capitalizeWords(string input)
        {
            string[] words = input.Split(' ');
            for (int i = 0; i < words.Length; i++)
            {
                if (!string.IsNullOrEmpty(words[i]))
                {
                    words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1);
                }
            }
            Console.WriteLine("the capitalized fist char for each word :" + string.Join(" ", words));
        }

        public void countCharacterOccurrences(string input, char character)
        {
            int count = 0;
            foreach (char c in input)
            {
                if (c == character)
                {
                    count++;
                }
            }
            Console.WriteLine("The occrance of given character is :" + count);
        }
    }
}
