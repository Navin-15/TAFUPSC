import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      // await axios.post(`${API_URL}/api/customers`, formData);

      axios.post(`${API_URL}/api/leads`, {
  name: formData.name,
  email: formData.email,
  mobile: formData.mobile,
});


      alert("Submitted Successfully ✅");

      setFormData({ name: "", email: "", mobile: "" });
      setErrors({});
    } catch (error) {
      alert(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container form-wrapper">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 col-sm-10">
          <div className="card form-card shadow">
            <h4 className="text-center mb-4">Contact Us</h4>

            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Mobile */}
              <div className="mb-4">
                <label className="form-label">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  className={`form-control ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && (
                  <div className="invalid-feedback">
                    {errors.mobile}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

