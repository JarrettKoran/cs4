var image = 'no image';

function successChange(data) {
  if (!data)
    alert("ERROR");
  else {
      alert ('item added');
    }
}
function readURL(e) {
    if (this.files && this.files[0]) {
      console.log($("#img").val());
      image = $("#imgInp").val();
      var reader = new FileReader();
      $(reader).load(function(e) { $('#img').attr('src', e.target.result); });
      reader.readAsDataURL(this.files[0]);

    }
}
$("#imgInp").change(readURL);



function addItemClick() {
      $.post("/item",{name:$('#itemName').val(),picture:image,
      price:$('#price').val(),category:$('#category').val(),description:$('#desc').val()},successChange);
      console.log($("#imgInp").val());  console.log($('#itemName').val());  console.log($('#price').val());
      console.log($('#category').val());  console.log($('#desc').val());
  }



  $('#add').click(addItemClick);


  // function addItemClick() {
//   var image = $("#img")[0].files[0];
//       var formdata = new FormData();
//       formdata.append('image', image);
//       $.ajax({
//           url: '/item/',
//           data: {name:$('#itemName').val(),picture:formdata,
//           price:$('#price').val(),category:$('#category').val(),
//           description:$('#desc').val()},
//           contentType: false,
//           processData: false,
//           type: 'POST',
//           'success':function(data){
//               alert(data);
//           }
//       });
// }