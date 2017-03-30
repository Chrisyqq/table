/**
 * Created by Chris on 17/3/30.
 */
var localData = [{name:'小明',height:'180',weight:'70'},{name:'小王',height:'178',weight:'66'},{name:'小王',height:'178',weight:'66'}];
var addPerson = document.getElementById('addPerson');
var changeTableAll = document.getElementById('changeTableAll');
var dataDelete = document.getElementById('dataDelete');
var dataLength;
dataLength = localData.length;
var tableAll = document.getElementById('tableAll');

(function () {
    for(var i=0;i<dataLength;i++){
        tableAll.innerHTML+= '<tr><th>' + localData[i].name + '</th><th>' + localData[i].height + 'cm' + '</th><th>' + localData[i].weight + 'kg' +'</th><th><button name="'+ i +'" id="dataDelete'+ i +'">delete</button></th></tr>';
    }
})();
//数据增加
changeTableAll.onclick=function () {
    var nameV = addPerson.children[0].value;
    var heightV = addPerson.children[1].value;
    var weightV = addPerson.children[2].value;
    tableAll.innerHTML+= '<tr><th>' + nameV + '</th><th>' + heightV + 'cm' +'</th><th>' + weightV + 'kg' +'</th><th><button name="'+ dataLength +'" id="dataDelete'+ dataLength  +'">delete</button></tr>';
    localData.push({name:nameV,height:heightV,weight:weightV});
    dataLength = localData.length;
    //针对每个Buttom增加click事件
    for(var i=0;i<localData.length;i++){
        document.getElementById('dataDelete'+i).addEventListener('click',function () {
            localData[this.getAttribute('name')]=null;//删除对应数据
            // console.log(this.getAttribute('id'),localData)
            this.parentNode.parentNode.remove();//删除当前数据
        });
    }
};
//针对每个Buttom增加click事件
(function () {
    for(var i=0;i<dataLength;i++){
        document.getElementById('dataDelete'+i).addEventListener('click',function () {
            localData[this.getAttribute('name')]=null;//删除对应数据
            // console.log(this.getAttribute('id'),localData)
            this.parentNode.parentNode.remove();//删除当前数据
        });
    }
})();
