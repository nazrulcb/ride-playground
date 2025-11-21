"use client";
import { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { useAuth } from "@/app/context/authContext";

export default function RegisterPage() {
  const { register } = useAuth(); // <-- using register from context

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    birthday: {
      day: "",
      month: "",
      year: "",
    },
    town: "",
    state: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  // Phone handler
  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  // Birthday handler
  const handleBirthdayChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      birthday: {
        ...prev.birthday,
        [field]: value,
      },
    }));
  };

  // Input handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Dropdown lists
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const token = "REGISTER_SUCCESS_TOKEN";

    // Call register() from your AuthContext
    register(token); // <-- will redirect instantly

    console.log("Final Form Data:", formData);
  };

  return (
    <>
      <section className="login_page_main">
        <div className="login_main_inner">
          <div className="login_left_area">
            <img className="log_lft_bg" src="../images/login_grp.png" alt="img" />
            <div className="login_left_area_inn">
              <img src="../images/logo.png" alt="logo" />
              <div className="mid_text">
                <h2>Welcome!!!</h2>
                <p>Register to your account</p>
              </div>
              <div className="regis_btn_area">
                <p>Already registered?</p>
                <Link href={"/login"}>LOGIN NOW!</Link>
              </div>
            </div>
          </div>

          <div className="login_right_area_register">
            <h2>Register Here...</h2>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="frm_grp">
                <div className="input_feild">
                  <img src="../images/user.png" alt="img" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                </div>

                <div className="input_feild">
                  <img src="../images/user.png" alt="img" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="input_feild phone_count">
                <PhoneInput
                  country={"au"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputStyle={{ width: "100%", height: "40px" }}
                />
              </div>

              {/* Birthday */}
              <div className="birthday_feild">
                <h4>Birthday</h4>

                <div className="datebirth">
                  <select
                    value={formData.birthday.day}
                    onChange={(e) => handleBirthdayChange("day", e.target.value)}
                  >
                    <option value="">Day</option>
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>

                  <select
                    value={formData.birthday.month}
                    onChange={(e) => handleBirthdayChange("month", e.target.value)}
                  >
                    <option value="">Month</option>
                    {months.map((m, i) => (
                      <option key={m} value={i + 1}>
                        {m}
                      </option>
                    ))}
                  </select>

                  <select
                    value={formData.birthday.year}
                    onChange={(e) => handleBirthdayChange("year", e.target.value)}
                  >
                    <option value="">Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Town / State */}
              <div className="frm_grp">
                <div className="input_feild">
                  <img src="../images/user.png" alt="img" />
                  <input
                    type="text"
                    name="town"
                    placeholder="Town/City"
                    onChange={handleChange}
                  />
                </div>

                <div className="input_feild">
                  <img src="../images/user.png" alt="img" />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Pincode */}
              <div className="frm_grp">
                <div className="input_feild">
                  <img src="../images/user.png" alt="img" />
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    onChange={handleChange}
                  />
                </div>

                <div className="input_feild">
                  <img src="../images/user.png" alt="img" />
                  <input type="text" disabled value="Australia" />
                </div>
              </div>

              {/* Password */}
              <div className="frm_grp">
                <div className="input_feild">
                  <img src="../images/user.png" alt="img" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>

                <div className="input_feild">
                  <img src="../images/user.png" alt="img" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="checkarea">
                <label>
                  <input
                    type="checkbox"
                    name="agree"
                    onChange={handleChange}
                  />
                  <span>
                    I agree to all studio, membership and credit terms and conditions.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="submt_btn">
                <input type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
