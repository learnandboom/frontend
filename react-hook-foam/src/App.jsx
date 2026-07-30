// import React from "react";
// import { useForm } from "react-hook-form";
// import "./App.css";
// const App = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="">FirstName</label>
//           <input
//             type="text"
//             className={errors.FirstName ? "error-box" : ""}
//             {...register("FirstName", {
//               required: "can' be empty",
//               minLength: {
//                 value: 3,

//                 message: "at  least 3 character",
//               },
//             })}
//           />
//           {errors.FirstName && (
//             <p className="error-msg"> {errors.FirstName.message}</p>
//           )}
//         </div>
//         <div>
//           <label htmlFor="">MiddleName</label>
//           <input type="text" {...register("MiddleName")} />
//         </div>
//         <div>
//           <label htmlFor="">LastName</label>
//           <input type="text" {...register("LastName")} />
//         </div>
//         <button type="submit"> Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

// validation name

import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: "name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
