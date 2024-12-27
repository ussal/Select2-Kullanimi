
//Standart
$("#standartSelect").select2();

//Width Option
$("#widthOptionSelect").select2({width:"100%"});

//Placeholder
let placeholderSelectOption={
    placeholder: {
        id: '-1',
        text: 'Seçiniz'
    },
    width:'100%'
}
$("#placeholderSelect").select2(placeholderSelectOption);

//Disabled Option
$("#disabledOptionSelect").select2(placeholderSelectOption);

//Multiple
let multipleSelectOption={
    placeholder: {
        id: '-1',
        text: 'Seçiniz'
    },
    width:'100%'
}
$("#multipleSelect").select2(multipleSelectOption);
$("#getMultipleSelectValues").click(function(){ //Get Values Method
    alert("Values:" + $("#multipleSelect").val());
  });

  //Dynamic
  var selectData = [
    { id: 1, text: 'Seçenek 1' },
    { id: 2, text: 'Seçenek 2' },
    { id: 3, text: 'Seçenek 3', selected:true },
    { id: 4, text: 'Seçenek 4', disabled:true },
    { id: 5, text: 'Seçenek 5' }
];
let dynamicSelectOption={
    data:selectData,
    width:'100%'
}
$("#dynamicSelect").select2(dynamicSelectOption);


$("#styledSelect").select2({
    theme: "custom-theme",
    width:'100%'
});