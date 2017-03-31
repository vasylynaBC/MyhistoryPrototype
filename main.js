var History=(function(){
    var text=document.querySelector('.text');
    var but=document.getElementById('but');
    var hist=document.getElementById('history');
   
    
    function Load(){
        but.addEventListener('click', Life.bind(this)  );
    };
    
  
    function Life(){
      var myOb={
         Young: function (age) {
                this.name = "baby";
                this.age = age;
                this.words='mam, dad, barby';
                this.speak = 'Hello my name was ' + this.name + ' and me was ' + this.age+ " I said some words such as- " +this.words;
                 },
          TenAge: function(age){
               this.name = "Vasylyna";
                this.age = age;
                this.manywords='many words';
                this.book='Gary Potter, Tails';
                this.dance=true;
                this.speak = 'Hello my name was ' + this.name + ' and me was ' + this.age + ' i read books ' +this.book+ ',  I said some words such as- ' +this.words+ ' and  ' +this.manywords+ ' I danced - ' +this.dance;
              
          },
           NowAge: function(age){
               this.name = "Vasylyna";
                this.age = age;
                this.newbook='Flanangan';
                this.programming='javascript';
                this.study='LP university';
                this.speak = 'Hello my name is ' + this.name + ' and i have ' + this.age + ' i read books ' +this.newbook+   ' and '  +this.book+  ', I know language programming - ' +this.programming+ ' I study - ' +this.study + ' I danced - ' +this.dance + ', I said some words such as- ' +this.words+ ' and  ' +this.manywords;
              
          }
                
};
        
    var  newYu=new myOb.Young(2);
        myOb.TenAge.prototype=newYu;
    var  newTenAge=new myOb.TenAge(10);
        myOb.NowAge.prototype=newTenAge;
    var  newNowAge=new myOb.NowAge(21);
        
       
      
          if(text.value==newYu.age){
               hist.innerHTML=newYu.speak;
             }
        else if (text.value==newTenAge.age){
            hist.innerHTML=newTenAge.speak;
        }
        else if (text.value==newNowAge.age){
             hist.innerHTML=newNowAge.speak;
        }
        upLoad();
   };
    
    function upLoad(){
        text.value=" ";
    }
      
        
  
    
    return{
        Load:Load,
        upLoad:upLoad
       
    };
    
})();
History.Load();
History.upLoad();

