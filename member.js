function skillsMember() {
    var member = document.getElementById("member").value;
    var member = member.replace(/\s/g, '');
    var member = member.split(",");
    var member = member.filter(function (el) {
        return el != "";
    });
    var member = member.map(function (x) {
        return parseInt(x, 10);
    });
    return member;
}
