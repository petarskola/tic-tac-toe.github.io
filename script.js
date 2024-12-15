var bp=0;
const matrix = [["","",""],["","",""],["","",""]];
function ne()
{
    if(document.activeElement.innerHTML=="")
    {
        if(bp%2==0)
        {
            document.activeElement.innerHTML="X";
            bp++;
            check();
        }
        else
        {
            document.activeElement.innerHTML="O";
            bp++;
            check();
        }
    }
}
function check()
{
    matrix[0][0]=document.getElementById("c1").innerHTML;
    matrix[0][1]=document.getElementById("c2").innerHTML;
    matrix[0][2]=document.getElementById("c3").innerHTML;
    matrix[1][0]=document.getElementById("c4").innerHTML;
    matrix[1][1]=document.getElementById("c5").innerHTML;
    matrix[1][2]=document.getElementById("c6").innerHTML;
    matrix[2][0]=document.getElementById("c7").innerHTML;
    matrix[2][1]=document.getElementById("c8").innerHTML;
    matrix[2][2]=document.getElementById("c9").innerHTML;
    
    

    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            if(matrix[0][0]!=0&&matrix[0][1]!=0&&matrix[0][2]!=0&&matrix[1][0]!=0&&matrix[1][1]!=0&&matrix[1][2]!=0&&matrix[2][0]!=0&&matrix[2][1]!=0&&matrix[2][2]!=0)
                document.getElementById("result").innerHTML="DRAW";

            if(matrix[i][j]!=""&&matrix[i][j]==matrix[i][j+1]&&matrix[i][j]==matrix[i][j+2])
            {
                document.getElementById("result").innerHTML=document.activeElement.innerHTML + " Winner";
                stop();
                if(i==0)
                {
                    document.getElementById("winV").style.top="17%";
                    document.getElementById("winV").style.display="block";
                }
                if(i==1)
                {
                    document.getElementById("winV").style.display="block";
                }
                if(i==2)
                {
                    document.getElementById("winV").style.top="81%";
                    document.getElementById("winV").style.display="block";
                }
            }
            if(matrix[i][j]!=""&&matrix[i][j]==matrix[i+1][j]&&matrix[i][j]==matrix[i+2][j])
            {
                document.getElementById("result").innerHTML=document.activeElement.innerHTML + " Winner";
                stop();
                if(j==0)
                {   
                    document.getElementById("winH").style.right="unset";
                    document.getElementById("winH").style.left="17.5%";
                    document.getElementById("winH").style.display="block";
                }
                if(j==1)
                {
                    document.getElementById("winH").style.display="block";
                }
                if(j==2)
                {
                    document.getElementById("winH").style.right="unset";
                    document.getElementById("winH").style.left="81%";
                    document.getElementById("winH").style.display="block";
                }
            }
            if(matrix[i][i]!=""&&matrix[i][i]==matrix[i+1][i+1]&&matrix[i][i]==matrix[i+2][i+2])
            {
                document.getElementById("result").innerHTML=document.activeElement.innerHTML + " Winner";
                stop();
                document.getElementById("winD1").style.display="block";
            }
            if(matrix[i][j]!=""&&matrix[i][j]==matrix[i+1][j-1]&&matrix[i][j]==matrix[i+2][j-2])
            {
                document.getElementById("result").innerHTML=document.activeElement.innerHTML + " Winner";
                stop();
                document.getElementById("winD2").style.display="block";
            }

            
        }
    }

    
}
function stop()
{
    for(var i=0;i<3;i++)
        for(var j=0;j<3;j++)
            if(matrix[i][j]=="")
                matrix[i][j]=" "; 
    
    document.getElementById("c1").innerHTML=matrix[0][0];
    document.getElementById("c2").innerHTML=matrix[0][1];
    document.getElementById("c3").innerHTML=matrix[0][2];
    document.getElementById("c4").innerHTML=matrix[1][0];
    document.getElementById("c5").innerHTML=matrix[1][1];
    document.getElementById("c6").innerHTML=matrix[1][2];
    document.getElementById("c7").innerHTML=matrix[2][0];
    document.getElementById("c8").innerHTML=matrix[2][1];
    document.getElementById("c9").innerHTML=matrix[2][2];
}