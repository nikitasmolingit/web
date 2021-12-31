function loadJSON(data) {
    let randomFor;
    let randomTo;
    if (sessionStorage.getItem('rand') == null) {
        sessionStorage.setItem('rand', JSON.stringify(0));
        randomFor = 0;
        randomTo = 100;
        if (randomFor > data.length) {
            randomFor = data.length;
        }
        if (randomTo > data.length || randomTo < 0) {
            randomTo = data.length;
        }
    }
    else {
        randomFor = JSON.parse(sessionStorage.getItem('rand'));
        randomFor += 100;
        randomTo = randomFor + 100;
        sessionStorage.setItem('rand', JSON.stringify(randomFor));
        if (randomFor + 1 > data.length) {
            randomFor = data.length;
            sessionStorage.removeItem('rand');
        }
        if (randomTo + 1 > data.length || randomTo < 0) {
            randomTo = data.length;
            sessionStorage.removeItem('rand');
        }
    }
    console.log(randomFor);
    console.log(randomTo);

    let comments_field = document.getElementById('comments_field');
    let comments_field_head = document.getElementById('comments_field_head');
    let out = '<th scope="col">postId</th>\n' +
        '            <th scope="col">id</th>\n' +
        '            <th scope="col">name</th>\n' +
        '            <th scope="col">email</th>\n' +
        '            <th scope="col">body</th>';
    comments_field_head.innerHTML = out;
    out = ''
    for (let item = randomFor; item < randomTo; item++) {
        out += '<tr>'
        out += '<td >' + data[item].postId + '</td>'
        out += '<td >' + data[item].id + '</td>'
        out += '<td >' + data[item].name + '</td>'
        out += '<td >' + data[item].email + '</td>'
        out += '<td >' + data[item].body + '</td>'
        comments_field.innerHTML = out;
    }
}

window.addEventListener('load', function (event) {
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => loadJSON(data))
            .catch((e) => {
                let out = '';
                out += '<p> ⚠ Что-то пошло не так</p>';
                $('#loadName').html(out)
            });
        document.getElementById('preloader').remove();
    }, 2000)
});