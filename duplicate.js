var name=[1,2,3,4,5,6,7,8,9,56,2,3];
var uniqueName=[];

for(i=0; i< name.length; i++){
    var element=name[i];
    var index= uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }

}
console.log(uniqueName);