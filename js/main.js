
$(document).ready(function(){
    var rowCount = 3; // default row count is 3
    var rowTotalArr;
    var colTotalArr;
    var result;
 
    //create table with rowCount
    var createTable = function(){
        
    $(".table").html(" ");
//  rowCount = document.querySelector("input[name='rowCount']").value;
    rowCount = $("input[name='rowCount']").val()
        
    $(".table").append("<table></table>");
        
    for (var i=0; i<rowCount; i++)
            {
                $("table").append("<tr class=row" + i +"></tr>")

            }
    for (var i=0; i<rowCount; i++)
            {

                $("tr").append("<td><input type='number' name='number' value=2 class=col" + i + "></td>")
            }
    
    }
    
    //check numbers
    var checkNumber = function(){
        result=true;
        rowTotalArr = [];
        colTotalArr = [];

    //storing each row
        for(var ii=0;ii<rowCount;ii++)
        {
            var rowTotal = 0;
            
            for (var i=0;i<rowCount;i++)
            {
                rowTotal += parseInt(document.querySelector("tr.row" +ii +" input.col" + i).value);
            }        
           
            rowTotalArr.push(rowTotal);
       }
    
    //storing each col
        for(var ii=0;ii<rowCount;ii++)
        {
            var colTotal = 0;
            
            for (var i=0;i<rowCount;i++)
                {
                    colTotal += parseInt(document.querySelector("tr.row" +i +" input.col" + ii).value);
                }  
            
            colTotalArr.push(colTotal);
        }
        
        
    //checking if sums are equal
        for (var i=0;i<rowCount-1;i++)
            {
                if(rowTotalArr[i] != rowTotalArr[i+1])
                {
                    result = false;
                }
            }
        
        
        alert(result);
            
            
    }
    
    
    
    
    
    
    $("#create-btn").on("click", createTable);
    $("#check-btn").on("click",checkNumber);

  
    

    
    
    
    
    
    
    
    
    
    
    
});