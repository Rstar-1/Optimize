import React, { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const registerMutation = useRegister();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    role: "",

    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },

    shopDetails: {
      shopName: "",
      businessType: "",
      category: "",
      gstNumber: "",
      panNumber: "",
      shopLicenseNumber: "",
    },
  });

  const [files, setFiles] = useState({
    image: null,
    gstCertificate: null,
    panCard: null,
    shopPhoto: null,
  });

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddress = (e) => {
    setForm({
      ...form,
      address: { ...form.address, [e.target.name]: e.target.value },
    });
  };

  const handleShop = (e) => {
    setForm({
      ...form,
      shopDetails: {
        ...form.shopDetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleFile = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0],
    });
  };

  /* ================= REGISTER ================= */
  const register = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("fullname", form.fullname);
    data.append("email", form.email);
    data.append("mobile", form.mobile);
    data.append("password", form.password);
    data.append("role", form.role);

    data.append("address", JSON.stringify([form.address]));

    if (form.role === "vendor") {
      data.append("shopDetails", JSON.stringify(form.shopDetails));
    }

    if (files.image) data.append("image", files.image);
    if (form.role === "vendor") {
      if (files.gstCertificate) data.append("gstCertificate", files.gstCertificate);
      if (files.panCard) data.append("panCard", files.panCard);
      if (files.shopPhoto) data.append("shopPhoto", files.shopPhoto);
    }

    registerMutation.mutate(data, {
      onSuccess: () => setStep(2),
      onError: (err) => alert(err?.response?.data?.message || "Registration failed")
    });
  };

  /* ================= OTP ================= */
  const verifyOtp = async (e) => {
    e.preventDefault();
    const payload = {
      otp,
      mobile: form.mobile || undefined,
      email: form.email || undefined,
    };

    try {
      const res = await fetch("http://localhost:3000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "OTP verification failed");
        return;
      }

      alert("Registration successful");
      navigate("/profile");
    } catch (err) {
      alert("Verification error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 py-12" style={{ background: "radial-gradient(circle at top, var(--bg-surface-hover), var(--bg-color))" }}>
      <div className="card glass-panel animate-fade-in w-full" style={{ maxWidth: "800px" }}>

        {/* Step Indicator UI */}
        <div className="flex items-center justify-center mb-8 gap-4">
          <div className={`flex items-center gap-2 ${step === 1 ? 'text-accent-color' : 'text-success'}`}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: step >= 1 ? "var(--accent-gradient)" : "var(--bg-surface)", color: "#fff", width: '30px', height: '30px', borderRadius: '50%' }}>1</div>
            <span className="font-medium">Details</span>
          </div>
          <div className="h-1 w-16 rounded" style={{ background: step === 2 ? "var(--accent-color)" : "var(--border-color)" }}></div>
          <div className={`flex items-center gap-2 ${step === 2 ? 'text-accent-color' : 'text-secondary'}`}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: step === 2 ? "var(--accent-gradient)" : "var(--bg-surface)", color: step === 2 ? "#fff" : "var(--text-muted)", width: '30px', height: '30px', borderRadius: '50%' }}>2</div>
            <span className="font-medium">Verify OTP</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            {step === 1 ? "Create an Account" : "Verify Your Account"}
          </h2>
          <p className="text-secondary">
            {step === 1 ? "Join our platform by filling out the details below" : `We've sent an OTP to ${form.mobile || form.email}`}
          </p>
        </div>

        {step === 1 && (
          <form onSubmit={register} className="flex flex-col gap-6 animate-fade-in">
            {/* Basic Info */}
            <div>
              <h3 className="text-lg mb-4" style={{ color: "var(--accent-color)", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>Basic Information</h3>
              <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
                <input name="fullname" placeholder="Full Name" value={form.fullname} onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                <input name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                <select name="role" value={form.role} onChange={handleChange} required>
                  <option value="" disabled>Select Role</option>
                  <option value="user">User</option>
                  <option value="vendor">Vendor</option>
                  <option value="admin">Admin</option>
                </select>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Profile Image:</label>
                  <input type="file" name="image" onChange={handleFile} style={{ padding: "0.4rem" }} />
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg mb-4" style={{ color: "var(--accent-color)", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>Address Details</h3>
              <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                <input name="street" placeholder="Street Address" value={form.address.street} onChange={handleAddress} required />
                <input name="city" placeholder="City" value={form.address.city} onChange={handleAddress} required />
                <input name="state" placeholder="State" value={form.address.state} onChange={handleAddress} required />
                <input name="country" placeholder="Country" value={form.address.country} onChange={handleAddress} required />
                <input name="pincode" placeholder="Pincode" value={form.address.pincode} onChange={handleAddress} required />
              </div>
            </div>

            {/* Vendor Details */}
            {form.role === "vendor" && (
              <div className="animate-fade-in">
                <h3 className="text-lg mb-4" style={{ color: "var(--accent-color)", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>Shop Details</h3>
                <div className="grid mb-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  <input name="shopName" placeholder="Shop Name" value={form.shopDetails.shopName} onChange={handleShop} required />
                  <input name="businessType" placeholder="Business Type" value={form.shopDetails.businessType} onChange={handleShop} required />
                  <input name="category" placeholder="Category" value={form.shopDetails.category} onChange={handleShop} required />
                  <input name="gstNumber" placeholder="GST Number" value={form.shopDetails.gstNumber} onChange={handleShop} required />
                  <input name="panNumber" placeholder="PAN Number" value={form.shopDetails.panNumber} onChange={handleShop} required />
                  <input name="shopLicenseNumber" placeholder="License Number" value={form.shopDetails.shopLicenseNumber} onChange={handleShop} required />
                </div>

                <h3 className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>Vendor Documents</h3>
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  <div>
                    <label className="text-xs mb-1 block">GST Certificate</label>
                    <input type="file" name="gstCertificate" onChange={handleFile} style={{ padding: "0.4rem" }} required />
                  </div>
                  <div>
                    <label className="text-xs mb-1 block">PAN Card</label>
                    <input type="file" name="panCard" onChange={handleFile} style={{ padding: "0.4rem" }} required />
                  </div>
                  <div>
                    <label className="text-xs mb-1 block">Shop Photo</label>
                    <input type="file" name="shopPhoto" onChange={handleFile} style={{ padding: "0.4rem" }} required />
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="btn primary lg w-full mt-4"
              disabled={registerMutation.isPending}
              style={{ backgroundImage: "var(--accent-gradient)", border: "none" }}
            >
              {registerMutation.isPending ? "Processing..." : "Continue to Next Step"}
            </button>

            <p className="text-center mt-2 text-sm text-secondary">
              Already have an account? <Link to="/login" className="font-medium hover:text-accent-hover" style={{ color: "var(--accent-color)" }}>Login here</Link>
            </p>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={verifyOtp} className="flex flex-col gap-4 max-w-md mx-auto animate-fade-in">
            <div className="input-group text-center">
              <label className="text-sm font-medium mb-4 block" style={{ color: "var(--text-secondary)" }}>Enter the 6-digit OTP sent to you</label>
              <input
                type="text"
                placeholder="• • • • • •"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                style={{ textAlign: "center", fontSize: "1.5rem", letterSpacing: "0.5rem" }}
              />
            </div>

            <button
              type="submit"
              className="btn primary lg w-full mt-4"
              style={{ backgroundImage: "var(--accent-gradient)", border: "none" }}
            >
              Verify & Complete Registration
            </button>

            <button
              type="button"
              className="btn ghost text-sm mt-2"
              onClick={() => setStep(1)}
            >
              Go Back
            </button>
          </form>
        )}

      </div>
    </div>
  );
}