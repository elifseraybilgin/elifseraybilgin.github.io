$("#carousel").carousel();

var yukari=document.getElementsByClassName("yukaricik")[0];
window.addEventListener("scroll", function(){
    const mesafe=window.scrollY; 
    if(mesafe>80){
        yukari.classList.add("goster");
        yukari.innerHTML="&uArr;";
    }
    else{
        yukari.classList.remove("goster");
    }
});

yukari.addEventListener("click", function(){
    window.scrollTo(0,0);
});

yukari.addEventListener("mousemove", function(){
    yukari.innerHTML="&uArr;";
});

yukari.addEventListener("mouseout", function(){
    yukari.innerHTML="&uArr;";
});


function validate(){
  kontrolForm=document.forms["myform"];
    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var sehirler=document.getElementById("sehirler");
    var dogumtarihi=document.getElementById("dogumtarihi").value;
    var konu=document.getElementById("konu");
    var mesaj = document.getElementById("mesaj").value;
    
    var Mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var letters = /^[a-züöçğşıİÜĞÇŞÖ\s]+$/i;

    if(ad.length < 3 || letters.test(ad)!=true){
      alert("Lütfen Adınızı Tam Olarak Giriniz / Rakam kullanmayınız!");
      return false;
    }
    if(soyad.length < 2 ||letters.test(soyad)!=true){
      alert("Lütfen Soyadınızı Tam Olarak Giriniz / Rakam kullanmayınız!");
      return false;
    }
    if(Mail.test(email)==false){
      alert("Lütfen E-Mail Adresinizi Tam Olarak Giriniz");
        return false;
      }
    if(isNaN(tel) || tel.length != 11){
        alert("Lütfen Telefon Numaranızı Tam Olarak Giriniz / Harf Kullanmayınız!");
      return false;
    }
    if(sehirler.selectedIndex==""){
      alert("Lütfen Şehrinizi Seçiniz");
      return false;
    }
    if(konu.selectedIndex==""){
      alert("Lütfen Konunuzu Seçiniz");
      return false;
    }
    if(mesaj.length <= 0){
      alert("Lütfen Mesajınızı Yazınız");
      return false;
    }
    alert("Mesajınız Başarılı Şekilde Gönderildi!");
    window.location.reload()

    var konusec=document.getElementById("konu").value;
    
    window.location.href = "mailto:serayblgn@hotmail.com?cc=&subject=&body="+"Adı: "+ ad+"          "+"Soyadı: "+ soyad +"          "+"Mail adresi: "+ email+"          "+"Telefon Numarası: "+ tel+"          "+"Mesajı: "+ mesaj;

    document.getElementById('ad').value = "";
    document.getElementById('soyad').value = "";
    document.getElementById('email').value = "";
    document.getElementById('tel').value = "";
    document.getElementById('sehirler').selectedIndex=0;
    document.getElementById('konu').selectedIndex=0;
    document.getElementById('mesaj').value = "";
  }

  var doc = new jsPDF();
  var specialElementHandlers = {'#cvislem': function (element, renderer) {
          return true;
      }
  };
  
  $('#indir').click(function () {
      doc.fromHTML($('#ozgecmis').html(), 15, 15, {
          'width': 170,
              'elementHandlers': specialElementHandlers
      });
      doc.save('elifseraybilginCV.pdf');
  });

  function myFunction(button) {
    var x = document.getElementById("ozgecmis");
    if (x.contentEditable == "true") {
      x.contentEditable = "false";
      button.innerHTML = "Düzenle Butonu Etkin Değil";
    } else {
      x.contentEditable = "true";
      button.innerHTML = "Düzenle Butonu Etkin";
    }
        //get the editable element
        var editElem = document.getElementById("ozgecmis");
        
        //get the edited element content
        var userVersion = editElem.innerHTML;
        
        //save the content to local storage
        localStorage.userEdits = userVersion;
        
        //write a confirmation to the user
        document.getElementById("ozgecmis").innerHTML;
  }

  function checkEdits() {
    //find out if the user has previously saved edits
    if(localStorage.userEdits!=null)
    document.getElementById("ozgecmis").innerHTML = localStorage.userEdits;
    }

    var doc = new jsPDF();
    var specialElementHandlers = {'#videoislem': function (element, renderer) {
            return true;
        }
    };
    
    $('#videoindir').click(function () {
        doc.fromHTML($('#seriparalelvideo').html(), 15, 15, {
            'width': 170,
                'elementHandlers': specialElementHandlers
        });
        doc.save('seriparalelvideo.mp4');
    });

