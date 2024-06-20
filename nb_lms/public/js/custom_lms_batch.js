frappe.ui.form.on("LMS Batch", { //this function makes only select user with role student on LMS batch doctype
    onload:function(frm){
    frm.set_query("student","students", function () {
        return {
            filters: {
                role_profile_name:'Student'
            },
        };
    });
    frm.set_query("user","custom_trainer", function () {
        return {
            filters: {
                role_profile_name:'Trainer'
            },
        };
    });
},
});