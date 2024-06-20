// frappe.ui.form.on("Course Evaluator", {
//     validate: function (frm) {
//         console.log("hello");
//     }
// });
frappe.ui.form.on("Course Evaluator", {
    onload: function(frm) {
        frm.set_query('evaluator', ()=> {
            return {
                filters: {
                    'Field': 'full_name'
                }
            };
        });
    }
});