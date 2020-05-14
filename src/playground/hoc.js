// hoc - a component that renderr anather component
// 1 .reuse code
// 2. render hijacking
// 3. prop manipulation
// 4. abstarct state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>the info is : {props.info}</p>
  </div>
);

//hoc
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? <WrappedComponent {...props} /> : <p>No Authtication</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="There are the details" />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo isAuth={true} info="There are the details" />,
  document.getElementById("app")
);
