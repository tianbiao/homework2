var id_number = 0;

$(document).ready(function(){
	BindToView(disks);
	id_number = disks[disks.length-1].number+1;
});

function BindToView(disks){
	$("#container").empty();
	var diskDivs = _.map(disks,function(disk){
	return diskDiv(disk);
	});
	_.each(diskDivs,function(div){
	$("#container").append(div);
	});
}

function diskDiv(disk){
return $("<div>")
.attr("class","disk1")
.append(diskTitle(disk.name))
.append(diskImg(disk.img))
.append(diskDesc(disk.desc))
//.append(diskRemove())
.append(diskButton1(disk.number))
;
}

function diskTitle(title){
return $("<h3>").html(title);
}

function diskImg(img){
return $("<img>").attr("src",img);
}

function diskDesc(desc){
return $("<p>").html(desc);
}

function diskButton1(number){
return $("<button>").attr("id",number).attr("onclick","rem(this.id)").html("删除");
}

function rem(id){
	var i=0;
	while(disks[i].number!=id)
	{
		i++;
	}
	disks.splice(i,1);
	BindToView(disks);
}

 
 
function add(){
 var newProduct ={
 name: $("#productName").val(),
 img:  $("#productImg").val(),
 desc: $("#productDesc").val(),
 number: id_number
 };
 id_number++;
 disks.push(newProduct);
 BindToView(disks);
 
 }
 
 function search(){
 var keyword=$("#search").val();
 var searchResult = _.filter(disks,function(disk){
  return disk.name.indexOf(keyword)!=-1;
  });
  console.log(searchResult[0]);
  BindToView(searchResult);
 
 }
 
 
 
 