import frappe
def custom_has_course_moderator_role(member=None):
	return frappe.db.get_value(
		"Has Role",
		{"parent": member or frappe.session.user, "role": "Co-ordinator"},
		"name",
	)