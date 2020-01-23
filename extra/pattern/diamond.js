let rows = Number(process.argv[2]);
function diamondTraingle(rows)
{
    string = "";
    for(i=1; i<=rows;i++)
    {
        for(space=rows-i; space>0; space--)
        {
            string = string + " "
        }
        for(star = 1; star<=i; star++)
        {
          string=string + "* " 
        }
        string+= "\n"
        
    }
    for(i=1; i<=rows;i++)
    {
        for(space = 1; space <= i; space++)
        {
          string=string + " "
        }
        for(star = rows-i; star>0; star--)
        {
            string=string + "* "  
        }
        string+= "\n"
        
    }

console.log(string)
}
diamondTraingle(rows)