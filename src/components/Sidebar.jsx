import React from "react";
import { 
  Home,
  Users,
  ShoppingCart,
  BarChart,
  FileText,
  Mail,
  Calendar,
  Bell,
  Settings,
} from "lucide-react";

// Simulating React Router functionality
const SidebarItem = ({ icon, text, isOpen }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <li 
      style={{ 
        padding: "10px", 
        display: "flex", 
        alignItems: "center",
        justifyContent: isOpen ? "flex-start" : "center",
        backgroundColor: isHovered ? "#374151" : "transparent",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.cloneElement(icon, { 
        size: 20,
        color: isHovered ? "#fff" : "#e2e8f0" 
      })}
      {isOpen && (
        <span style={{ 
          marginLeft: "10px",
          color: isHovered ? "#fff" : "#e2e8f0",
          fontWeight: isHovered ? "500" : "normal"
        }}>
          {text}
        </span>
      )}
    </li>
  );
};

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: <Home />, text: "Dashboard", path: "/" },
    { icon: <Users />, text: "Customers", path: "/customers" },
    { icon: <ShoppingCart />, text: "Orders", path: "/orders" },
    { icon: <BarChart />, text: "Analytics", path: "/analytics" },
    { icon: <FileText />, text: "Reports", path: "/reports" },
    { icon: <Mail />, text: "Messages", path: "/messages" },
    { icon: <Calendar />, text: "Calendar", path: "/calendar" },
    { icon: <Bell />, text: "Notifications", path: "/notifications" },
    { icon: <Settings />, text: "Settings", path: "/settings" },
  ];

  return (
    <nav
      style={{
        width: isOpen ? "250px" : "80px",
        backgroundColor: "#0074d9",
        color: "white",
        height: "100vh",
        transition: "width 0.3s ease",
        padding: "16px 12px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: isOpen ? "flex-start" : "center",
        alignItems: "center",
        padding: "8px 0 20px 0",
      }}>
        <h5
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            margin: 0,
            display: isOpen ? "block" : "none",
          }}
        >
          Hously-Dashboard
        </h5>
        {!isOpen && <Home size={24} />}
      </div>
      
      <ul style={{ 
        listStyleType: "none", 
        padding: "0", 
        margin: "0",
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }}>
        {menuItems.map((item, index) => (
          <SidebarItem 
            key={index} 
            icon={item.icon} 
            text={item.text} 
            isOpen={isOpen} 
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar; 
