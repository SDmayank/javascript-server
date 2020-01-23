let rows = Number(process.argv[2]);

function eq(rows)
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
    console.log(string)
    }
    eq(rows)