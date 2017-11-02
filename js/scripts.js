$(document).ready(function(){
console.log(($('#ElementsTable').css('padding-bottom')));
    $('#ElementsTable .TableContent').height($(window).height()- $('#ElementsTable .TableBody').position().top - $('#ElementsTable .TableHeader').height()-2*parseInt($('#ElementsTable').css('padding-bottom')));
    findWidestElementInTable("ElementsTable", "TableCellName");
    
   // 

//resizeTableCells("ElementsTable");
    globalButtons();
   
   
});

$(window).on('load', function() {
    //everything is loaded
    jQuery.showOnlyFirstNColumns(2,"ElementsTable");
    resizeTableCells("ElementsTable");
    console.log($("#sidebarContainer"));
    $("#sidebarContainer").resizable({
        handleSelector: ".splitter",
        resizeHeight: false
      });
   // $("#sidebarContainer").resizable({ handles: 'e' });
});

function globalButtons()
{
    //Elements Button Logic
    $('.elementsShowHide').click(function(){
        $('.elementsShowHide').each(function(){
            if($(this).hasClass('hide'))
                $(this).removeClass('hide');
            else
                $(this).addClass('hide');
        });
        if($('#elementsCloseBtn').hasClass('hide'))
            jQuery.showOnlyFirstNColumns(2,"ElementsTable");
        if($('#elementsOpenBtn').hasClass('hide'))
            jQuery.showOnlyFirstNColumns(4,"ElementsTable");
        resizeTableCells("ElementsTable");
    });
}


jQuery.showOnlyFirstNColumns = function showOnlyFirstNColumns(N,ID){
    var ColumnsNo;
    var ColumnCount;
    ColumnCount = 0;
    ColumnsNo = ($('#' + ID + " .TableCellHeader").length);
    $('#' + ID + " .TableCell").each(function(){
        $(this).removeClass("TableCellHeaderLast");
        $(this).removeClass("TableCellLast");
        if($(this).hasClass("TableCellHeader") && ColumnCount == N-1)
            $(this).addClass("TableCellHeaderLast");
        else
        {
            if($(this).hasClass("TableCell") && ColumnCount == N-1)
                $(this).addClass("TableCellLast"); 
        }
        if(ColumnCount>=N)
            $(this).addClass("hide");
        else
            $(this).removeClass("hide");
                    
        ColumnCount = ColumnCount + 1;
        if(ColumnCount >= ColumnsNo)
            ColumnCount = 0;
       
    });
}

function resizeTableCells(ID){
    var visibleColumnsCount;
    var columnWidth;
    var totalWidth;
    visibleColumnsCount = 0;
    $('#' + ID + " .TableCellHeader").each(function(){
        if(!$(this).hasClass("hide"))
            visibleColumnsCount = visibleColumnsCount + 1;
    });
      
    columnWidth = 0;
    totalWidth = 0;
    for(var i=1; i<=visibleColumnsCount;i++)
    {
        columnWidth = parseInt($('#' + ID + " .col"+ i + ".TableCellHeader").outerWidth(true));
        $('#' + ID + " .col"+ i).each(function(){
            if($(this).outerWidth(true)>columnWidth)
                columnWidth = parseInt($(this).outerWidth(true));
           // console.log($(this).html());
        });
        $('#' + ID + " .col"+ i).each(function(){
            $(this).outerWidth(columnWidth);
        });
        totalWidth = totalWidth + columnWidth;
        $('#' + ID + " .TableBody").outerWidth(totalWidth);
        console.log(totalWidth);
        columnWidth = 0;
    }
  
 
    $('#' + ID + " .TableBody").outerWidth($('#' + ID + " .TableBody").outerWidth(true) );
}

function findWidestElementInTable(parentID, columnClass){

    var max = 0;
    $('#' + parentID + " ." + columnClass).each(function(){
        console.log( $(this).width());

    });

}