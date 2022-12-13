const express = require("express");
const {
  getAllEmployees,
  getEmployee,
  updateAddress,
  deleteEmployee,
  getAllDepartments,
  getAllIngredients,
  addPilot,
  deleteIngredient,
  addDrone,
  addOwner,
  addEmployee,
  hireEmployee,
  getAllServices,
  getAllOwners,
  addDeliveryService,
  manageService,
  getAllPilots,
  getAllLocations,
  removePilot,
} = require("./utils/queryHelpers");
const app = express();
const cors = require("cors");

const genericError = "Sorry, something went wrong!";

app.use(express.json());

const whitelist = ["http://localhost:3001"]; //Change to the port in which react app is running
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// app.get("/departments", async function (request, response) {
//   try {
//     const [result] = await getAllDepartments();
//     response.send({ success: true, result });
//   } catch (error) {
//     response.status(500).send({
//       success: false,
//       error: genericError,
//     });
//   }
// });

app.get("/", async function (request, response) {
  try {
    const [result] = await getAllIngredients();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.get("/services", async function (request, response) {
  try {
    const [result] = await getAllServices();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});


app.get("/services/owners", async function (request, response) {
  try {
    const [result] = await getAllOwners();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});


app.get("/services/owners/employees", async function (request, response) {
  try {
    const [result] = await getAllEmployees();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.get("/services/owners/employees/pilots", async function (request, response) {
  try {
    const [result] = await getAllPilots();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.get("/services/owners/employees/pilots/locations", async function (request, response) {
  try {
    const [result] = await getAllLocations();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});
// app.get("/:id", async function (request, response) {
//   const { id } = request.params;
//   try {
//     const [result] = await getEmployee(id);
//     if (result.length > 0) {
//       response.send({ success: true, result: result[0] });
//     } else {
//       response.status(404).send({
//         success: false,
//         error: `No employee found with id ${id}`,
//       });
//     }
//   } catch (error) {
//     response.status(500).send({
//       success: false,
//       error: genericError,
//     });
//   }
// });
``
//add drone
app.post("/", async function (request, response) {
  try {
    const { drone_id, tag, barcode, packages, price } = request.body;
    const [result] = await addDrone(drone_id, tag, barcode, packages, price);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

//add delivery service
app.post("/services", async function (request, response) {
  try {
    const { service_id, service_name, service_home_base, service_manager } = request.body;
    const [result] = await addDeliveryService(service_id, service_name, service_home_base, service_manager);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0]});
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});


//manage service
app.put("/service", async function (request, response) {
  try {
    const {manage_service_username, manage_service_ID} = request.body;
    const [result] = await manageService(manage_service_username, manage_service_ID);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});



//add owner
app.post("/services/owners", async function (request, response) {
  try {
    const { owner_username, owner_fname, owner_lname, owner_address, owner_bdate } = request.body;
    const [result] = await addOwner(owner_username, owner_fname, owner_lname, owner_address, owner_bdate);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0]});
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

//add pilot
app.post("/services/owners/employees/pilots", async function (request, response) {
  try {
    const { pilot_username, pilot_licenseID, pilot_experience} = request.body;
    const [result] = await addPilot( pilot_username, pilot_licenseID, pilot_experience);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0]});
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

//add employee
app.post("/services/owners/employees", async function (request, response) {
  try {
    const {emp_username, emp_fname, emp_lname, emp_address, emp_bdate, emp_taxID, emp_hired, emp_experience, emp_salary} = request.body;
    const [result] = await addEmployee(emp_username, emp_fname, emp_lname, emp_address, emp_bdate, emp_taxID, emp_hired, emp_experience, emp_salary);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

//hire employee
app.post("/services/owners/employees", async function (request, response) {
  try {
    const {emp_username, emp_id} = request.body;
    const [result] = await hireEmployee(emp_username, emp_id);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});


// app.put("/:id", async function (request, response) {
//   try {
//     const { address } = request.body;
//     const { id } = request.params;
//     const [result] = await updateAddress(id, address);
//     if (result.affectedRows > 0) {
//       const [data] = await getEmployee(id);
//       response.send({ success: true, result: data[0] });
//     } else {
//       response.status(400).send({
//         success: false,
//         error: genericError,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     response.status(500).send({
//       success: false,
//       error: genericError,
//     });
//   }
// });



app.delete("/services/owners/employees/pilots", async function (request, response) {
  try {
    const { remove_pilot_username } = request.params;
    const [result] = await removePilot(remove_pilot_username);
    console.log(result)
    // if (result.affectedRows > 0) {
    //   response.send({ success: true });
    // } else {
    //   response.status(400).send({
    //     success: false,
    //     error: "0 rows affected",
    //   });
    // }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});



app.listen(3000);

// app.delete("/", async function (request, response) {
//   try {
//     const { barcode } = request.params;
//     const [result] = await deleteIngredient(barcode);
//     if (result.affectedRows > 0) {
//       response.send({ success: true });
//     } else {
//       response.status(400).send({
//         success: false,
//         error: "0 rows affected",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     response.status(500).send({
//       success: false,
//       error: genericError,
//     });
//   }
// });