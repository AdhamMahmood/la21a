/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Back */
    
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_page */
         activate_page("#aboutus"); 
         return false;
    });
    
        /* button  .uib_w_3 */
    
    
        /* button  .uib_w_3 */
    
    
        /* button  .uib_w_3 */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#chart"); 
         return false;
    });
    
        /* button  .uib_w_4 */
    
    
        /* button  .uib_w_5 */
    
    
        /* button  .uib_w_6 */
    
    
        /* button  .uib_w_8 */
    
    
        /* button  .uib_w_9 */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#aboutus"); 
         return false;
    });
    
        /* button  .uib_w_9 */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_8 */
    
    
        /* button  .uib_w_11 */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_14 */
    
    
        /* button  .uib_w_16 */
    $(document).on("click", ".uib_w_16", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_17 */
    $(document).on("click", ".uib_w_17", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_8 */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_14 */
    $(document).on("click", ".uib_w_14", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_6 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_page */
         activate_page("#chart"); 
         return false;
    });
    
        /* button  .uib_w_20 */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_5 */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#video"); 
         return false;
    });
    
        /* button  Locate Us */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_25 */
    $(document).on("click", ".uib_w_25", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Locate Us */
    $(document).on("click", ".uib_w_27", function(evt)
    {
         /*global activate_page */
         activate_page("#locateus"); 
         return false;
    });
    
        /* button  .uib_w_4 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
       document.location.href = 'tel:+60380116639';
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_29 */
    $(document).on("click", ".uib_w_29", function(evt)
    {
        alert("Mobile App Training\nMU DOT MY PLT\nwww.mu.my");
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_28 */
    $(document).on("click", ".uib_w_28", function(evt)
    {
        alert("Mobile App Training\nMU DOT MY PLT\nwww.mu.my");
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_29 */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_30").modal("toggle");  
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
