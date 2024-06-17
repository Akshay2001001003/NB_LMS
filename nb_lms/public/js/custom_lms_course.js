frappe.ui.form.on("LMS Course", {
    onload: function (frm) {
        frm.set_query("instructors",()=>{
          return {
            filters:{
                role_profile_name:'Instructor'
            }
          }
        });
    }
});