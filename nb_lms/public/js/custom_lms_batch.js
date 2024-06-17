frappe.ui.form.on("LMS Batch", { //this function makes only select user with role student on LMS batch doctype
    onload:function(frm){
    frm.set_query("student","students", function () {
        return {
            filters: {
                role_profile_name:'Student'
            },
        };
    });
}
});