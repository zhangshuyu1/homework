var arr=[21,52,33,62,22,93,35,57,354,245,243,333];
arr.sort(function(a,b)
    {
        var a1=parseInt(a);
        var b1=parseInt(b);
        if(a1<b1)
        {
            return -1;
        }
        else
        {
            return 1;
        }
    }
)
document.write(arr);