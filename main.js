/**
 * Created by cks on 4/22/15.
 */

//$("input[name='add_pair']").click( function(){
//    //console.log("Clicked");
//    //createNewKeyValueLayout();
//    //$(this).remove();
//});

function getResults(){
    constructUrl();
}

function constructUrl(){

    var url = "http://";
    var ip  = $("ip_address").val();
    if(ip=="")
        return false;

    url = url+ip;

    $("input[type='checkbox']").each(function(){
        if($(this).context.checked){

        }
    });
    return url;
}


function createNewKeyValueLayout(){
    console.log("Clicked");
    var root = document.getElementById("selection_area");
    $(".add_pair").remove();
    var table = document.createElement("table");
    table.setAttribute("width","350");

    var tr1 = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.setAttribute("width","120");
    td1.setAttribute("style","padding: 4px;");

    var input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("style","width: 120px;padding: 4px;font-size: 18px;");
    input1.setAttribute("placeholder","Key");

    td1.appendChild(input1);

    var td2 = document.createElement("td");
    td2.setAttribute("width","120");
    td2.setAttribute("style","padding: 4px;");

    var input2 = document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("style","width: 120px;padding: 4px;font-size: 18px;");
    input2.setAttribute("placeholder","Value");

    td2.appendChild(input2);

    var td3 = document.createElement("td");
    td3.setAttribute("width","40");
    td3.setAttribute("style","padding: 4px;");

    var input3 = document.createElement("input");
    input3.setAttribute("type","button");
    input3.setAttribute("class","add_pair");
    input3.setAttribute("value","Add");
    input3.setAttribute("onclick","createNewKeyValueLayout();");

    td3.appendChild(input3);

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);

    table.appendChild(tr1);

    root.appendChild(table);

}