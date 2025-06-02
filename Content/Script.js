function NumbersOnly() {
    try {
        var argv = NumbersOnly.arguments;
        var argc = argv.length;
        var decilen = 0;
        var textBox = document.getElementById(argv[0]).value;
        var charCode = (event.which) ? event.which : event.keyCode;
        var temp = new Array();
        temp = textBox.split('.');
        if (temp[1] != null)
            decilen = temp[1].length;
        if (argc == 1) {
            if ((charCode >= 48 && charCode <= 57 && !event.shiftKey) || charCode == 8 || charCode == 9 || (charCode == 110 && temp.length < 2) || (charCode == 190 && temp.length < 2) || (charCode >= 96 && charCode <= 105) || (charCode >= 37 && charCode <= 40) || charCode == 46) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (argc == 2) {
         if (charCode == 13)
         {
             document.getElementById('ctl00_MainContent_btnSearch').click();
         }
            if ((charCode >= 48 && charCode <= 57 && decilen < argv[1] && !event.shiftKey) || charCode == 8 || charCode == 9 || (charCode == 110 && temp.length < 2)  || (charCode >= 96 && charCode <= 105 && decilen < argv[1]) || (charCode >= 37 && charCode <= 40) || charCode == 46) {
                return true;
            }
            else {
                return false;
            }

        }
    }
    catch (e) {
        return true;
    }

}



function fn_validateNumeric(thi, dec) {
    if (((event.keyCode < 48) || (event.keyCode > 57)) && (event.keyCode != 46))
        event.returnValue = false;
    if (dec == "n" && event.keyCode == 46) {
        event.returnValue = false;
    }
    else {
        if (event.keyCode == 46 && instr(thi.value, ".") >= 0)
            event.returnValue = false;
    }

}

function setfocus()
{
    if (event.keyCode == 13) {
        document.getElementById('ctl00_MainContent_btnSearch').click();
        return false;
    }
}