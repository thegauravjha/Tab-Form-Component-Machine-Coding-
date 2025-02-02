# 📝 Tab Form Component using React

This project is a **form-based UI** built using **React.js**, designed as part of a machine coding challenge. The application features a multi-tab form with robust validation, data persistence, and a dynamic, scalable structure suitable for large-scale applications.

## 🚀 Features

- **Multi-Tab Navigation**: The form is divided into three tabs:

  - **Profile**
  - **Interest**
  - **Settings**

- **Form Validations**:

  - **Age Field**: Only numeric values allowed.
  - **Email Field**: Ensures correct email format.
  - **Mandatory Field Validation**: Checks required fields before submission.

- **Data Persistence Across Tabs**: Form data persists as the user navigates between tabs.
- **Single Submission Point**: The **Submit** button appears only on the last tab, and it submits the entire form.
- **Dynamic Form Generation**: Utilizes a form configuration object for easy scalability and maintainability.

## 🎯 Key Concepts

- **Scalability**:The form architecture is designed for easy extension and modification without needing to rewrite significant portions of code.
- **Maintainability**:The code is modular, readable, and organized, making it suitable for large teams and long-term projects.

## 🛠️ Installation & Setup

1.  `git clone https://github.com/your-username/tab-form-component.gitcd tab-form-component`
2.  `npm install`
3.  `npm start`

## 📂 Directory Structure

```
tab-form-component/
├── src/
│   ├── components/
│   │   ├── TabForm.js         # Main form component with tabs
│   │   ├── ProfileTab.js      # Profile tab form
│   │   ├── InterestTab.js     # Interest tab form
│   │   └── SettingsTab.js     # Settings tab form
│   ├── utils/
│   │   └── formConfig.js      # Dynamic form configuration object
│   ├── App.js                 # Entry point
├── public/                    # Static files
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## 📋 Usage

- **Navigate Between Tabs**: Users can move between **Profile**, **Interest**, and **Settings** tabs, with form data persisting across all tabs.
- **Form Validation**: Mandatory fields must be filled, with specific validations for numeric age and email format.
- **Submit**: The **Submit** button appears on the last tab (**Settings**) and submits the complete form.

## 🔧 Customization

- **Add New Fields or Tabs**: Modify formConfig.js to add new fields or tabs dynamically without altering core logic.
- **Validation Logic**: Validation rules can be customized in each tab's component (ProfileTab.js, InterestTab.js, etc.).

## 🤝 Contributions

This project is open for learning and improvement. Feel free to fork the repo and suggest enhancements or optimizations!

### 🚀 Happy Coding! 🎨

Let me know if you'd like any tweaks or more details! 😊
