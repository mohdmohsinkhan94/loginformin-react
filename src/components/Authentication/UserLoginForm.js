import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Buttons from "../Buttons/Buttons";
import CustomeInput from "../CustomeInput/CustomeInput";
import Authcontext from "../Store/Authcontext/Authcontext";

const loginFormReducer = (oldState, action) => {
  if (action.type == "EMAIL_CHANGE") {
    return {
      ...oldState,
      email: {
        value: action.payload.value,
        isValid: action.payload.isValid,
      },
    };
  }
  if (action.type == "PASS_CHANGE") {
    return {
      ...oldState,
      password: {
        value: action.payload.value,
        isValid: action.payload.isValid,
      },
    };
  }
};
function UserLoginForm(props) {
  const initialState = {
    email: { value: " ", isValid: " " },
    password: { value: " ", isValid: " " },
  };
  const emailRef = useRef();
  const passwordRef = useRef();
  const [state, dispatch] = useReducer(loginFormReducer, initialState);
  const [email, setEmail] = useState();
  const [isValidEmail, setIsValidEmail] = useState();
  const [password, setPassword] = useState();
  const [isValidPass, setIsValidPass] = useState();
  const [isFormValid, setIsFormValid] = useState();
  const ctx = useContext(Authcontext);
  useEffect(() => {
    localStorage.getItem("isUserlogin", "true")
      ? props.UpdatedLoginState(true)
      : props.UpdatedLoginState(false);
  }, []);

  // useEffect(()=>{
  //     console.log('hello useEffact');
  //     const emailValidate = email.includes('@') && (email.length > 6);
  //     const passValidate = (password.length > 6);
  //    setIsValidEmail(()=>{
  //        return emailValidate;
  //    });
  //    setIsValidPass(()=>{
  //        return passValidate;
  //    });
  //    setIsFormValid(()=>{
  //        return emailValidate && passValidate;
  //    })
  // } ,[email,password])
  // if(localStorage.getItem('isUserlogin') =='true'){
  //     props.UpdatedLoginState(true)
  // }else{
  //     props.UpdatedLoginState(false)
  // }
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   //    const isValidEmail= email;
  //   //    const isValidPass = password;
  //   const isValidEmail = state.email.value;
  //   const isValidPass = state.password.value;
  //   if (isValidEmail && isValidPass) {
  //     localStorage.setItem("isUserlogin", "true");
  //     props.UpdatedLoginState(true);
  //   } else {
  //     localStorage.setItem("isUserlogin", "false");
  //     props.UpdatedLoginState(false);
  //   }
  // };
  const onSubmitLoginForm = useCallback(
    (e) => {
      e.preventDefault();
      const isValidEmail = state.email.value;
      const isValidPass = state.password.value;
      if (isValidEmail && isValidPass) {
        localStorage.setItem("isUserlogin", "true");
        props.UpdatedLoginState(true);
      } else if (!isValidEmail) {
        localStorage.setItem("isUserlogin", "false");
        props.UpdatedLoginState(false);
        emailRef.current.focusFromParent();
      } else if (!isValidPass) {
        localStorage.setItem("isUserlogin", "false");
        props.UpdatedLoginState(false);
        passwordRef.current.focusFromParent();
      }
    },
    [state.email, state.password]
  );
  const inputEmailHandler = (e) => {
    // setEmail(e.target.value);
    dispatch({
      type: "EMAIL_CHANGE",
      payload: {
        value: e.target.value,
        isValid: e.target.value.includes("@") && e.target.value.length > 6,
      },
    });
  };
  const inputPassHandler = (e) => {
    // setPassword(e.target.value);
    dispatch({
      type: "PASS_CHANGE",
      payload: {
        value: e.target.value,
        isValid: e.target.value.length > 6,
      },
    });
  };
  return (
    (
      <Authcontext.Consumer>
        {(ctx) => {
          return (
            <div>
              <form className="form-controls">
                {/* <input
                type="text"
                name="email"
                value={state.email.value}
                onChange={(e) => inputHandler(e)}
                placeholder="Enter your name"
              /> */}
                <CustomeInput
                  ref={emailRef}
                  controlName="email"
                  type="text"
                  placeholdertext="Custome email"
                  onValChange={(e) => inputEmailHandler(e)}
                  value={state.email.value}
                />
                <br></br>
                <CustomeInput
                  ref={passwordRef}
                  controlName="password"
                  type="text"
                  value={state.password.value}
                  onValChange={(e) => inputPassHandler(e)}
                />
                {/* <input
                type="password"
                name="password"
                value={state.password.value}
                onChange={(e) => inputPassHandler(e)}
                placeholder="Enter your password"
              /> */}
                <br></br>
                <Buttons type="button" onClick={onSubmitLoginForm}></Buttons>
                {/* <button
                type="submit"
                disabled={!(state.email.isValid && state.password.isValid)}
              >
                Login
              </button> */}
              </form>
            </div>
          );
        }}
      </Authcontext.Consumer>
    ),
    [state.email, state.password]
  );
}

export default UserLoginForm;
