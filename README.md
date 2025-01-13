# Select2 Kullanımı

Bu repo, [Select2](https://select2.org/) kütüphanesinin farklı kullanım örneklerini içermektedir. Select2, standart HTML `<select>` elementlerini daha kullanıcı dostu ve fonksiyonel hale getiren popüler bir jQuery eklentisidir.

## Proje Yapısı

- `index.html`: Select2 kullanımına dair örneklerin bulunduğu ana HTML dosyası.
- `js/site.js`: Select2 kütüphanesinin JavaScript ile yapılandırıldığı dosya.
- `css/site.css`: Select2 için özel olarak oluşturulmuş stil dosyası.
  
### Kütüphaneler
- `jquery/jquery.js`: Select2 kullanımı için jQuery gereklidir.
- `select2/select2.js`: Select2 kütüphanesinin javascript dosyası.
- `select2/select2.css`: Select2 kütüphanesinin stil dosyası.

## Kullanım Adımları

### 1. Gerekli Dosyaları Dahil Etme
Select2 kütüphanesini kullanabilmek için öncelikle gerekli CSS ve JS dosyalarını dahil etmelisiniz. Bu dosyalar, Select2'nin ve jQuery'nin düzgün çalışmasını sağlar.

#### HTML Dosyanızda Bu Satırlara İhtiyacınız Var:
```html
<link rel="stylesheet" href="select2/select2.min.css" />
<link rel="stylesheet" href="css/site.css" />
<script src="jquery/jquery.js"></script>
<script src="select2/select2.min.js"></script>
<script src="js/site.js"></script>
```

## 2. Select2 Kullanımı

Select2 kullanmak için aşağıdaki örnekleri inceleyebilirsiniz.

### 2.1. Var Olan Select'i Select2'ye Çevirmek

Bir `<select>` öğesini Select2 ile dönüştürmek için basit bir jQuery komutu yeterlidir:
```javascript
$("#standartSelect").select2();
```

```html
<select id="standartSelect">
  <option value="1">Seçenek 1</option>
  <option value="2">Seçenek 2</option>
  <option value="3">Seçenek 3</option>
  <option value="4">Seçenek 4</option>
  <option value="5">Seçenek 5</option>
</select>
```
## 2.2. Width Option Select

Select2'nin genişliğini ayarlamak için `width` parametresini kullanabilirsiniz.
```javascript
$("#widthOptionSelect").select2({ width: "100%" });

```
```html
<div style="width: 300px">
  <select id="widthOptionSelect">
    <option value="1">Seçenek 1</option>
    <option value="2">Seçenek 2</option>
    <option value="3">Seçenek 3</option>
    <option value="4">Seçenek 4</option>
    <option value="5">Seçenek 5</option>
  </select>
</div>

```
## 2.3. Placeholder Kullanımı
Bir Select2 öğesi için placeholder metni ayarlamak.
```javascript
let placeholderSelectOption = {
    placeholder: {
        id: '-1',
        text: 'Seçiniz'
    },
    width: '100%'
};
$("#placeholderSelect").select2(placeholderSelectOption);

```
```html
<div style="width: 300px">
  <select id="placeholderSelect">
    <option value="-1">Seçiniz</option>
    <option value="1">Seçenek 1</option>
    <option value="2">Seçenek 2</option>
    <option value="3">Seçenek 3</option>
    <option value="4">Seçenek 4</option>
    <option value="5">Seçenek 5</option>
  </select>
</div>

```

## 2.4. Disabled Seçenekler
Select2'de bir seçeneği devre dışı bırakmak için `disabled` özelliğini kullanabilirsiniz.
```html
<option value="2" disabled>Seçenek 2</option>

```
```html
<div style="width: 300px">
  <select id="disabledOptionSelect">
    <option value="-1">Seçiniz</option>
    <option value="1">Seçenek 1</option>
    <option value="2" disabled>Seçenek 2</option>
    <option value="3">Seçenek 3</option>
    <option value="4" disabled>Seçenek 4</option>
    <option value="5">Seçenek 5</option>
  </select>
</div>

```

## 2.5. Multiple Seçim
Birden fazla seçenek seçilmesine olanak tanımak için `multiple` parametresi kullanılabilir.
```javascript
$("#multipleSelect").select2(multipleSelectOption);
//Seçili değerleri getir
$("#getMultipleSelectValues").click(function(){ 
    alert("Seçilen Değerler: " + $("#multipleSelect").val());
});

```
```html
<div style="width: 300px">
  <select id="multipleSelect" multiple="multiple">
    <option value="-1">Seçiniz</option>
    <option value="1">Seçenek 1</option>
    <option value="2">Seçenek 2</option>
    <option value="3">Seçenek 3</option>
    <option value="4">Seçenek 4</option>
    <option value="5">Seçenek 5</option>
  </select>
  <strong id="getMultipleSelectValues">Get Values</strong>
</div>

```
## 2.6. Dinamik Veri İle Select2
Dinamik veri ile bir Select2 oluşturmak için veriyi `data` parametresi ile iletebilirsiniz. Bu Json veriyi API istekleri ile dinamik getirerek atama yapabilirsiniz.

```javascript
var selectData = [
    { id: 1, text: 'Seçenek 1' },
    { id: 2, text: 'Seçenek 2' },
    { id: 3, text: 'Seçenek 3', selected: true },
    { id: 4, text: 'Seçenek 4', disabled: true },
    { id: 5, text: 'Seçenek 5' }
];
$("#dynamicSelect").select2({
    data: selectData,
    width: '100%'
});

```
```html
<div style="width: 300px">
  <select id="dynamicSelect"></select>
</div>

```
## 2.7. Özel Tema Kullanımı
Select2'ye özel bir tema uygulamak için `theme`  parametresini kullanabilirsiniz.
Bunun için öncelikle stil dosyanızda` .select2-container` class'ına vermek istediğiniz tema adını ekleyerek alt class'ları düzenlemelisiniz.

Örnek tema isimlendirmesi `.select2-container--custom-theme` şeklinde olmalı bu durumda theme adınız `custom-theme` olacaktır.

Örnek olarak Scrollbar stili nasıl özelleştirilir görelim.

```css
/* ------------------------- Scrollbar Özelleştirmeleri ------------------------- */

/* Scrollbar track (yol) stilini belirler */
.select2-container--custom-theme .select2-results::-webkit-scrollbar-track {
    border-radius: 10px; /* Scrollbar yolunun yuvarlatılmış köşeleri */
    background-color: #fff; /* Scrollbar yolunun arka plan rengi */
}

/* Scrollbar'ın kendisinin stilini belirler */
.select2-container--custom-theme .select2-results::-webkit-scrollbar {
    width: 4px; /* Scrollbar'ın genişliği */
    background-color: #fff; /* Scrollbar'ın arka plan rengi */
}

/* Scrollbar thumb (kulp) stilini belirler */
.select2-container--custom-theme .select2-results::-webkit-scrollbar-thumb {
    border-radius: 10px; /* Scrollbar kulpunun yuvarlatılmış köşeleri */
    background-color: #2cace5; /* Scrollbar kulpunun rengi */
}
```
```javascript
$("#styledSelect").select2({
    theme: "custom-theme",
    width: '100%'
});

```
```html
<div style="width: 300px">
  <select id="styledSelect">
    <option value="1">Seçenek 1</option>
    <option value="2">Seçenek 2</option>
    <option value="3">Seçenek 3</option>
    <option value="4">Seçenek 4</option>
    <option value="5">Seçenek 5</option>
  </select>
</div>

```




