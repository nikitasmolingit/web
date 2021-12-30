let check_name = false;
let check_mail = false;
let check_browser = false;
let check_oc = false;
let check_comment = false;

function showAppointment() {
    let forms = JSON.parse(localStorage.getItem('from'));
    console.log(forms)
    let forms_field = document.getElementById('forms_field');
    let out = '';
    for (let item in forms) {
        out += '<tr>'
        if (check_name)
            out += '<td>' + forms[item].name + '</td>'
        if (check_mail)
            out += '<td>' + forms[item].mail + '</td>'
        if (check_browser)
            out += '<td >' + forms[item].browser + '</td>'
        if (check_oc)
            out += '<td>' + forms[item].oc + '</td>'
        if (check_comment)
            out += '<td style="width=10px;">' + forms[item].comment + '</td>'
        out += '</tr>'
        forms_field.innerHTML = out;
    }
}

document.getElementById("table_add").addEventListener('click', function (event) {
    event.preventDefault();
    if (document.getElementById('check_name').checked)
        check_name = true;
    if (document.getElementById('check_mail').checked)
        check_mail = true;
    if (document.getElementById('check_browser').checked)
        check_browser = true;
    if (document.getElementById('check_oc').checked)
        check_oc = true;
    if (document.getElementById('check_comment').checked)
        check_comment = true;
    let checkboxField = document.getElementById('delete');
    let columnsTable_field = document.getElementById('columnsTable_field');
    let out = ''
    if (check_name)
        out += '<th scope="col">Имя</th>'
    if (check_mail)
        out += '<th scope="col">Электронная почта</th>'
    if (check_browser)
        out += '<th scope="col">Выбранный браузер</th>'
    if (check_oc)
        out += '<th scope="col">Выбранная операционная система</th>'
    if (check_comment)
        out += '<th scope="col">Комментарий</th>'
    columnsTable_field.innerHTML = out;
    checkboxField.innerHTML = '';
    showAppointment();
});

document.getElementById("questionnaire").addEventListener('submit', function (event) {
    let browser_select;
    if(document.getElementById('IE').checked)
        browser_select = "Internet Explorer";
    else if(document.getElementById('opera').checked)
        browser_select = "Opera";
    else if(document.getElementById('firefox').checked)
        browser_select = "Firefox";
    else if(document.getElementById('chrome').checked)
        browser_select = "Google Chrome";
    else if(document.getElementById('edge').checked)
        browser_select = "Edge";
    let oc_select;
    if(document.getElementById('linux').checked)
        oc_select = "Linux";
    else if(document.getElementById('windows').checked)
        oc_select = "Windows";
    else if(document.getElementById('mac').checked)
        oc_select = "MacOS";
    let from = {
        name: document.getElementById('name').value,
        mail: document.getElementById('mail').value,
        browser: browser_select,
        oc: oc_select,
        comment: document.getElementById('comment').value,
    }
    let forms = [];
    if (localStorage.getItem("from") !== null) {
        forms = JSON.parse(localStorage.getItem('from'));
    }
    forms.push(from);
    localStorage.setItem('from', JSON.stringify(forms));
    showAppointment();
});