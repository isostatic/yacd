var newLoad = 1;
var oldLoad = 1;

function refreshDiff() {
    console.log("Changing? " + oldLoad + "/" + newLoad);
    if (oldLoad + newLoad == 2) {
        console.log("Yes, Changing");
        WikEdDiffTool.diff();
        oldLoad = 0;
        newLoad = 0;
    }
}
function changeConf() {
    $.get($("#dropold").val(), function(d,s) {
        $('#old').val(d); 
        oldLoad = 1; 
        $.get($("#dropnew").val(), function(d,s) {
            $('#new').val(d); 
            newLoad = 1; 
            refreshDiff()
        });
    });
    $('#oldlink').text( $("#dropold option:selected").text());
    $('#oldlink').attr("href", $("#dropold").val());
    $('#newlink').text( $("#dropnew option:selected").text());
    $('#newlink').attr("href", $("#dropnew").val());
}
$(function(){

    $("#dropold").change(changeConf);
    $("#dropnew").change(changeConf);
    $("#gobut").change(changeConf);
    changeConf();
});
