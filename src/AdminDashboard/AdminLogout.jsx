import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("acceptedTerms");

    window.dispatchEvent(new Event("authChanged"));

    navigate("/");
  };

  return (
    <div>
      {/* Logout Button */}
      <button onClick={() => setOpen(true)}>
        Logout
      </button>

      {/* Modal */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>Confirm Logout</h2>
            <p>Are you sure?</p>

            <button onClick={() => setOpen(false)}>
              Cancel
            </button>

            <button onClick={logout}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminLogout;