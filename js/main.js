/**
 * 使用二维数组快速建立表格
 * @param {HTMLTableElement} table 表格对象
 * @param {string[][]} data 数据
 * @param {String} title 表格标题
 * @returns 
 */
function setTable(table, data) {
    if (typeof data == 'object') {
        if (typeof data == 'object') {
            if (table.tagName == 'TABLE') {
                for (let row in data) {
                    var tr =  table.insertRow();
                    for (let cell in data[row]) {
                        var td = tr.insertCell();
                        td.innerHTML = data[row][cell];
                    }
                }
            } else {
                console.warn('table 不是表格');
            }
        } else {
            console.warn('data 类型不是对象');
        }
    } else {
        console.warn('data 类型不是对象');
    }
    return table;
}
setTable(document.getElementById('table1'), [
    ['HTML/XML', '8'],
    ['JavaScript（Box3）', '8'],
    ['JavaScript（DOM）', '8'],
    ['JavaScript（Node）', '6'],
    ['C++', '5'],
    ['SQLite', '4'],
    ['Python', '3'],
]);
setTable(document.getElementById('table2'), [
    ['建筑', '8'],
    ['代码', '8'],
    ['模型', '4'],
    ['音乐', '2'],
]);