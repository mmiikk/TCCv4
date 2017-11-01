$(document).ready(function(){

    findWidestElementInTable("ElementsTable", "TableCellName");

    jQuery.showOnlyFirstNColumns(2,"ElementsTable");
//Elements table width
resizeTableCells("ElementsTable");

    globalButtons();
    

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
    visibleColumnsCount = 0;
    $('#' + ID + " .TableCellHeader").each(function(){
        if($(this).hasClass("hide"))
            visibleColumnsCount = visibleColumnsCount + 1;
    });
      
    columnWidth = 0;
    for(var i=1; i<=visibleColumnsCount;i++)
    {
        $('#' + ID + " .col"+ i).each(function(){
            if($(this).outerWidth(true)>columnWidth)
                columnWidth = $(this).outerWidth(true);
        });
        $('#' + ID + " .col"+ i).each(function(){
            $(this).outerWidth(columnWidth);
        });
        columnWidth = 0;
    }

}

function findWidestElementInTable(parentID, columnClass){

    var max = 0;
    $('#' + parentID + " ." + columnClass).each(function(){
        console.log( $(this).width());

    });

}