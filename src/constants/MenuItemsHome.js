export const menuItemsHome = [
  {
    label: "ODF and GFC Status",
    path: "/dashboard",
    icon: <img src={require("assets/svg-icons/ODF.png")} alt="garbage-truck" />,
  },
  {
    label: "Construction Status",
    path: "/dashboard/construction-status",
    icon: (
      <img
        src={require("assets/svg-icons/construction-svgrepo-com.svg").default}
        alt="construction"
      />
    ),
  },
  {
    label: "Progress in SWM",
    path: "/dashboard/progress-swm",
    icon: (
      <img src={require("assets/svg-icons/7583355.png")} alt="in-progress" />
    ),
  },
  {
    label: "SWM Projects Status",
    path: "/dashboard/swm-projects-status",
    icon: (
      <img
        src={require("assets/svg-icons/status.png")}
        alt="external-project-status-computer-programming-flaticons-lineal-flat-icons"
      />
    ),
  },
  {
    label: "SWM Projects Status - Decentralized",
    path: "/dashboard/swm-projects-status-decentralized",
    icon: (
      <img
        src={require("assets/svg-icons/project-status.png")}
        alt="external-project-status-computer-programming-flaticons-lineal-flat-icons"
      />
    ),
  },
  {
    label: "Funds Status",
    path: "/dashboard/funds-status",
    icon: <img src={require("assets/svg-icons/fund.png")} alt="cash" />,
  },
  {
    label: "Key Updates",
    path: "/dashboard/key-updates",
    icon: <img src={require("assets/svg-icons/update.png")} alt="cash" />,
  },
  {
    label: "States and UTs Progress",
    path: "/dashboard/states-and-uts-progress",
    icon: (
      <img
        src={require("assets/svg-icons/flag-for-india-svgrepo-com.svg").default}
        alt="indian-flag"
      />
    ),
  },
  {
    label: "App Updates",
    path: "/dashboard/app-updates",
    icon: (
      <img
        src={require("assets/svg-icons/app-settings.png")}
        alt="app-updates"
      />
    ),
  },
];
