import React, { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: "bi-house-door" },
    { name: "Dashboard", icon: "bi-grid" },
    { name: "Products", icon: "bi-box" },
    { name: "Analytics", icon: "bi-graph-up" },
    { name: "Schedules", icon: "bi-calendar2-event", badge: 2 },
    { name: "History", icon: "bi-clock-history" },
    { name: "Sales", icon: "bi-cart" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md h-full flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-start p-4 border-b">
          <div className="bg-blue-500 text-white p-2 rounded-md">
            <i className="bi bi-building"></i>
          </div>
          <h1 className="text-lg font-semibold ml-3">Sales.io</h1>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center p-2 rounded-md cursor-pointer ${
                  activeItem === item.name
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <i className={`${item.icon} mr-3`}></i>
                {item.name}
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full px-2">
                    {item.badge}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          <ul className="space-y-2">
            <li
              className={`flex items-center p-2 rounded-md cursor-pointer ${
                activeItem === "Messages"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveItem("Messages")}
            >
              <i className="bi bi-chat-dots mr-3"></i> Messages
              <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full px-2">
                2
              </span>
            </li>
            <li
              className={`flex items-center p-2 rounded-md cursor-pointer ${
                activeItem === "Notifications"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveItem("Notifications")}
            >
              <i className="bi bi-bell mr-3"></i> Notifications
              <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full px-2">
                2
              </span>
            </li>
            <li
              className={`flex items-center p-2 rounded-md cursor-pointer ${
                activeItem === "Settings"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveItem("Settings")}
            >
              <i className="bi bi-gear mr-3"></i> Settings
            </li>
            <li
              className={`flex items-center p-2 rounded-md cursor-pointer ${
                activeItem === "Logout"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveItem("Logout")}
            >
              <i className="bi bi-box-arrow-right mr-3"></i> Logout
            </li>
          </ul>

          {/* User Profile */}
          <div className="flex items-center mt-4 p-2">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Michael Smith</h2>
              <p className="text-xs text-gray-500">michaelsmith12@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
