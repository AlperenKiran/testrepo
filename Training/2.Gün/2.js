// let numOne = 3
// let numTwo = 3

// console.log (numOne==numTwo)

// let js = "javascript"
// let py = "python"

// console.log(js==py)

// let lightOn= true
// let lightOff= false

// console.log(lightOn==lightOff)

// // let numb = [1,3,"adana",undefined,true]
// // numb[2]="ist"
// // console.log(numb)

// let nums=[1,"adana",3]
// nums[1]=2
// console.log(nums)


// //non-primitive lerde diziler aynı olsa bile karşılaştırma doğru değildir.
// let num1 = [1,2,3]
// //let num2 = [1,2,3]
// let num2=num1


// console.log(num1==num2)

// // objeler aynı olmasına rağmen referanslar aynı olmadığı için karşılaştırma yapılamıyor.
//  let user = {
//      name:"alperen",
//      surname:"kiran"
//  }

//  let user2 = { 
//      name:"alperen",
//      surname:"kiran"
//  }

//  console.log(user==user2)

let sayi= 5.5
console.log(Math.round(sayi))
// // Math.round(5.5) => (6)
// // Math.round(5.49) => (5)
// // Math.ceil(5.49) => (6)
// // Math.floor(5.49) => (5)
// // Math.min(1,3,5,-20,50) => (-20)
// // Math.max(1,3,5,-20,50) => (50)

// const PI = Math.PI
// console.log(PI)


// //0-0.999 arası random sayı  
// let mat1 = Math.random()
// console.log(mat1)
// //  0-10 arası random  tam sayı tabana yuvarlanarak
// let mat = Math.floor(Math.random ()*11 )
// console.log(mat)

// // console.log(Math.abs(-20))   Mutlak Değer
// // console.log(Math.sqrt(49))   Karekökü
// // console.log(Math.pow(2,5))   Üssü
// // console.log(2**5)            Üssü

// let name= "Alperen"
// let surname= "Kiran"
// let fullName= name+" "+surname

// console.log(fullName)

// //Uzun paragrafları ters slaş işareti ile tek satıra sığdırırız.
// let paragraph = "LoremLorem ipsum\
// dolor sit, amet consectetur\
// adipisicing elit.\
// Consequuntur sapiente"

// console.log(paragraph)

// let satir= "Alperen\nKiran" // (\n:Yeni satıra indiriyor)
// let sati= "Alperen\tKiran" //(\t: 8 satırlık tab boşlugu bırakıyor)
// let sat = "Alperen\\kiran" // ()

// console.log(sat)

// //Template Strings--Backt-ticck`` karakterler içerinde yazılır. İçersinde js ifadesi varsa dolar sonra süslü parantez içerisine de ifademiz konulur.

// let a = 4
// let b = 5

// let name="Alperen"
// let surname="Kiran"
// let fullName= `${name}`

// javascript ifadeliri süslü({}) parantez içine alınır\n
// Önüne dolar($) işareti konulur.\n
// Ve bunların hepsi "back-ticks(ters tırnak)" içerisinde yapılır.

// "a+b=${a+b}"

// ${surname}`
// console.log(fullName)

// let uzun = "ALPERENKIRAN"
// console.log(uzun[uzun.length-1])

// let buyuk = "alperenkiran"
// buyuk.toUpperCase()
// console.log(buyuk)

// let ayırma = "ALPEREN KIRAN"
// console.log(ayırma.split(" ")) //boşluk karakterinden ayır
// let ayır = "ALPEREN KIRAN"
// console.log(ayır.split("")) // tüm karakterleri ayır

// let doğru = "Alperen Kiran java Scripts"
// console.log(doğru.includes("Kiran")) //includes değişken o değeri içerip içermediğini cevaplıyor

// let değistir= "Alperen kiran'in telefonu"
// console.log(değistir.replace("kiran","Can"))// ilk geleni değiştirir. 

// let alldeğiştir= "alperen kiran nasilsin , alperen napıyorsun" 
// console.log(alldeğiştir.replaceAll("alperen","kaan")) // replaceall hepsini değiştirir.

// let alp = "ALPEREN KIRAN"
// console.log(alp.charAt(1)) // karakter elamanının değerini veriyor.

// let alper = "Merhaba alperen kiran , eğitim videoları nasıl alperen" //
// console.log(alper.lastIndexOf("alperen"))

// let alpere = "Merhaba alperen kiran , eğitim videoları nasıl alperen"
// console.log(alpere.indexOf("eren"))

// let baslama = "Bugün hava cok Güzel"
// console.log(baslama.startsWith("Bugün")) //Bu ifade Bugün ile başlıyor mu ifadesine cevap verir

// let bitis = "Bugün hava cok Güzel"
// console.log(bitis.endsWith("Güzel")) // Bu ifade Güzel ile bitiyor mu ifadesine cevap verir(True or False)

// let string = "I love JavaScript. If you do not love JavaScript what else can you love."
// console.log(string.match("Java")) 

// let stringa = "I Love JavaScript. If you do not lovE JavaScript what else can you love."
// console.log(stringa.match(/love/gi)) //regEx düzenli ifaderler (/***/)

// let txt = "Suan 2023 yılındayız, sehrimin plakası 20 dir, ben 1997 yılında doğdum"
// let regEx= /\d+/
// // console.log(txt.match(regEx))
// console.log(txt.match(/\d+/gi)) // (/\d+/) metin içerisinde ki numaraları bulur.