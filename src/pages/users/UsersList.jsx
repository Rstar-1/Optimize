import React, { useState } from "react";
import { useGetUsers, useUpdateUser } from "../../hooks/useUser";

export default function UsersList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({
    fullname: "", email: "", mobile: "", role: "user", status: true,
    address: { street: "", city: "", state: "", country: "", pincode: "" },
    shopDetails: { shopName: "", businessType: "", category: "", gstNumber: "", panNumber: "", shopLicenseNumber: "" }
  });

  const { data: response, isLoading, isError } = useGetUsers({ search, page, limit: 10 });
  const updateMutation = useUpdateUser();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1); // Reset to first page on new search
  };

  const openEditModal = (u) => {
    setEditingUser(u);
    setEditForm({
      fullname: u.fullname || "",
      email: u.email || "",
      mobile: u.mobile || "",
      role: u.role || "user",
      status: u.status !== undefined ? u.status : true,
      address: (Array.isArray(u.address) ? u.address[0] : u.address) || { street: "", city: "", state: "", country: "", pincode: "" },
      shopDetails: u.shopDetails || { shopName: "", businessType: "", category: "", gstNumber: "", panNumber: "", shopLicenseNumber: "" },
    });
  };

  const handleEditChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value });

  const handleEditAddress = (e) => setEditForm({
    ...editForm, address: { ...editForm.address, [e.target.name]: e.target.value }
  });

  const handleEditShop = (e) => setEditForm({
    ...editForm, shopDetails: { ...editForm.shopDetails, [e.target.name]: e.target.value }
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    const updateData = {
      fullname: editForm.fullname,
      email: editForm.email,
      mobile: editForm.mobile,
      role: editForm.role,
      status: editForm.status,
      address: [editForm.address]
    };

    if (editForm.role === "vendor") {
      updateData.shopDetails = editForm.shopDetails;
    }

    updateMutation.mutate(
      { id: editingUser._id, data: updateData },
      {
        onSuccess: () => {
          alert("User updated successfully");
          setEditingUser(null);
        },
        onError: (err) => {
          alert(err?.response?.data?.message || "Failed to update user");
        }
      }
    );
  };

  const usersData = response?.data?.users || [];
  const pagination = response?.data?.pagination || { page: 1, totalPages: 1, total: 0 };

  return (
    <div className="p-6 md:p-12 min-h-screen" style={{ background: "radial-gradient(circle at top, var(--bg-surface-hover), var(--bg-color))" }}>
      <div className="card glass-panel animate-fade-in w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h2 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "0.2rem" }}>Users Directory</h2>
            <p className="text-secondary text-sm">Manage and view system users</p>
          </div>

          <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search name, email, mobile..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 md:w-64"
              style={{ padding: "0.5rem 1rem" }}
            />
            <button type="submit" className="btn primary" style={{ backgroundImage: "var(--accent-gradient)", border: "none" }}>Search</button>
          </form>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-secondary">Loading users...</div>
        ) : isError ? (
          <div className="text-center py-12 text-error">Failed to load users. You might not have permission.</div>
        ) : (
          <>
            <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid var(--border-color)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
              <table className="w-full text-left" style={{ borderCollapse: "collapse", background: "#ffffff" }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "1px solid var(--border-color)" }}>
                    <th className="p-4 text-xs font-bold text-secondary uppercase tracking-wider" style={{ paddingLeft: "1.5rem" }}>User</th>
                    <th className="p-4 text-xs font-bold text-secondary uppercase tracking-wider">Contact</th>
                    <th className="p-4 text-xs font-bold text-secondary uppercase tracking-wider">Role</th>
                    <th className="p-4 text-xs font-bold text-secondary uppercase tracking-wider">Status</th>
                    <th className="p-4 text-xs font-bold text-secondary uppercase tracking-wider text-right" style={{ paddingRight: "1.5rem" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="p-12 text-center text-secondary font-medium">
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                          <span style={{ fontSize: "2rem", opacity: 0.5 }}>🔍</span>
                          No users found matching your search.
                        </div>
                      </td>
                    </tr>
                  ) : (
                    usersData.map((u) => (
                      <tr
                        key={u._id}
                        style={{ borderBottom: "1px solid var(--border-color)", transition: "all 0.2s ease" }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f8fafc"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                      >
                        <td className="p-4" style={{ paddingLeft: "1.5rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <div style={{
                              width: "40px", height: "40px", borderRadius: "50%",
                              background: "var(--accent-gradient)", display: "flex",
                              alignItems: "center", justifyContent: "center",
                              color: "white", fontWeight: "bold", fontSize: "1.1rem",
                              boxShadow: "0 2px 4px rgba(99,102,241,0.2)"
                            }}>
                              {u.fullname ? u.fullname.charAt(0).toUpperCase() : "?"}
                            </div>
                            <div>
                              <div style={{ fontWeight: "600", color: "var(--text-primary)" }}>{u.fullname}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "0.2rem" }}>{u.email}</div>
                          <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{u.mobile}</div>
                        </td>
                        <td className="p-4">
                          <span style={{
                            padding: "0.3rem 0.8rem",
                            borderRadius: "9999px",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            letterSpacing: "0.025em",
                            textTransform: "uppercase",
                            background: u.role === "admin" ? "#fee2e2" : u.role === "vendor" ? "#dbeafe" : "#dcfce3",
                            color: u.role === "admin" ? "#991b1b" : u.role === "vendor" ? "#1e40af" : "#166534",
                            border: `1px solid ${u.role === "admin" ? "#fca5a5" : u.role === "vendor" ? "#bfdbfe" : "#bbf7d0"}`
                          }}>
                            {u.role}
                          </span>
                        </td>
                        <td className="p-4">
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <div style={{
                              width: "8px", height: "8px", borderRadius: "50%",
                              background: u.status ? "#10b981" : "#ef4444",
                              boxShadow: `0 0 8px ${u.status ? "#10b981" : "#ef4444"}`
                            }}></div>
                            <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "var(--text-primary)" }}>
                              {u.status ? "Active" : "Inactive"}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 text-right" style={{ paddingRight: "1.5rem" }}>
                          <button
                            onClick={() => openEditModal(u)}
                            className="btn outline sm"
                            style={{
                              padding: "0.25rem 0.75rem",
                              fontSize: "0.75rem",
                              borderRadius: "0.5rem",
                              fontWeight: "600",
                              color: "var(--accent-color)",
                              borderColor: "var(--border-color)",
                              background: "white"
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {pagination.totalPages > 1 && (
              <div className="flex justify-between items-center mt-6 p-4 rounded-lg" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-color)" }}>
                <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                  Showing page <strong style={{ color: "var(--text-primary)" }}>{pagination.page}</strong> of <strong style={{ color: "var(--text-primary)" }}>{pagination.totalPages}</strong> <span style={{ opacity: 0.5 }}>({pagination.total} total)</span>
                </span>
                <div className="flex gap-2">
                  <button
                    className="btn outline text-sm"
                    disabled={pagination.page <= 1}
                    onClick={() => setPage(p => p - 1)}
                    style={{ padding: "0.4rem 1rem", borderRadius: "0.5rem", background: pagination.page <= 1 ? "#f1f5f9" : "white" }}
                  >
                    Previous
                  </button>
                  <button
                    className="btn outline text-sm"
                    disabled={pagination.page >= pagination.totalPages}
                    onClick={() => setPage(p => p + 1)}
                    style={{ padding: "0.4rem 1rem", borderRadius: "0.5rem", background: pagination.page >= pagination.totalPages ? "#f1f5f9" : "white" }}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Edit User Modal */}
      {editingUser && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(15, 23, 42, 0.4)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
          <div className="card animate-fade-in w-full max-w-2xl m-4" style={{ borderRadius: "1rem", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", maxHeight: "90vh", display: "flex", flexDirection: "column" }}>
            <div className="flex justify-between items-center mb-4" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", margin: 0 }}>Edit User Profile</h2>
              <button onClick={() => setEditingUser(null)} style={{ background: "transparent", border: "none", fontSize: "1.5rem", color: "var(--text-muted)", cursor: "pointer" }}>&times;</button>
            </div>

            <form onSubmit={handleUpdate} className="flex flex-col gap-4" style={{ overflowY: "auto", paddingRight: "0.5rem" }}>

              {/* Basic Info */}
              <div>
                <h3 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">Basic Info</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="input-group">
                    <label className="text-xs mb-1 block text-secondary font-medium">Full Name</label>
                    <input name="fullname" type="text" value={editForm.fullname} onChange={handleEditChange} required />
                  </div>
                  <div className="input-group">
                    <label className="text-xs mb-1 block text-secondary font-medium">Email</label>
                    <input name="email" type="email" value={editForm.email} onChange={handleEditChange} required />
                  </div>
                  <div className="input-group">
                    <label className="text-xs mb-1 block text-secondary font-medium">Mobile</label>
                    <input name="mobile" type="text" value={editForm.mobile} onChange={handleEditChange} required />
                  </div>
                  <div className="input-group">
                    <label className="text-xs mb-1 block text-secondary font-medium">Role</label>
                    <select name="role" value={editForm.role} onChange={handleEditChange} style={{ background: "var(--bg-color)" }}>
                      <option value="user">User</option>
                      <option value="vendor">Vendor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label className="text-xs mb-1 block text-secondary font-medium">Status</label>
                    <select value={editForm.status.toString()} onChange={(e) => setEditForm({ ...editForm, status: e.target.value === "true" })} style={{ background: "var(--bg-color)" }}>
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">Address Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="input-group md:col-span-2">
                    <label className="text-xs mb-1 block text-secondary font-medium">Street</label>
                    <input name="street" value={editForm.address.street} onChange={handleEditAddress} />
                  </div>
                  <div className="input-group">
                    <label className="text-xs mb-1 block text-secondary font-medium">City</label>
                    <input name="city" value={editForm.address.city} onChange={handleEditAddress} />
                  </div>
                  <div className="input-group">
                    <label className="text-xs mb-1 block text-secondary font-medium">State</label>
                    <input name="state" value={editForm.address.state} onChange={handleEditAddress} />
                  </div>
                  <div className="input-group">
                    <label className="text-xs mb-1 block text-secondary font-medium">Country</label>
                    <input name="country" value={editForm.address.country} onChange={handleEditAddress} />
                  </div>
                  <div className="input-group">
                    <label className="text-xs mb-1 block text-secondary font-medium">Pincode</label>
                    <input name="pincode" value={editForm.address.pincode} onChange={handleEditAddress} />
                  </div>
                </div>
              </div>

              {/* Shop Details (Vendor Only) */}
              {editForm.role === "vendor" && (
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">Shop Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="input-group md:col-span-2">
                      <label className="text-xs mb-1 block text-secondary font-medium">Shop Name</label>
                      <input name="shopName" value={editForm.shopDetails.shopName} onChange={handleEditShop} />
                    </div>
                    <div className="input-group">
                      <label className="text-xs mb-1 block text-secondary font-medium">Business Type</label>
                      <input name="businessType" value={editForm.shopDetails.businessType} onChange={handleEditShop} />
                    </div>
                    <div className="input-group">
                      <label className="text-xs mb-1 block text-secondary font-medium">Category</label>
                      <input name="category" value={editForm.shopDetails.category} onChange={handleEditShop} />
                    </div>
                    <div className="input-group">
                      <label className="text-xs mb-1 block text-secondary font-medium">GST Number</label>
                      <input name="gstNumber" value={editForm.shopDetails.gstNumber} onChange={handleEditShop} />
                    </div>
                    <div className="input-group">
                      <label className="text-xs mb-1 block text-secondary font-medium">PAN Number</label>
                      <input name="panNumber" value={editForm.shopDetails.panNumber} onChange={handleEditShop} />
                    </div>
                    <div className="input-group md:col-span-2">
                      <label className="text-xs mb-1 block text-secondary font-medium">License Number</label>
                      <input name="shopLicenseNumber" value={editForm.shopDetails.shopLicenseNumber} onChange={handleEditShop} />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3 justify-end mt-4 pt-4" style={{ borderTop: "1px solid var(--border-color)", position: "sticky", bottom: 0, background: "white", paddingBottom: "0.5rem" }}>
                <button type="button" className="btn outline" onClick={() => setEditingUser(null)}>Cancel</button>
                <button type="submit" className="btn primary" disabled={updateMutation.isPending} style={{ backgroundImage: "var(--accent-gradient)", border: "none" }}>
                  {updateMutation.isPending ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
