import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfile, useUpdateUser, useUploadDocuments } from "../../hooks/useUser";
import { updateUser as updateReduxUser } from "../../features/authSlice";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Fetch the logged in user's profile using the new /api/users/profile endpoint
  const { data: profileResponse, isLoading } = useGetProfile();

  const updateMutation = useUpdateUser();
  const uploadMutation = useUploadDocuments();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    mobile: "",
    address: { street: "", city: "", state: "", country: "", pincode: "" },
    shopDetails: { shopName: "", businessType: "", category: "", gstNumber: "", panNumber: "", shopLicenseNumber: "" },
  });

  const [files, setFiles] = useState({
    gstCertificate: null,
    panCard: null,
    shopPhoto: null,
  });

  // Only use API response to fill the form (do not use login data)
  useEffect(() => {
    // The successResponse wraps data in a 'data' property
    if (profileResponse?.data) {
      const fetchedUser = profileResponse.data;
      
      setForm({
        fullname: fetchedUser.fullname || "",
        email: fetchedUser.email || "",
        mobile: fetchedUser.mobile || "",
        address: (Array.isArray(fetchedUser.address) ? fetchedUser.address[0] : fetchedUser.address) || { street: "", city: "", state: "", country: "", pincode: "" },
        shopDetails: fetchedUser.shopDetails || { shopName: "", businessType: "", category: "", gstNumber: "", panNumber: "", shopLicenseNumber: "" },
      });
    }
  }, [profileResponse]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleAddress = (e) => setForm({
    ...form, address: { ...form.address, [e.target.name]: e.target.value }
  });

  const handleShop = (e) => setForm({
    ...form, shopDetails: { ...form.shopDetails, [e.target.name]: e.target.value }
  });

  const handleFile = (e) => setFiles({
    ...files, [e.target.name]: e.target.files[0]
  });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const updateData = {
      fullname: form.fullname,
      email: form.email,
      mobile: form.mobile,
      address: [form.address]
    };

    if (user?.role === "vendor") {
      updateData.shopDetails = form.shopDetails;
    }

    updateMutation.mutate({ id: user._id, data: updateData }, {
      onSuccess: (res) => {
        alert("Profile updated successfully!");
        if (res.data) {
          dispatch(updateReduxUser(res.data));
        }
      },
      onError: (err) => {
        alert(err?.response?.data?.message || "Failed to update profile");
      }
    });
  };

  const handleUploadDocs = (e) => {
    e.preventDefault();
    const data = new FormData();
    if (files.gstCertificate) data.append("gstCertificate", files.gstCertificate);
    if (files.panCard) data.append("panCard", files.panCard);
    if (files.shopPhoto) data.append("shopPhoto", files.shopPhoto);

    uploadMutation.mutate(data, {
      onSuccess: () => alert("Documents uploaded successfully!"),
      onError: (err) => alert(err?.response?.data?.message || "Failed to upload documents")
    });
  };



  return (
    <div className="flex items-center justify-center min-h-screen p-4 py-12" style={{ background: "radial-gradient(circle at top, var(--bg-surface-hover), var(--bg-color))" }}>
      <div className="card glass-panel animate-fade-in w-full" style={{ maxWidth: "800px" }}>
        <div className="text-center mb-8">
          <h2 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>My Profile</h2>
          <p className="text-secondary">Update your personal and business details</p>
        </div>

        <form onSubmit={handleUpdateProfile} className="flex flex-col gap-6 animate-fade-in mb-8">
          <div>
            <h3 className="text-lg mb-4" style={{ color: "var(--accent-color)", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>Basic Information</h3>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              <div className="input-group">
                <label className="text-xs mb-1 block text-secondary">Full Name</label>
                <input name="fullname" value={form.fullname} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label className="text-xs mb-1 block text-secondary">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label className="text-xs mb-1 block text-secondary">Mobile</label>
                <input name="mobile" value={form.mobile} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4" style={{ color: "var(--accent-color)", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>Address Details</h3>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div className="input-group">
                <label className="text-xs mb-1 block text-secondary">Street</label>
                <input name="street" value={form.address?.street || ""} onChange={handleAddress} />
              </div>
              <div className="input-group">
                <label className="text-xs mb-1 block text-secondary">City</label>
                <input name="city" value={form.address?.city || ""} onChange={handleAddress} />
              </div>
              <div className="input-group">
                <label className="text-xs mb-1 block text-secondary">State</label>
                <input name="state" value={form.address?.state || ""} onChange={handleAddress} />
              </div>
              <div className="input-group">
                <label className="text-xs mb-1 block text-secondary">Country</label>
                <input name="country" value={form.address?.country || ""} onChange={handleAddress} />
              </div>
              <div className="input-group">
                <label className="text-xs mb-1 block text-secondary">Pincode</label>
                <input name="pincode" value={form.address?.pincode || ""} onChange={handleAddress} />
              </div>
            </div>
          </div>

          {user?.role === "vendor" && (
            <div>
              <h3 className="text-lg mb-4" style={{ color: "var(--accent-color)", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>Shop Details</h3>
              <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                <div className="input-group">
                  <label className="text-xs mb-1 block text-secondary">Shop Name</label>
                  <input name="shopName" value={form.shopDetails?.shopName || ""} onChange={handleShop} />
                </div>
                <div className="input-group">
                  <label className="text-xs mb-1 block text-secondary">Business Type</label>
                  <input name="businessType" value={form.shopDetails?.businessType || ""} onChange={handleShop} />
                </div>
                <div className="input-group">
                  <label className="text-xs mb-1 block text-secondary">Category</label>
                  <input name="category" value={form.shopDetails?.category || ""} onChange={handleShop} />
                </div>
                <div className="input-group">
                  <label className="text-xs mb-1 block text-secondary">GST Number</label>
                  <input name="gstNumber" value={form.shopDetails?.gstNumber || ""} onChange={handleShop} />
                </div>
                <div className="input-group">
                  <label className="text-xs mb-1 block text-secondary">PAN Number</label>
                  <input name="panNumber" value={form.shopDetails?.panNumber || ""} onChange={handleShop} />
                </div>
                <div className="input-group">
                  <label className="text-xs mb-1 block text-secondary">License Number</label>
                  <input name="shopLicenseNumber" value={form.shopDetails?.shopLicenseNumber || ""} onChange={handleShop} />
                </div>
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="btn primary lg w-full mt-2"
            disabled={updateMutation.isPending}
            style={{ backgroundImage: "var(--accent-gradient)", border: "none" }}
          >
            {updateMutation.isPending ? "Updating..." : "Update Profile"}
          </button>
        </form>

        {user?.role === "vendor" && (
          <form onSubmit={handleUploadDocs} className="flex flex-col gap-6 animate-fade-in pt-6" style={{ borderTop: "1px solid var(--border-color)" }}>
            <h3 className="text-lg" style={{ color: "var(--accent-color)" }}>Upload Documents</h3>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div>
                <label className="text-xs mb-1 block text-secondary">GST Certificate</label>
                <input type="file" name="gstCertificate" onChange={handleFile} style={{ padding: "0.4rem" }} />
              </div>
              <div>
                <label className="text-xs mb-1 block text-secondary">PAN Card</label>
                <input type="file" name="panCard" onChange={handleFile} style={{ padding: "0.4rem" }} />
              </div>
              <div>
                <label className="text-xs mb-1 block text-secondary">Shop Photo</label>
                <input type="file" name="shopPhoto" onChange={handleFile} style={{ padding: "0.4rem" }} />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn secondary lg w-full mt-2"
              disabled={uploadMutation.isPending}
            >
              {uploadMutation.isPending ? "Uploading..." : "Upload Documents"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
